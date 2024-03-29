import React from 'react';
import PropTypes from 'prop-types';
import { PillContent, PillWrapper } from './Pill.style';

const Pill = ({ interest, isSelected, onSelectInterest, id }) => {
  return (
    <PillWrapper isSelected={isSelected} onClick={() => onSelectInterest(id)}>
      <PillContent isSelected={isSelected}>{interest}</PillContent>
    </PillWrapper>
  );
};

Pill.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  interest: PropTypes.string.isRequired,
  onSelectInterest: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Pill;
