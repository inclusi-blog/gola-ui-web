import React from 'react';
import {Acknowledgement, ForgetPasswordSentContainer} from "../ForgetPassword/ForgetPassword.style";

const ResetPasswordSuccess = () => {
    return (
        <ForgetPasswordSentContainer>
            <Acknowledgement>Password changed successfully</Acknowledgement>
        </ForgetPasswordSentContainer>
    );
};

export default ResetPasswordSuccess;