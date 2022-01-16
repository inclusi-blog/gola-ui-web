import React from "react";
import styled from 'styled-components';
import {styled as muiStyled} from '@mui/material/styles';
import {Button, Container, Box, Typography, Input, Tooltip} from "@mui/material";
import {tooltipClasses} from "@mui/material/Tooltip";

export const SignupHeader = muiStyled(Typography)`
  width: 279px;
  height: 60px;
  font-family: Quando;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  color: #2c363f;
  text-align: center;
 
 ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 24px;
    line-height: 30px;
    padding-left: 30px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 24px;
    line-height: 30px;
    padding-left: 30px;
  }
  
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 48px;
    line-height: 60px;
    padding-left: 150px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 48px;
    line-height: 60px;
    padding-left: 150px;
  } 
`;

export const GoogleButton = muiStyled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 8px;
  align-items: center;
  border: 1px solid #DEE3ED;
  box-sizing: border-box;
  text-transform: capitalize;
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 248px;
    height: 34px;
    margin-top: 26px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 248px;
    height: 34px;
    margin-top: 26px;
  }
  
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 460px;
    height: 68px;
    margin-top: 32px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 460px;
    height: 68px;
    margin-top: 32px;
  }
`;

export const GoogleIcon = muiStyled(Box)`
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 14px;
    height: 14px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 14px;
    height: 14px;
  }
  
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 36px;
    height: 36px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 36px;
    height: 36px;
  }
`;

export const GoogleText = muiStyled(Typography)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  color: #000000;
    
  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 12px;
    line-height: 18px;
    margin-right: 30px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 12px;
    line-height: 18px;
    margin-right: 30px;
  }
  
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-right: 80px;
    font-size: 18px;
    line-height: 27px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-right: 80px;
    font-size: 18px;
    line-height: 27px;
  }
  
`;

export const SignupWrapper = muiStyled(Typography)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    margin-top: 8px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-top: 8px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-top: 24px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-top: 24px;
  }
`;

export const CenterSignupModalWrapper = muiStyled(Container)`
  display: flex;
  flex-direction: column;
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    padding-left: 41px;
    padding-right: 41px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    padding-left: 41px;
    padding-right: 41px;
  }
  
  ${(props) => props.theme.breakpoints.up('lg')} {
    padding-left: 78px;
    padding-right: 78px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    padding-left: 78px;
    padding-right: 78px;
  }
`;

export const SignupLabelContainer = muiStyled(Container)`
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    margin-top: 8px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-top: 8px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-top: 25px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-top: 25px;
  }
`;

export const SignupLabel = muiStyled(Typography)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  color: rgba(59, 59, 88, 0.64);
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 10px;
    line-height: 14px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 10px;
    line-height: 14px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 14px;
    line-height: 19px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 14px;
    line-height: 19px;
  }
`;

export const AuthInputLabel = muiStyled(Typography)`
  font-family: Poppins;
  font-style: normal;
  color: #3b3b58;
  letter-spacing: 0em;
  font-weight: 400;
  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 10px;
    line-height: 14px;
  }
 
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 10px;
    line-height: 14px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 18px;
    line-height: 25px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const EmailInput = muiStyled(Input)`
  
  border: 0.881285px solid ${(props) => (props.isError ? '#FF6E05' : '#2c363f')};
  box-sizing: border-box;
  border-radius: 8px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  color: #2d2d2d;

  &:focus {
    border: 0.881285px solid ${(props) => (props.isError ? '#FF6E05' : '#2c363f')};
    outline: none;
  }
  
  &::before {
    border: none;
  }
  
  &:after {
    border: none;
  }
  
  &:hover:not(.Mui-disabled):before {
    border: none;
  }
  
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 248px;
    height: 34px;    
    font-size: 12px;
    line-height: 18px;
    padding-left: 12px;
    border-radius: 4px;
    margin-top: 4px;
    border: 0.464101px solid ${(props) => (props.isError ? '#FF6E05' : '#2c363f')};
  }
 
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 248px;
    height: 34px;    
    font-size: 12px;
    line-height: 18px;
    padding-left: 12px;
    border-radius: 4px;
    margin-top: 4px;
    border: 0.464101px solid ${(props) => (props.isError ? '#FF6E05' : '#2c363f')};
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 460px;
    height: 68px;
    margin-top: 8px;
    font-size: 24px;
    line-height: 36px;
    padding-left: 24px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 460px;
    height: 68px;
    margin-top: 8px;
    font-size: 24px;
    line-height: 36px;
    padding-left: 24px;
  }
`;

export const PasswordInput = muiStyled(Input)`
  padding-left: 24px;
  border: 0.881285px solid ${(props) => (props.isError ? '#FF6E05' : '#2c363f')};
  box-sizing: border-box;
  border-radius: 8px;
  margin-top: 8px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0em;
  color: #2d2d2d;

  &:focus {
    border: 0.881285px solid ${(props) => (props.isError ? '#FF6E05' : '#2c363f')};
    outline: none;
  }
  
  &::before {
    border: none;
  }
  
  &:after {
    border: none;
  }
  
  &:hover:not(.Mui-disabled):before {
    border: none;
  }
  
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 248px;
    height: 34px;    
    font-size: 12px;
    line-height: 18px;
    padding-left: 12px;
    border-radius: 4px;
    margin-top: 4px;
    border: 0.464101px solid ${(props) => (props.isError ? '#FF6E05' : '#2c363f')};
  }
 
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 248px;
    height: 34px;    
    font-size: 12px;
    line-height: 18px;
    padding-left: 12px;
    border-radius: 4px;
    margin-top: 4px;
    border: 0.464101px solid ${(props) => (props.isError ? '#FF6E05' : '#2c363f')};
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 460px;
    height: 68px;
    margin-top: 8px;
    font-size: 24px;
    line-height: 36px;
    padding-left: 24px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 460px;
    height: 68px;
    margin-top: 8px;
    font-size: 24px;
    line-height: 36px;
    padding-left: 24px;
  }
`;

export const SignInButton = muiStyled(Button)`
  box-shadow: 0px 4.21295px 6.31942px rgba(0, 0, 0, 0.15);
  border-radius: 4.21295px;
  background: #FA163F;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  color: white;
  
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0em;
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 248px;
    height: 41px;    
    font-size: 12px;
    line-height: 18px;
    margin-top: 23px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 248px;
    height: 41px;
    font-size: 12px;
    line-height: 18px;
    margin-top: 23px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 460px;
    height: 78px;
    margin-top: 40px;
    border-radius: 8px;
    font-size: 20px;
    line-height: 30px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 460px;
    height: 78px;
    margin-top: 40px;
    border-radius: 8px;
    font-size: 20px;
    line-height: 30px;
  }
  
  &:hover {
    background: #FA163F;
  }
`;

export const SignInText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  margin: 0 auto;
`;

export const AuthBottomContainer = muiStyled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0px;
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    margin-top: 20px;
    padding: 0px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    margin-top: 20px;
    padding: 0px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-top: 24px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-top: 24px;
  }
`;

export const PromptTextContainer = muiStyled(Container)`
  padding: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    padding: 0px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    padding: 0px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    padding: 0px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    padding: 0px;
  }
`;

export const PromptText = muiStyled(Typography)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0em;
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 10px;
    line-height: 15px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 10px;
    line-height: 15px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 14px;
    line-height: 21px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const SigninButton = muiStyled(Button)`
  color: #FA163F;
  text-transform: capitalize;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 10px;
    line-height: 15px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 10px;
    line-height: 15px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 14px;
    line-height: 21px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const AccountTxt = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
  margin: 0 auto;
`;

export const SignUpLink = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #fa163f;
  margin: 0 auto;
`;

export const ForgetPass = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  text-align: right;
  color: #fa163f;
  margin: 0;
  margin-left: 120px;
`;

export const UsernameUniqueTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #3b3b58;
  margin-top: 103px;
`;

export const UsernameLabel = styled(AuthInputLabel)`
  color: ${(props) => (props.isError ? '#FF6E05' : '#3B3B58')};
`;

export const UsernameInput = styled(EmailInput)`
  margin-top: 8px;
`;

export const ContinueButton = styled(SignInButton)`
  background-color: ${(props) => (props.canSubmit ? '#fa163f' : '#959595')};
`;

export const UsernameInputWrapper = styled.div`
  margin-top: 46px;
`;

export const SignupOuterContainer = muiStyled(Container)`
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 340px;
    height: ${props => props.isSignup ? 400 : 375}px;
    padding-top: 8px;
    padding-bottom: 12px;
    padding-left: 5px;
    padding-right: 5px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 340px;
    height: ${props => props.isSignup ? 400 : 375}px;
    padding-top: 8px;
    padding-bottom: 12px;
    padding-left: 5px;
    padding-right: 5px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 646px;
    height: 695px;
    padding-top: 16px;
    padding-bottom: 30px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 646px;
    height: 695px;
    padding-top: 16px;
    padding-bottom: 30px;
  }
`;

export const SignupTitleContainer = muiStyled(Container)`
  border-bottom: 1px solid #DEE4EB;
  display: flex;

  ${(props) => props.theme.breakpoints.up('sm')} {
    padding: 0px;
    width: 330px;
    height: 38px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 330px;
    height: 38px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 628px;
    height: 76px;
    justify-content: space-around;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 628px;
    height: 76px;
    justify-content: space-around;
  }
`;

export const CloseContainer = muiStyled(Button)`
  height: 32px;
  min-width: 32px;
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    padding: 0px;
    margin-right: 3px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    padding: 0px;
    margin-right: 3px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    padding: 0px;
    margin-left: 100px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    padding: 0px;
    margin-left: 110px;
  }
`;

export const EmailNotifierIcon = muiStyled(Container)`
  padding: 0px;
  ${(props) => props.theme.breakpoints.up('sm')} {
    padding: 0px;
    width: 7px;
    height: 7px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    padding: 0px;
    width: 7px;
    height: 7px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 13px;
    height: 13px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 13px;
    height: 13px;
  }
`;

const CustomToolTip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.87)',
    border: '1px solid black',
    borderRadius: 8,
  },
  [`& .${tooltipClasses.arrow}`]: {
    '&:before': {
      background: 'white',
      border: '1px solid black'
    }
  }
}));

export const SignupTooltip = muiStyled(CustomToolTip)`
  letter-spacing: 0em;
  font-style: normal;
  font-weight: 400;
  font-family: Poppins;
  ${(props) => props.theme.breakpoints.up('sm')} {
    max-width: 168px;
    height: 61px;
    font-size: 10px;
    line-height: 15px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 168px;
    height: 61px;
    font-size: 10px;
    line-height: 15px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 215px;
    height: 71px;
    font-size: 14px;
    line-height: 21px;
    max-width: 250px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 215px;
    height: 71px;
    font-size: 14px;
    line-height: 21px;
    max-width: 250px;
  }
`;

export const ForgetPasswordButton = muiStyled(Button)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: right;
  text-transform: capitalize;
  color: #FA163F;
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    line-height: 15px;
    font-size: 10px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    line-height: 15px;
    font-size: 10px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 14px;
    line-height: 21px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 14px;
    line-height: 21px;
  }
  
  &:hover {
    background: transparent;
  }
`;