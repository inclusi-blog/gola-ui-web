import { useEffect } from 'react';

const useScrollBlock = ({ isModalOpen }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.scroll = 'no';
    } else {
      document.documentElement.style.overflow = 'scroll';
      document.body.scroll = 'yes';
    }
  }, [isModalOpen]);
};

export default useScrollBlock;
