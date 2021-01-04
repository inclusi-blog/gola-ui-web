import { useEffect } from 'react';

const useBlur = ({ nodes, isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      nodes.forEach((node) => {
        document.getElementById(node).style.filter = 'blur(5px)';
      });
      return;
    }
    nodes.forEach((node) => {
      document.getElementById(node).style.filter = 'none';
    });
  }, [isVisible]);
};

export default useBlur;
