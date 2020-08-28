import React from 'react';
import PropTypes from 'prop-types';
import { PillContent, PillWrapper } from './Pill.style';

const Pill = ({ isSelected }) => {
  return (
    <PillWrapper isSelected={isSelected}>
      <PillContent isSelected={isSelected}>அரசியல்</PillContent>
    </PillWrapper>
  );
};
Pill.propTypes = {
  isSelected: PropTypes.bool.isRequired,
};

export default Pill;
