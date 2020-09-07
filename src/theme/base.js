import platte from '../palatte/colors';

const { oxfordblue, white, zodaic, scootter, torchred, pacificblue, dimgray } = platte;

export default {
  name: 'base',
  fontFamily: 'BalooThambi, Quando, MuktaMalar, Poppins',
  Main: {
    primaryBackground: white,
  },
  Header: {
    background: white,
    boxShadow: '0px, 8px, 46px, rgba(0, 0, 0, 0.07)',
  },
  Link: {
    color: pacificblue,
  },
  Button: {
    primary: {
      color: white,
      backgroundColor: torchred,
      hover: {},
      disabled: { color: white, background: '#959595' },
      border: 'none',
    },
    secondary: {
      color: torchred,
      hover: {},
      disabled: { color: '#6B6B6B' },
    },
  },
  Input: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#F1F5F8',
    hover: { borderColor: zodaic },
    focus: { borderColor: zodaic },
    OnFocus: {
      borderColor: zodaic,
      color: white,
      fontSize: 24,
      fontWeight: 'normal',
      fontColor: zodaic,
    },
  },
  Pills: {
    textColor: scootter,
    backgroundColor: white,
    borderColor: '#CCCFD1',
    selected: {
      textColor: white,
      backgroundColor: scootter,
    },
  },
  TagPills: {
    textColor: zodaic,
    backgroundColor: '#F0F0FC',
  },
  Line: {
    Light: {
      color: '#DEE3ED',
    },
    Dark: {
      color: zodaic,
    },
  },
  Toast: {
    ToastWrapper: {
      boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.13)',
      borderRadius: 10,
      backgroundColor: white,
    },
  },
  Text: {
    Title: {
      color: oxfordblue,
    },
    SubTitle: {
      color: dimgray,
    },
    PageTitle: {
      color: zodaic,
    },
    Tags: {
      color: zodaic,
    },
  },
  Modal: {
    Content: {
      backgroundColor: white,
    },
  },
};
