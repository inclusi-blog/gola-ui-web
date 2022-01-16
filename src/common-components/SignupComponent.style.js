import styled from 'styled-components';
import {styled as muiStyled} from '@mui/material/styles';
import {Container, Link, Typography} from "@mui/material";

export const TermsConditionsLabel = muiStyled(Typography)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: #828294;
  text-align: center;
  letter-spacing: 0em;
  
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

export const PasswordContainer = muiStyled(Container)`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  align-items: center;
  
  ${(props) => props.theme.breakpoints.up('sm')} {
    padding: 0px;
    margin-top: 18px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    padding: 0px;
    margin-top: 18px;
  }
  
  ${(props) => props.theme.breakpoints.up('lg')} {
    margin-top: 32px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    margin-top: 32px;
  }
  
  
`;

export const PasswordToolTip = styled.div`
  position: relative;
`;

export const ToolTipSpan = styled.div`
  padding-left: 8px;
  padding-right: 8px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    top: 76%;
    left: 0%;
    margin-left: -10px;
  }

  &::before {
    border-top: 5px solid #2c363f;
    margin-top: -1px;
    transform: rotate(90deg);
    margin-left: -8px;
  }

  &::after {
    border-top: 5px solid white;
    margin-top: -1px;
    z-index: 1;
    transform: rotate(90deg);
    margin-left: -6px;
  }
`;

export const ValidationFactorContainer = muiStyled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props) => props.theme.breakpoints.up('sm')} {
    height: 15px;
    padding: 0px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    height: 15px;
    padding: 0px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    height: 21px;
    padding: 0px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    height: 21px;
    padding: 0px;
  }
`;

export const ValidationFactorName = muiStyled(Typography)`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #2c363f;
  margin-left: 5px;
  
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

export const CapslockNotifierText = muiStyled(Typography)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  color: #fa163f;
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
    font-size: 18px;
    line-height: 21px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 18px;
    line-height: 21px;
  }
`;

export const TermsConditionsLink = muiStyled(Link)`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #03527c;
  
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
    line-height: 21px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const EmailExistenceError = styled.p`
  visibility: ${(props) => (props.showExistsError ? 'visible' : 'hidden')};
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ff6e05;
  margin: 0;
`;
