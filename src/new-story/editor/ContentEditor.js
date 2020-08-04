import React, { useState, useMemo } from 'react';
import { createEditor } from 'slate';
import isUrl from 'is-url';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import Element from './components/Element';
import HoveringToolbar from './HoveringToolbar';
import Leaf from './Leaf';
import { toggleFormat, wrapLink } from './utils/formatUtils';

const initialValue = [
  {
    children: [{ text: 'This is editable plain text, just like a <textarea>!' }],
  },
];

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

const ContentEditor = () => {
  const [value, setValue] = useState(initialValue);
  const editor = useMemo(() => withLinks(withHistory(withReact(createEditor()))), []);
  return (
    <Slate editor={editor} value={value} onChange={(changedText) => setValue(changedText)}>
      <HoveringToolbar />
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

export default ContentEditor;
