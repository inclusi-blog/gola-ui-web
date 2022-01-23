import React, {useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import GoogleImg from 'assets/images/google.svg';
import Modal from '@mui/material/Modal';
import SigninComponent from 'common-components/SigninComponent';
import SignupComponent from 'common-components/SignupComponent';
import {Redirect} from 'react-router-dom';
import '../../../index.css';
import ajax from 'helpers/ajaxHelper';
import Close from 'assets/images/close.svg';
import {Fade} from "@mui/material";
import Context from "context-providers/auth-modal-provider/Context";
import {
    AuthBottomContainer,
    CenterSignupModalWrapper,
    CloseContainer,
    ForgetPasswordButton,
    GoogleButton,
    GoogleIcon,
    GoogleText,
    PromptText,
    PromptTextContainer,
    SigninButton,
    SignupHeader,
    SignupLabel,
    SignupLabelContainer,
    SignupOuterContainer,
    SignupTitleContainer,
} from './Signup.style';
import {TermsConditionsLabel, TermsConditionsLink} from "../../../common-components/SignupComponent.style";
import ForgetPassword from "../../../common-components/ForgetPassword/ForgetPassword";
import ForgetPasswordSent from "../../../common-components/ForgetPassword/ForgetPasswordSent";

const SignupModal = ({isSignup, onClose}) => {
    const { setModalName, modalName } = useContext(Context);
    const [userSignupDetails, setUserSignupDetails] = useState({
        encryptedPassword: '',
        email: '',
    });
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (userSignupDetails.email && userSignupDetails.encryptedPassword) {
            ajax
                .post('/idp/v1/user/register', {
                    email: userSignupDetails.email,
                    password: userSignupDetails.encryptedPassword,
                })
                .then(() => {
                    setRedirect(true);
                })
                .catch((err) => {
                    // eslint-disable-next-line no-console
                    console.log('something went wrong', err);
                });
        }
    }, [userSignupDetails]);

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open
            onClose={onClose}
            closeAfterTransition
            BackdropProps={{
                timeout: 500,
            }}
            style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Fade in>
                <SignupOuterContainer
                    isSignup={isSignup}
                    className="slideIn"
                    style={{
                        borderRadius: 10,
                        border: '1px solid black',
                        backgroundColor: 'white',
                        justifyContent: 'center',
                    }}
                >
                    <If condition={redirect}>
                        <Redirect
                            to={{
                                pathname: '/verify',
                                state: {
                                    email: userSignupDetails.email,
                                },
                            }}
                        />
                    </If>
                    <SignupTitleContainer>
                        <SignupHeader>Mensuvadi</SignupHeader>
                        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */}
                        <CloseContainer
                            onClick={() => onClose()}
                        >
                            <img src={Close} width={32} height={32} alt="closeButton"/>
                        </CloseContainer>
                    </SignupTitleContainer>
                    <CenterSignupModalWrapper>
                        <If condition={modalName === 'signup' || modalName === 'signin'}>
                            <GoogleButton>
                                <GoogleIcon src={GoogleImg} component="img"/>
                                <GoogleText>Continue with Google</GoogleText>
                            </GoogleButton>
                            <SignupLabelContainer>
                                <SignupLabel>or sign in with</SignupLabel>
                            </SignupLabelContainer>
                        </If>
                        <Choose>
                            <When condition={isSignup}>
                                <SignupComponent
                                    renderUsernameField={(email, password) => {
                                        setUserSignupDetails({
                                            ...userSignupDetails,
                                            email,
                                            encryptedPassword: password
                                        });
                                    }}
                                />
                            </When>
                            <When condition={modalName === 'forgetPassword'}>
                                <ForgetPassword onSuccessForgetPassword={() => setModalName('sentResetMail')} />
                            </When>
                            <When condition={modalName === 'sentResetMail'}>
                                <ForgetPasswordSent />
                            </When>
                            <Otherwise>
                                <SigninComponent/>
                            </Otherwise>
                        </Choose>
                    </CenterSignupModalWrapper>
                    <AuthBottomContainer>
                        <If condition={modalName === 'signup' || modalName === 'signin'}>
                            <If condition={isSignup}>
                                <PromptTextContainer>
                                    <PromptText>Already have an account ?</PromptText>
                                    <SigninButton onClick={() => setModalName('signin')}>
                                        Sign in
                                    </SigninButton>
                                </PromptTextContainer>
                                <TermsConditionsLabel>
                                    By signing up you agree with all our{' '}
                                    <TermsConditionsLink href="https://www.missingparantheses.com">terms</TermsConditionsLink> and{' '}
                                    <TermsConditionsLink href="https://www.missingparantheses.com">conditions</TermsConditionsLink>
                                </TermsConditionsLabel>
                            <Else/>
                            <PromptTextContainer>
                                <PromptText>Don’t have an account ?</PromptText>
                                <SigninButton onClick={() => setModalName('signup')}>
                                    Sign up
                                </SigninButton>
                                <ForgetPasswordButton onClick={() => setModalName('forgetPassword')}>Forgot password ?</ForgetPasswordButton>
                            </PromptTextContainer>
                            </If>
                        </If>
                    </AuthBottomContainer>
                </SignupOuterContainer>
            </Fade>
        </Modal>
    );
};

SignupModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    isSignup: PropTypes.bool.isRequired,
};

export default SignupModal;
