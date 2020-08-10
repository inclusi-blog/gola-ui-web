import React, { useContext } from 'react';
import ImageElement from 'common-components/ImageElement';
import Context from '../../../context-providers/HoverProvider/Context';

// eslint-disable-next-line react/prop-types
const Element = ({ attributes, children, element }) => {
  const { setLinkValue, setIsHovered } = useContext(Context);
  // eslint-disable-next-line react/prop-types
  switch (element.type) {
    case 'link':
      return (
        // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
        <a
          /* eslint-disable-next-line react/prop-types */
          className={`link-${element.url}`}
          {...attributes}
          onMouseOver={() => {
            // eslint-disable-next-line react/prop-types
            setLinkValue(element.url);
            setIsHovered(true);
          }}
          onMouseOut={() => {
            setLinkValue('');
            setIsHovered(false);
          }}
          /* eslint-disable-next-line react/prop-types */
          href={element.url}
        >
          {children}
        </a>
      );
    case 'image':
      // eslint-disable-next-line jsx-control-statements/jsx-jcs-no-undef
      return <ImageElement {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export default Element;
