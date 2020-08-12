import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Portal } from '../new-story/editor/components/Components';
import { LinkToolTipSpan } from './LinkTooltip.style';

const LinkTooltip = ({ value }) => {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    if (document.getElementsByClassName(`link-${value}`)[0]) {
      const rect = document.getElementsByClassName(`link-${value}`)[0].getBoundingClientRect();
      el.style.opacity = 1;
      el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight + 65}px`;
      el.style.left = `${rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2}px`;
    }
  });

  return (
    <Portal>
      <LinkToolTipSpan
        ref={ref}
        className="link-hover"
        onMouseOut={() => {
          ref.current.style.visibility = 'hidden';
        }}
      >
        <a style={{ color: 'white' }} href={value}>
          {value}
        </a>
      </LinkToolTipSpan>
    </Portal>
  );
};

LinkTooltip.propTypes = {
  value: PropTypes.string.isRequired,
};

export default LinkTooltip;
