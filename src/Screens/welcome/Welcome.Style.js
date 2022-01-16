import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import { Typography, Button } from '@mui/material';
import { AppTitle, AppDescription } from 'common-components/ComponentLibrary/Styles';

export const TitleText = muiStyled(AppTitle)`
  color: #3b3b58;
`;

export const TitleContent = muiStyled(AppDescription)`
  color: #2c363f;
`;

export const PillContainer = styled.div`
  width: 1044px;
  display: flex;
  flex-wrap: wrap;
`;

export const PillBlock = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
`;

export const SignupBorder = muiStyled(Button)`
  background: #fa163f;
  border-radius: 52.5px;
  margin-top: 55px;
  margin-bottom: 49px;
 
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 248px;
    height: 56px;
  }
 
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 255px;
    height: 59px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 398px;
    height: 68px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 302px;
    height: 68px;
  }
`;

export const SignupText = muiStyled(Typography)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 54px;
  color: #ffffff;
  letter-spacing: 0em;
  text-transform: capitalize;
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    font-family: Poppins;
    font-size: 16px;
    line-height: 24px;
  }
 
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 18px;
    line-height: 27px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 24px;
    line-height: 36px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const Pill = muiStyled(Button)`
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: 86px;
    height: 28px;
    padding: 4px 16px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 104px;
    height: 35px;
    padding: 0px 16px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 104px;
    height: 35px;
    padding: 0px 16px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    height: 38px;
    padding: 0px 16px;
  }
`;