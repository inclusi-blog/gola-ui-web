import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import {Typography, Button} from "@mui/material";

export const TitleText = muiStyled(Typography)`
  font-family: ${(props) => (props.lang === 'tam' ? 'BalooThambi' : 'Quando')};
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-size: 6em;
  line-height: 120px;
  color: #3b3b58;
  margin: 0;
`;

export const TitleContent = muiStyled(Typography)`
  font-style: normal;
  font-family: ${(props) => (props.lang === 'tam' ? 'MuktaMalar' : 'Poppins')};
  font-weight: 400;
  font-size: 1.5em;
  line-height: 36px;
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
  width: 164px;
  height: 68px;
  background: #fa163f;
  border-radius: 52.5px;
  margin-top: 55px;
  margin-bottom: 75px;
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
