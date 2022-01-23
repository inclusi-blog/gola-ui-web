import React from 'react';
import {Acknowledgement, ForgetPasswordSentContainer} from "./ForgetPassword.style";

const ForgetPasswordSent = () => {
    return (
        <ForgetPasswordSentContainer>
            <Acknowledgement>Please check your email address for password reset link.</Acknowledgement>
        </ForgetPasswordSentContainer>
    );
};

export default ForgetPasswordSent;