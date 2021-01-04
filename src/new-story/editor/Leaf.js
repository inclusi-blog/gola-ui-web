import React from 'react';

// eslint-disable-next-line react/prop-types
const Leaf = ({ attributes, children, leaf }) => {
  // eslint-disable-next-line react/prop-types
  if (leaf.bold) {
    // eslint-disable-next-line no-param-reassign
    children = <strong>{children}</strong>;
  }

  // eslint-disable-next-line react/prop-types
  if (leaf.italic) {
    // eslint-disable-next-line no-param-reassign
    children = <em>{children}</em>;
  }

  // eslint-disable-next-line react/prop-types
  if (leaf.underlined) {
    // eslint-disable-next-line no-param-reassign
    children = <u>{children}</u>;
  }

  // eslint-disable-next-line react/prop-types
  if (leaf.title) {
    // eslint-disable-next-line no-param-reassign
    children = (
      <span
        style={{
          fontWeight: 600,
          fontSize: 36,
          lineHeight: '52px',
          fontStyle: 'normal',
        }}
      >
        {children}
      </span>
    );
  }

  return <span {...attributes}>{children}</span>;
};

export default Leaf;
