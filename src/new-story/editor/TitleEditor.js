import React, { useState, useMemo } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import HoveringToolbar from "./HoveringToolbar";
import Leaf from "./Leaf";
import { toggleFormat } from "./utils/formatUtils";
import Icon from '@material-ui/core/Icon';

const initialValue = [
  {
    children: [
      { text: '' },
    ],
  },
];

const TitleEditor = () => {
  const [value, setValue] = useState(initialValue);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <div>
      <Slate editor={editor} value={value} onChange={changedTitle => setValue(changedTitle)}>
        <HoveringToolbar />
        <Editable
          renderLeaf={props => <Leaf {...props} />}
          placeholder="Title"
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
        />
      </Slate>
    </div>
  );
};

export default TitleEditor;
