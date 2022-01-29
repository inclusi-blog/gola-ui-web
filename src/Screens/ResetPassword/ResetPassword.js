import React, {useEffect, useState} from 'react';
import {Redirect, useParams} from "react-router-dom";
import loginService from "../welcome/signin/loginService";

const ResetPassword = () => {
    const {uniqueID} = useParams();
    const [verifier, setVerifier] = useState(null);

    useEffect(() => {
        if (uniqueID) {
            loginService.canResetPassword(uniqueID)
                .then(({data}) => {
                    if (data?.verifier) {
                        setVerifier(data.verifier);
                    }
                }).catch((err) => {
                // eslint-disable-next-line no-console
                console.log('unable to reset password ', err);
            });
        }
    }, [uniqueID]);

    return (
        <If condition={verifier}>
            <Redirect to={{
                pathname: '/welcome',
                state: { verifier }
            }}/>
        </If>
    );
};

export default ResetPassword;