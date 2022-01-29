import React, {useEffect, useState} from 'react';
import WarningNotify from "assets/images/WarningNotify.png";
import EmptyNotify from "assets/images/EmptyNotify.svg";
import {useMediaQuery} from "@mui/material";
import SuccessTick from "assets/images/SuccessTick.png";
import ValidatorWarning from "assets/images/ValidatorWarning.svg";
import PropTypes from "prop-types";
import {
    ForgetPasswordContainer, FPBottomWrapper,
    FPContinueButton,
    FPSupportText,
    HappensText
} from "../ForgetPassword/ForgetPassword.style";
import {AuthInputLabel, PasswordInput, SignupTooltip} from "../../Screens/welcome/signup/Signup.style";
import {ValidationFactorContainer, ValidationFactorName} from "../SignupComponent.style";
import {
    FieldWrapper,
    PasswordMatchWarning,
    ResetPasswordCenterContainer,
    ResetPasswordToolTip, RPBottomWrapper
} from "./ResetPassword.style";
import encrypt from "../../helpers/encrypt";
import loginService from "../../Screens/welcome/signin/loginService";

const ResetPassword = ({verifier}) => {
    const [startedTyping, setStartedTyping] = useState(false);
    const [passwordInvalidErr, setPassInvalidErr] = useState(false);
    const [confirmErr, setConfirmErr] = useState(null);
    const [isConfirmErr, setIsConfirmErr] = useState(false);
    const matches = useMediaQuery('(max-width:767px)');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmStartedTyping, setConfirmStartedTyping] = useState(false);
    const [shouldStartValidating, setShouldStarValidating] = useState(false);
    const [showCritieria, setShowCriteria] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState([
        {
            name: 'One small',
            isValid: false,
            id: 1,
        },
        {
            name: 'One caps',
            isValid: false,
            id: 2,
        },
        {
            name: 'minimum 8 characters',
            isValid: false,
            id: 3,
        },
    ]);

    const isHavingOneCapitalLetter = /[A-Z]/.test(password);
    const isHavingOneSmallLetter = /[a-z]/.test(password);


    useEffect(() => {
        const updatedValidation = isValidPassword.map((item) => {
            if (item.name === 'minimum 8 characters') {
                return {...item, isValid: password.length >= 8};
            }
            if (item.name === 'One caps') {
                return {...item, isValid: isHavingOneCapitalLetter};
            }
            return {...item, isValid: isHavingOneSmallLetter};
        });
        setIsValidPassword(updatedValidation);
    }, [password]);

    useEffect(() => {
        if (shouldStartValidating) {
            const isValid = isValidPassword.filter((item) => item.isValid === false).length > 0;
            if (isValid) {
                setPassInvalidErr(true);
            } else {
                setPassInvalidErr(false);
            }
        }
    }, [passwordInvalidErr, isValidPassword, shouldStartValidating]);

    useEffect(() => {
        if (confirmStartedTyping) {
            if (password !== confirmPassword) {
                setIsConfirmErr(true);
                setConfirmErr('Password doesn\'t match');
            } else {
                setIsConfirmErr(false);
                setConfirmErr(null);
            }
        }
    }, [confirmStartedTyping, confirmPassword, password]);

    const onReset = () => {
        setLoading(true);
        const encryptedPassword = encrypt(password);
        loginService.resetPassword(verifier, encryptedPassword).then(({ data }) => {
            console.log('success ', data);
        }).catch((err) => {
            if (err?.response?.data?.errorCode) {
                console.log('unable to reset ', err?.response?.data?.errorCode);
            }
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <ForgetPasswordContainer>
            <HappensText>Reset password</HappensText>
            <ResetPasswordCenterContainer>
                <FieldWrapper>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <AuthInputLabel>Password</AuthInputLabel>
                        <SignupTooltip className="tooltip" arrow placement="right" title={
                            <div style={{background: 'white'}}>
                                {
                                    isValidPassword.map((item) => {
                                        return (
                                            <ValidationFactorContainer key={item.id}>
                                                <img src={item.isValid ? SuccessTick : ValidatorWarning} width={12}
                                                     height={12} alt="acceptance factor"/>
                                                <ValidationFactorName>{item.name}</ValidationFactorName>
                                            </ValidationFactorContainer>
                                        );
                                    })
                                }
                            </div>
                        } open={showCritieria}>
                            <Choose>
                                <When condition={startedTyping && passwordInvalidErr}>
                                    <img src={WarningNotify} width={matches ? 7 : 12} height={matches ? 7 : 12}
                                         alt="warning"
                                         style={{marginLeft: 6, marginRight: 8}}/>
                                </When>
                                <Otherwise>
                                    <img src={EmptyNotify} width={matches ? 7 : 12} height={matches ? 7 : 12}
                                         alt="no warning"
                                         style={{marginLeft: 6, marginRight: 8}}/>
                                </Otherwise>
                            </Choose>
                        </SignupTooltip>
                    </div>
                    <PasswordInput
                        placeholder=""
                        value={password}
                        type="password"
                        onChange={({target}) => {
                            setStartedTyping(true);
                            setPassword(target.value);
                        }}
                        onFocus={() => {
                            setShouldStarValidating(true);
                            setShowCriteria(true);
                        }}
                        onBlur={() => setShowCriteria(false)}
                    />
                </FieldWrapper>
                <FieldWrapper>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <AuthInputLabel>Confirm password</AuthInputLabel>
                        <ResetPasswordToolTip className="tooltip" arrow placement="right" title={
                            <div style={{background: 'white'}}>
                                <div>
                                    <PasswordMatchWarning>{confirmErr}</PasswordMatchWarning>
                                </div>
                            </div>
                        } open={isConfirmErr}>
                            <If condition={confirmStartedTyping && isConfirmErr}>
                                <img src={WarningNotify} width={matches ? 7 : 12} height={matches ? 7 : 12}
                                     alt="warning"
                                     style={{marginLeft: 6, marginRight: 8}}/>
                                <Else/>
                                <img src={EmptyNotify} width={matches ? 7 : 12} height={matches ? 7 : 12}
                                     alt="no warning"
                                     style={{marginLeft: 6, marginRight: 8}}/>
                            </If>
                        </ResetPasswordToolTip>
                    </div>
                    <PasswordInput
                        placeholder=""
                        value={confirmPassword}
                        type="password"
                        onChange={({target}) => {
                            setConfirmStartedTyping(true);
                            setConfirmPassword(target.value);
                        }}
                    />
                </FieldWrapper>
                <RPBottomWrapper>
                    <FPSupportText>Need help ? reach us at support@mensuvadi.com</FPSupportText>
                    <FPContinueButton disabled={passwordInvalidErr || isConfirmErr} loading={loading} onClick={onReset}>Continue</FPContinueButton>
                </RPBottomWrapper>
            </ResetPasswordCenterContainer>
        </ForgetPasswordContainer>
    );
};

ResetPassword.defaultProps = {
    verifier: null,
};

ResetPassword.propTypes = {
    verifier: PropTypes.string,
};

export default ResetPassword;