import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './NewStoryContext';

const NewStoryProvider = ({ children }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [isInitiallySaved, setIsInitiallySaved] = useState(false);
  const [draftID, setDraftID] = useState(null);
  const [isPublished, setIsPublished] = useState(false);

  return (
    <Context.Provider
      value={{
        setIsInitiallySaved,
        isInitiallySaved,
        isSaving,
        setIsSaving,
        draftID,
        setDraftID,
        isPublished,
        setIsPublished,
      }}
    >
      {children}
    </Context.Provider>
  );
};

NewStoryProvider.propTypes = {
  children: PropTypes.element,
};

NewStoryProvider.defaultProps = {
  children: null,
};

export default NewStoryProvider;
