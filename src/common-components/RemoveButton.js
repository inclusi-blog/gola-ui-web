import React, { useState } from 'react';
import PropTypes from 'prop-types';
import removeIcon from 'assets/images/remove.svg';
import { RemoveIcon, RemoveButtonWrapper } from './RemoveButton.style';
import CustomToolTip from './CustomToolTip';

const RemoveButton = ({ additionalStyle, onSelectInterest, id }) => {
  const [isShowCustomToolTip, setIsShowCustomToolTip] = useState(false);

  return (
    <RemoveButtonWrapper
      style={additionalStyle}
      onClick={() => onSelectInterest(id)}
      onMouseOver={() => {
        setIsShowCustomToolTip(true);
      }}
      onMouseLeave={() => {
        setIsShowCustomToolTip(false);
      }}
    >
      <If condition={additionalStyle.width > 0}>
        <RemoveIcon src={removeIcon} />
      </If>
      <If condition={isShowCustomToolTip}>
        <CustomToolTip />
      </If>
    </RemoveButtonWrapper>
  );
};

RemoveButton.propTypes = {
  additionalStyle: PropTypes.shape({
    width: PropTypes.number,
  }).isRequired,
  onSelectInterest: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default RemoveButton;
