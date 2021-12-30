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
  width: 302px;
  height: 68px;
  background: #fa163f;
  border-radius: 52.5px;
  margin-top: 55px;
  margin-bottom: 49px;
`;

export const SignupText = muiStyled(Typography)`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 54px;
  color: #ffffff;
  text-transform: capitalize;
`;
