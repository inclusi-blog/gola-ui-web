import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { createReactEditorJS } from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './constants';

const PostEditor = ({onChangeRoute, value}) => {
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
        onInitialize={handleInitialize}
        tools={EDITOR_JS_TOOLS}
        defaultValue={value}
        onChange={handleSave}
      />
    </If>
  );
};

PostEditor.propTypes = {
  onChangeRoute: PropTypes.func.isRequired,
  value: PropTypes.shape({
    time: PropTypes.number,
  }).isRequired
};

export default PostEditor;
