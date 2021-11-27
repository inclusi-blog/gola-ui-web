import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './constants';

const PostEditor = ({onChangeRoute, value, readOnly}) => {
  const ReactEditorJS = createReactEditorJS();
  const editorJS = useRef(null);

  const handleInitialize = useCallback((instance) => {
    editorJS.current = instance;
  }, []);

  const handleSave = useCallback(() => {
    editorJS.current.save().then((outputData) => {
      onChangeRoute(outputData);
      // eslint-disable-next-line no-console
      console.log('Article data: ', JSON.stringify(outputData));
    }).catch((error) => {
      // eslint-disable-next-line no-console
      console.log('Saving failed: ', error);
    });
  }, [onChangeRoute]);

  return (
    <If condition={value.time}>
      <ReactEditorJS
        readOnly={readOnly}
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
        defaultValue={value}
        onChange={handleSave}
      />
    </If>
  );
};

PostEditor.defaultProps = {
  readOnly: false,
  onChangeRoute: undefined,
};

PostEditor.propTypes = {
  onChangeRoute: PropTypes.func,
  value: PropTypes.shape({
    time: PropTypes.number,
  }).isRequired,
  readOnly: PropTypes.bool,
};

export default PostEditor;
