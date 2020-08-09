import { css } from 'emotion';
import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Context from '../context-providers/HoverProvider/Context';
import { Menu, Portal } from '../new-story/editor/components/Components';
import { LinkHoverText, LinkToolTipSpan } from './LinkTooltip.style';

const LinkTooltip = ({ value, visibility }) => {
  const { clientX, clientY } = useContext(Context);
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return;
    }

    el.style.opacity = 1;
    el.style.top = `${clientY + window.pageYOffset - el.offsetHeight}px`;
    el.style.left = `${clientX + window.pageXOffset - el.offsetWidth}px`;
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
