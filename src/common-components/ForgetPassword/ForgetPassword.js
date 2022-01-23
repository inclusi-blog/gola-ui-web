import React, {useEffect, useState} from 'react';
import WarningNotify from "assets/images/WarningNotify.png";
import EmptyNotify from "assets/images/EmptyNotify.svg";
import {useMediaQuery} from "@mui/material";
import PropTypes from "prop-types";
import loginService from "../../Screens/welcome/signin/loginService";
import {
    ForgetPasswordContainer,
    FPBottomWrapper,
    FPCenterWrapper, FPContinueButton, FPSupportText,
    HappensText,
    InformationText
} from "./ForgetPassword.style";
import {AuthInputLabel, EmailInput} from "../../Screens/welcome/signup/Signup.style";
import {EmailExistenceError} from "../SignupComponent.style";
import {validateEmail} from "../../utils/commonUtils";

const ForgetPassword = ({onSuccessForgetPassword}) => {
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState(null);
    const matches = useMediaQuery('(max-width:767px)');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [startedTyping, setStartedTyping] = useState(false);

    useEffect(() => {
        if (validateEmail(email)) {
            setEmailErr(null);
            setIsValidEmail(true);
            return;
        }
        setIsValidEmail(false);
        setEmailErr('Please enter a valid email');
    }, [email]);


    const onSubmit = () => {
        loginService.forgetPassword(email).then(({ data }) => {
            if (data?.status === 'success') {
                onSuccessForgetPassword();
            }
        }).catch((err) => {
            console.log('unable to process the request ', err);
        });
    };

    return (
        <ForgetPasswordContainer>
            <HappensText>
                Don’t worry, happens to the best of us.
            </HappensText>
            <InformationText>
                If you have an account with us, We’ll send a password reset link to the mail.
            </InformationText>
            <FPCenterWrapper>
                <AuthInputLabel>Email</AuthInputLabel>
                <If condition={startedTyping && emailErr}>
                    <img src={WarningNotify} width={matches ? 7 : 12} height={matches ? 7 : 12} alt="warning"
                         style={{marginLeft: 6, marginRight: 8}}/>
                    <EmailExistenceError showExistsError={startedTyping && emailErr}>{emailErr}</EmailExistenceError>
                    <Else/>
                    <img src={EmptyNotify} width={matches ? 7 : 12} height={matches ? 7 : 12} alt="no warning"
                         style={{marginLeft: 6, marginRight: 8}}/>
                </If>
            </FPCenterWrapper>
            <EmailInput
                placeholder="example@gmail.com"
                value={email}
                onChange={({target}) => {
                    setStartedTyping(true);
                    setEmail(target.value);
                }}
            />
            <FPBottomWrapper>
                <FPSupportText>Need help ? reach us at support@mensuvadi.com</FPSupportText>
                <FPContinueButton disabled={!isValidEmail} onClick={onSubmit}>Continue</FPContinueButton>
            </FPBottomWrapper>
        </ForgetPasswordContainer>
    );
};

ForgetPassword.propTypes = {
    onSuccessForgetPassword: PropTypes.func.isRequired,
};

export default ForgetPassword;