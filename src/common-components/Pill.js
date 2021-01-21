import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { PillContent, PillWrapper } from './Pill.style';

const Pill = ({ interest, isSelected, onSelectInterest, id, position, margins, calculateMargins }) => {
  const [marginLeft, setMarginLeft] = useState(46);
  const ref = useRef();

  useEffect(() => {
    if (ref && ref.current) {
      const boundingClientRect = ref.current.getBoundingClientRect();
      calculateMargins(boundingClientRect.left);
    }
  }, [ref]);

  useEffect(() => {
    if (margins && margins.length) {
      setMarginLeft(margins[position]);
    }
  }, [margins, position]);

  return (
    <PillWrapper style={{ marginLeft }} ref={ref} isSelected={isSelected} onClick={() => onSelectInterest(id)}>
      <PillContent isSelected={isSelected}>{interest}</PillContent>
    </PillWrapper>
  );
};

Pill.defaultProps = {
  calculateMargins: () => {},
};

Pill.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  interest: PropTypes.string.isRequired,
  onSelectInterest: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  margins: PropTypes.arrayOf(PropTypes.number).isRequired,
  calculateMargins: PropTypes.func,
};

export default Pill;
