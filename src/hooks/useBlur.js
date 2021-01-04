import { useEffect } from 'react';

const useBlur = ({ nodes, isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      nodes.forEach((node) => {
        const requestedNode = document.getElementById(node);
        if (requestedNode && requestedNode?.style) {
          requestedNode.style.filter = 'blur(5px)';
        }
      });
      return;
    }
    nodes.forEach((node) => {
      const requestedNode = document.getElementById(node);
      if (requestedNode && requestedNode?.style) {
        requestedNode.style.filter = 'none';
      }
    });
  }, [isVisible]);
};

export default useBlur;
