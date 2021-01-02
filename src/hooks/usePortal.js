import { useRef, useLayoutEffect } from 'react';

const addRootElement = (id) => {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);

  document.body.insertBefore(rootContainer, null);

  return rootContainer;
};

const usePortal = (id) => {
  const rootElemRef = useRef(null);

  useLayoutEffect(() => {
    let parentElem = document.querySelector(`#${id}`);

    if (!parentElem) {
      parentElem = addRootElement(id);
    }

    parentElem.appendChild(rootElemRef.current);

    const cleanup = () => {
      rootElemRef.current.parentNode.removeChild(rootElemRef.current);
    };

    return cleanup;
  }, [id]);

  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  };

  return getRootElem();
};

export default usePortal;
