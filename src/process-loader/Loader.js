import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon.png';
import LoaderWrapper from './Loader.style';

const Loader = ({ size, title }) => {
  return (
    <LoaderWrapper>
      <img alt="loader" src={Icon} width={size} height={size} />
      <If condition={Boolean(title) && typeof title === 'string'}>
        <p
          style={{
            marginTop: 20,
          }}
        >
          {title}
        </p>
      </If>
    </LoaderWrapper>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Loader.defaultProps = {
  size: 200,
  title: undefined,
};

export default Loader;
