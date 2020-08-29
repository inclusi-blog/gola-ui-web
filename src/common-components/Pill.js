import React from 'react';
import PropTypes from 'prop-types';
import { PillContent, PillWrapper } from './Pill.style';

const Pill = ({ interest, isSelected }) => {
  return (
    <PillWrapper isSelected={isSelected}>
      <PillContent isSelected={isSelected}>{interest}</PillContent>
    </PillWrapper>
  );
};

Pill.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  interest: PropTypes.string.isRequired,
};

export default Pill;
