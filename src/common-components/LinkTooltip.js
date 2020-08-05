import React from 'react';
import PropTypes from 'prop-types';
import { LinkHoverText, LinkToolTipSpan } from './LinkTooltip.style';

const LinkTooltip = ({ value, visibility }) => {
  return (
    <LinkToolTipSpan visibility={visibility}>
      <LinkHoverText>{value}</LinkHoverText>
    </LinkToolTipSpan>
  );
};

LinkTooltip.propTypes = {
  value: PropTypes.string.isRequired,
  visibility: PropTypes.string.isRequired,
};

export default LinkTooltip;
