import React from 'react';
import { css } from 'emotion';
import { useSelected, useFocused } from 'slate-react';

// eslint-disable-next-line react/prop-types
const ImageElement = ({ attributes, children, element }) => {
  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          /* eslint-disable-next-line react/prop-types */
          src={element.url}
          className={css`
            display: block;
            max-width: 100%;
            max-height: 20em;
            box-shadow: ${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'};
          `}
          alt="sample image"
        />
      </div>
      {children}
    </div>
  );
};

export default ImageElement;
