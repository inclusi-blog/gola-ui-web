import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ajax from '../../helpers/ajaxHelper';

const NewUserActivation = () => {
  const { token } = useParams();
  const [activated, setActivated] = useState(false);

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
