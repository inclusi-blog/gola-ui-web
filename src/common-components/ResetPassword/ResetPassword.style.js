import { styled } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import { SignupTooltip } from '../../Screens/welcome/signup/Signup.style';
import { FPBottomWrapper } from '../ForgetPassword/ForgetPassword.style';

export const ResetPasswordCenterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  ${(props) => props.theme.breakpoints.up('sm')} {
    margin-top: 16px;
    padding: 0px;
  }

  ${(props) => props.theme.breakpoints.up('md')} {
    margin-top: 16px;
    padding: 0px;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-top: 25px;
    padding: 0px;
  }

  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-top: 25px;
    padding: 0px;
  }
`;

export const FieldWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  ${(props) => props.theme.breakpoints.up('sm')} {
    margin-top: 16px;
    padding: 0px;
  }

  ${(props) => props.theme.breakpoints.up('md')} {
    margin-top: 16px;
    padding: 0px;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-top: 25px;
    padding: 0px;
  }

  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-top: 25px;
    padding: 0px;
  }
`;

export const PasswordMatchWarning = styled(Typography)`
  font-family: Poppins;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0em;
  color: #2c363f;

  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 8px;
    line-height: 16px;
  }

  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 8px;
    line-height: 16px;
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

export const ResetPasswordToolTip = styled(SignupTooltip)`
  ${(props) => props.theme.breakpoints.up('sm')} {
    max-width: 168px;
    height: 25px;
  }

  ${(props) => props.theme.breakpoints.up('md')} {
    width: 168px;
    height: 25px;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 215px;
    height: 29px;
    max-width: 250px;
  }

  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 215px;
    height: 29px;
    max-width: 250px;
  }
`;

export const RPBottomWrapper = styled(Container)`
  padding: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${(props) => props.theme.breakpoints.up('sm')} {
    margin-top: 19px;
    padding: 0px;
  }

  ${(props) => props.theme.breakpoints.up('md')} {
    margin-top: 19px;
    padding: 0px;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-top: 65px;
    padding: 0px;
  }

  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-top: 65px;
    padding: 0px;
  }
`;
