import React, { useContext } from 'react';
import ImageElement from 'common-components/ImageElement';
import Context from 'context-providers/HoverProvider/Context';

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
            const hoverLink = document.getElementsByClassName('link-hover');
            hoverLink[0].style.visibility = 'visible';
          }}
          onMouseOut={() => {
            // const mouseCoordinates = document.getElementById("root").onmousemove = findScreenCoords;
            // console.log(mouseCoordinates());
            // const hoverLink = document.getElementsByClassName("link-hover");
            // hoverLink[0].style.visibility = 'hidden';
            // const hoveringLink = document.getElementsByClassName("link-hover");
            // const hoverBounds = hoveringLink[0].getBoundingClientRect();
            // const linkBounds = event.currentTarget.getBoundingClientRect();
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
