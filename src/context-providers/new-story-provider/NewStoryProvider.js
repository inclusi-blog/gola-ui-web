import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './NewStoryContext';

const NewStoryProvider = ({ children }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [isInitiallySaved, setIsInitiallySaved] = useState(false);

  return (
    <Context.Provider value={{ setIsInitiallySaved, isInitiallySaved, isSaving, setIsSaving }}>
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
