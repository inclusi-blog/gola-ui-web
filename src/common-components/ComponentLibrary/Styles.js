import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const AppTitle = styled(Typography)`
  font-family: ${(props) => (props.lang === 'tam' ? 'BalooThambi' : 'Quando')};
  text-align: center;

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

  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 96px;
    font-style: normal;
    font-weight: 400;
    line-height: 147px;
    letter-spacing: 0em;
  }
`;

export const AppDescription = styled(Typography)`
  font-family: ${(props) => (props.lang === 'tam' ? 'MuktaMalar' : 'Poppins')};
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

  ${(props) => props.theme.breakpoints.up('xl')} {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
  }
`;

export const PillText = styled(Typography)`
  font-weight: 500;
  line-height: 30px;
  font-family: MuktaMalar;
  font-style: normal;
  letter-spacing: 0em;
  text-align: center;

  ${(props) => props.theme.breakpoints.up('sm')} {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    display: block;
    line-height: 20px;
    font-size: 12px;
  }

  ${(props) => props.theme.breakpoints.up('md')} {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    display: block;
    font-size: 16px;
    line-height: 27px;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
    display: block;
    font-size: 16px;
    line-height: 27px;
  }

  ${(props) => props.theme.breakpoints.up('xl')} {
    text-overflow: unset;
    white-space: inherit;
    overflow: unset;
    text-align: left;
    font-size: 16px;
    line-height: 27px;
  }
`;
