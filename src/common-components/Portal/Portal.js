import { createPortal } from 'react-dom';

import usePortal from 'hooks/usePortal';

const Portal = ({ id, children }) => {
  const portalRoot = usePortal(id);

  return createPortal(children, portalRoot);
};

export default Portal;
