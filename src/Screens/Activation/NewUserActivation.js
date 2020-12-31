import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ajax from 'helpers/ajaxHelper';

const useQuery = () => {
  // eslint-disable-next-line compat/compat
  return new URLSearchParams(useLocation().search);
};

const NewUserActivation = () => {
  const query = useQuery();
  const [activated, setActivated] = useState(false);

  // eslint-disable-next-line no-console
  const token = query.get('token');

  useEffect(() => {
    if (token) {
      ajax
        .get(`idp/v1/user/activate/${token}`)
        .then(() => {
          // eslint-disable-next-line no-console
          console.log('user activated');
          setActivated(true);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('something went wrong', err);
        });
    }
  }, [token]);

  return (
    <div>
      <If condition={activated}>
        <p>activated</p>
        <Else />
        <p>activating ...</p>
      </If>
    </div>
  );
};

export default NewUserActivation;
