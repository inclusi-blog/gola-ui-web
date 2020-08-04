import React from 'react';

// eslint-disable-next-line react/prop-types
const Element = ({ attributes, children, element }) => {
  // eslint-disable-next-line react/prop-types
  switch (element.type) {
    case 'link':
      return (
        // eslint-disable-next-line react/prop-types
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export default Element;
