import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { Slate, Editable, withReact } from 'slate-react';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import HoveringToolbar from './HoveringToolbar';
import Leaf from './Leaf';
import { toggleFormat } from './utils/formatUtils';

const TitleEditor = ({ onChangeTitle, value }) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <div>
      <Slate
        editor={editor}
        value={value}
        onChange={(changedTitle) => {
          onChangeTitle(changedTitle);
        }}
      >
        <HoveringToolbar />
        <Editable
          style={{
            fontSize: '3em',
            fontFamily: 'Times New Roman',
            marginBottom: 10,
          }}
          renderLeaf={(props) => <Leaf {...props} />}
          placeholder="Title"
          /* eslint-disable-next-line consistent-return */
          onDOMBeforeInput={(event) => {
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

TitleEditor.propTypes = {
  onChangeTitle: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default TitleEditor;
