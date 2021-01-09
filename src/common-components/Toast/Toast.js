import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper } from './Toast.style';

const Toast = ({ subTitle, fadeOutSeconds }) => {
  const [animationStyle, setAnimationStyle] = useState({});

  useEffect(() => {
    setAnimationStyle({
      opacity: 1,
      transition: 'width 0.5s, height 0.5s, opacity 0.5s 0.5s',
    });
    const timeout = setTimeout(
      () =>
        setAnimationStyle({
          opacity: 0,
          transition: 'width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s',
        }),
      fadeOutSeconds
    );

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ContentWrapper style={animationStyle}>
      <p>{subTitle}</p>
    </ContentWrapper>
  );
};

Toast.defaultProps = {
  subTitle: undefined,
  fadeOutSeconds: 5000,
};

Toast.propTypes = {
  subTitle: PropTypes.string,
  fadeOutSeconds: PropTypes.number,
};

export default Toast;
