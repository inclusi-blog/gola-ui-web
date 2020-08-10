import { css } from 'emotion';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Menu, Portal } from '../new-story/editor/components/Components';
import { LinkHoverText, LinkToolTipSpan } from './LinkTooltip.style';

const LinkTooltip = ({ value, visibility }) => {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    if (document.getElementsByClassName(`link-${value}`)[0]) {
      const rect = document.getElementsByClassName(`link-${value}`)[0].getBoundingClientRect();
      el.style.opacity = 1;
      el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
      el.style.left = `${rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2}px`;
    }
  });

  return (
    <Portal>
      <Menu
        ref={ref}
        className={css`
          padding: 8px 7px 6px;
          position: absolute;
          z-index: 1;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          border-radius: 4px;
          transition: opacity 0.75s;
        `}
      >
        <LinkToolTipSpan visibility={visibility}>
          <LinkHoverText>{value}</LinkHoverText>
        </LinkToolTipSpan>
      </Menu>
    </Portal>
  );
};

LinkTooltip.propTypes = {
  value: PropTypes.string.isRequired,
  visibility: PropTypes.string.isRequired,
};

export default LinkTooltip;
