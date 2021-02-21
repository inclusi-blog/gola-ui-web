import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RemoveButton from 'common-components/RemoveButton';
import { ExplorePillContent, ExplorePillWrapper } from './ExplorePill.style';

const ExplorePill = ({ interest, isSelected, onSelectInterest, id }) => {
  const [removeButtonStyle, setRemoveButtonStyle] = useState({});

  return (
    <If condition={isSelected}>
      <ExplorePillWrapper
        isSelected={isSelected}
        onMouseOver={() => {
          setRemoveButtonStyle({
            opacity: 1,
            width: 32,
            height: 32,
          });
        }}
        onMouseLeave={() => {
          setRemoveButtonStyle({
            opacity: 0,
            width: 0,
            height: 0,
          });
        }}
      >
        <Link to="/interest-page" style={{ textDecoration: 'none' }}>
          <ExplorePillContent>{interest}</ExplorePillContent>
        </Link>

        <RemoveButton additionalStyle={removeButtonStyle} onSelectInterest={onSelectInterest} id={id} />
      </ExplorePillWrapper>
    </If>
  );
};

ExplorePill.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  interest: PropTypes.string.isRequired,
  onSelectInterest: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ExplorePill;
