import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ToolTipWrapper } from './CommonToolTip.style';

const CommonToolTip = React.forwardRef((props, ref) => {
  const { showToolTip, render, parentRef, childWidth } = props;
  const [left, setLeft] = useState(0);
  const [beforeLeft, setBeforeLeft] = useState(0);

  useEffect(() => {
    if (parentRef && parentRef?.current) {
      const rect = parentRef.current.getBoundingClientRect();
      const reduce = childWidth / 2;
      setBeforeLeft(reduce - 12);
      setLeft(rect.left - reduce + 23);
    }
  }, [parentRef, showToolTip, childWidth]);

  return (
    <ToolTipWrapper showProfileOptions={showToolTip} ref={ref} left={left} beforeLeft={beforeLeft}>
      {render()}
    </ToolTipWrapper>
  );
});

CommonToolTip.defaultProps = {
  parentRef: undefined,
};

CommonToolTip.propTypes = {
  showToolTip: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  parentRef: PropTypes.object,
  childWidth: PropTypes.number.isRequired,
};

export default CommonToolTip;
