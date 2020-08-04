import React from 'react';
import PropTypes from 'prop-types';
import { useSlate } from 'slate-react';
import { isFormatActive, toggleFormat } from '../utils/formatUtils';
import { Button, Icon } from './Components';

const LinkFormatter = ({ format, icon, showInput }) => {
  const editor = useSlate();
  return (
    <Button
      reversed
      onClick={() => {
        showInput();
      }}
      active={isFormatActive(editor, format)}
      /* eslint-disable-next-line no-unused-vars */
      onMouseDown={(event) => {
        event.preventDefault();
        toggleFormat(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

LinkFormatter.propTypes = {
  format: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  showInput: PropTypes.func.isRequired,
};

export default LinkFormatter;
