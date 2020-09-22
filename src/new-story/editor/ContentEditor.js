import React, { useState, useMemo, useContext, useEffect, useRef } from 'react';
import { createEditor, Transforms, Node } from 'slate';
import { v4 as uuidv4 } from 'uuid';
import { debounce } from 'lodash';
import isUrl from 'is-url';
import PropTypes from 'prop-types';
import imageExtensions from 'image-extensions';
import { Slate, Editable, withReact, ReactEditor } from 'slate-react';
import { withHistory } from 'slate-history';
import LinkTooltip from 'common-components/LinkTooltip';
import Context from 'context-providers/HoverProvider/Context';
import ajax from '../../helpers/ajaxHelper';
import Element from './components/Element';
import HoveringToolbar from './HoveringToolbar';
import Leaf from './Leaf';
import { toggleFormat, wrapLink } from './utils/formatUtils';

const initialValue = [
  {
    children: [{ text: '' }],
  },
];

const insertImage = (editor, url) => {
  const text = { text: '' };
  const image = { type: 'image', url, children: [text] };
  Transforms.insertNodes(editor, image);
};

const isImageUrl = (url) => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  // eslint-disable-next-line compat/compat
  const ext = new URL(url).pathname.split('.').pop();
  return imageExtensions.includes(ext);
};

const withImages = (editor) => {
  const { insertData, isVoid } = editor;

  // eslint-disable-next-line no-param-reassign
  editor.isVoid = (element) => {
    return element.type === 'image' ? true : isVoid(element);
  };

  // eslint-disable-next-line no-param-reassign
  editor.insertData = (data) => {
    const text = data.getData('text/plain');
    const { files } = data;

    if (files && files.length > 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const file of files) {
        const fromData = new FormData();
        fromData.append('file', file, file.fileName);

        ajax
          .post('/v1/upload', fromData, {
            headers: {
              accept: 'application/json',
              'Accept-Language': 'en-US,en;q=0.8',
              // eslint-disable-next-line no-underscore-dangle
              'Content-Type': `multipart/form-data; boundary=${fromData._boundary}`,
            },
          })
          .then(({ data: steam }) => {
            const imageUrl = steam.filePath.replace(
              'https://golaimage.s3.ap-south-1.amazonaws.com',
              'https://d14r87p68zn22t.cloudfront.net'
            );
            insertImage(editor, imageUrl);
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log(err);
          });
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const withLinks = (editor) => {
  const { insertData, insertText, isInline } = editor;

  // eslint-disable-next-line no-param-reassign
  editor.isInline = (element) => {
    return element.type === 'link' ? true : isInline(element);
  };

  // eslint-disable-next-line no-param-reassign
  editor.insertText = (text) => {
    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertText(text);
    }
  };

  // eslint-disable-next-line no-param-reassign
  editor.insertData = (data) => {
    const text = data.getData('text/plain');

    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const ContentEditor = ({ setShowSideBar, setClientRects, onChangeRoute }) => {
  const [value, setValue] = useState(initialValue);
  const { linkValue, isHovered } = useContext(Context);
  const editor = useMemo(() => withImages(withLinks(withHistory(withReact(createEditor())))), []);
  const puid = uuidv4().substring(24);

  useEffect(() => {
    const selection = window.getSelection && window.getSelection();
    if (selection && selection.rangeCount > 0) {
      // const domRange = selection.getRangeAt(0);
      // const rect = domRange.getBoundingClientRect();
      // const range = selection.getRangeAt(0);
      if (editor.selection.anchor.offset === 0) {
        setClientRects(
          ReactEditor.toDOMNode(editor, Node.get(editor, editor.selection.anchor.path)).getBoundingClientRect()
        );
        // console.log(ReactEditor.toDOMNode(editor, Node.get(editor, editor.selection.anchor.path)).getBoundingClientRect());
        setShowSideBar(true);
      } else {
        setShowSideBar(false);
      }
    }
  }, [editor.children, setShowSideBar]);

  const delayedHandleChange = useRef(debounce((eventData) => onChangeRoute(puid, eventData), 5000)).current;

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(changedText) => {
        setValue(changedText);
        delayedHandleChange(changedText);
      }}
    >
      <HoveringToolbar />
      <LinkTooltip value={linkValue} visibility={isHovered.toString()} />
      <Editable
        renderElement={(props) => <Element {...props} />}
        style={{
          fontSize: 24,
          lineHeight: '177%',
        }}
        renderLeaf={(props) => <Leaf {...props} />}
        /* eslint-disable-next-line consistent-return */
        onDOMBeforeInput={(event) => {
          switch (event.inputType) {
            case 'formatBold':
              return toggleFormat(editor, 'bold');
            case 'formatItalic':
              return toggleFormat(editor, 'italic');
            case 'formatUnderline':
              return toggleFormat(editor, 'underline');
            case 'formatLink':
              return toggleFormat(editor, 'link');
            default:
              break;
          }
        }}
        placeholder="Enter some plain text..."
      />
    </Slate>
  );
};

ContentEditor.propTypes = {
  setShowSideBar: PropTypes.func.isRequired,
  setClientRects: PropTypes.func.isRequired,
  onChangeRoute: PropTypes.func.isRequired,
};

export default ContentEditor;
