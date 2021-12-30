import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const AppTitle = styled(Typography)`
  font-family: ${(props) => (props.lang === 'tam' ? 'BalooThambi' : 'Quando')};
  font-size: 96px;
  font-style: normal;
  font-weight: 400;
  line-height: 147px;
  letter-spacing: 0em;

  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 48px;
    font-style: normal;
    line-height: 74px;
    letter-spacing: 0em;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    font-size: 72px;
    font-style: normal;
    line-height: 111px;
    letter-spacing: 0em;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 96px;
    font-style: normal;
    line-height: 147px;
    letter-spacing: 0em;
  }
`;

export const AppDescription = styled(Typography)`
  font-family: ${(props) => (props.lang === 'tam' ? 'MuktaMalar' : 'Poppins')};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: center;

  ${(props) => props.theme.breakpoints.up('sm')} {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
  }

  ${(props) => props.theme.breakpoints.up('md')} {
    font-family: Mukta Malar;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
  }
`;
