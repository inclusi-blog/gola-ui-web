import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserProfileContext from 'context-providers/UserProfileProvider/UserProfileContext';

const useOutsideAlerter = (ref) => {
  const { showProfileTooltip, setShowProfileTooltip } = useContext(UserProfileContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (showProfileTooltip) {
          setShowProfileTooltip(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, showProfileTooltip, setShowProfileTooltip]);
};

useOutsideAlerter.propTypes = {
  ref: PropTypes.shape.isRequired,
};

export default useOutsideAlerter;
