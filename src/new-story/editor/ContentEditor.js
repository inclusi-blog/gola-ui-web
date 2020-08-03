import React, { useState, useMemo } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import HoveringToolbar from "./HoveringToolbar";
import Leaf from "./Leaf";
import { toggleFormat } from "./utils/formatUtils";

const initialValue = [
  {
    children: [
      { text: 'This is editable plain text, just like a <textarea>!' },
    ],
  },
];

const ContentEditor = () => {
  const [value, setValue] = useState(initialValue);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  return (
    <Slate editor={editor} value={value} onChange={changedText => setValue(changedText)}>
      <HoveringToolbar />
      <Editable
        style={{
          fontSize: 24,
          lineHeight: '177%'
        }}
        renderLeaf={props => <Leaf {...props} />}
        /* eslint-disable-next-line consistent-return */
        onDOMBeforeInput={event => {
          switch (event.inputType) {
            case 'formatBold':
              return toggleFormat(editor, 'bold');
            case 'formatItalic':
              return toggleFormat(editor, 'italic');
            case 'formatUnderline':
              return toggleFormat(editor, 'underline');
            default:
              break;
          }
        }}
        placeholder="Enter some plain text..." />
    </Slate>
  );
};


export default ContentEditor;
