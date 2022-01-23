import {styled as muiStyled, styled} from "@mui/material/styles";
import {Container, Typography} from "@mui/material";
import {LoadingButton} from "@mui/lab";

export const ForgetPasswordContainer = styled(Container)`
    margin-top: 73px;
    padding: 0px;
    ${(props) => props.theme.breakpoints.up('sm')} {
        margin-top: 24px;
        padding: 0px;
    }
  
    ${(props) => props.theme.breakpoints.up('md')} {
        margin-top: 24px;
        padding: 0px;
    }
    
    ${(props) => props.theme.breakpoints.up('lg')} {
        margin-top: 73px;
        padding: 0px;
    }
    
    ${(props) => props.theme.breakpoints.up('xl')} {
        margin-top: 73px;
        padding: 0px;
    }
`;

export const HappensText = styled(Typography)`
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: center;
    color: #3B3B58;

    
    ${(props) => props.theme.breakpoints.up('sm')} {
        font-size: 12px;
        line-height: 18px;
    }
    
    ${(props) => props.theme.breakpoints.up('md')} {
        font-size: 12px;
        line-height: 18px;
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

export const InformationText = styled(Typography)`
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 8px;
    color: #606060;


    ${(props) => props.theme.breakpoints.up('sm')} {
        font-size: 10px;
        line-height: 14px;
    }
  
    ${(props) => props.theme.breakpoints.up('md')} {
        font-size: 10px;
        line-height: 14px;
    }
    
    ${(props) => props.theme.breakpoints.up('lg')} {
        font-size: 16px;
        line-height: 22px;
    }
    
    ${(props) => props.theme.breakpoints.up('xl')} {
        font-size: 16px;
        line-height: 22px;
    }
`;

export const FPCenterWrapper =  styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    
    ${(props) => props.theme.breakpoints.up('sm')} {
        margin-top: 38px;
        padding: 0px;
    }
  
    ${(props) => props.theme.breakpoints.up('md')} {
        margin-top: 38px;
        padding: 0px;
    }
    
    ${(props) => props.theme.breakpoints.up('lg')} {
        margin-top: 48px;
        padding: 0px;
    }
    
    ${(props) => props.theme.breakpoints.up('xl')} {
        margin-top: 48px;
        padding: 0px;
    }    
`;

export const FPBottomWrapper = styled(Container)`
    padding: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    ${(props) => props.theme.breakpoints.up('sm')} {
        margin-top: 45px;
        padding: 0px;
    }
  
    ${(props) => props.theme.breakpoints.up('md')} {
        margin-top: 45px;
        padding: 0px;
    }
    
    ${(props) => props.theme.breakpoints.up('lg')} {
        margin-top: 94px;
        padding: 0px;
    }
    
    ${(props) => props.theme.breakpoints.up('xl')} {
        margin-top: 94px;
        padding: 0px;
    }    
`;

export const FPSupportText = styled(Typography)`
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
    color: #606060;


    ${(props) => props.theme.breakpoints.up('sm')} {
        font-size: 9px;
        line-height: 14px;
    }
  
    ${(props) => props.theme.breakpoints.up('md')} {
        font-size: 9px;
        line-height: 14px;
    }
    
    ${(props) => props.theme.breakpoints.up('lg')} {
        font-size: 16px;
        line-height: 22px;
    }
    
    ${(props) => props.theme.breakpoints.up('xl')} {
        font-size: 16px;
        line-height: 22px;
    }
`;

export const FPContinueButton = muiStyled(LoadingButton)`
  box-shadow: 0px 4.21295px 6.31942px rgba(0, 0, 0, 0.15);
  border-radius: 4.21295px;
  background: ${(props) => props.disabled ? '#959595' : '#FA163F'};
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
    margin-top: 8px;
  }
  
  ${(props) => props.theme.breakpoints.up('md')} {
    width: 248px;
    height: 41px;
    font-size: 12px;
    line-height: 18px;
    margin-top: 8px;
  }
 
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: 460px;
    height: 78px;
    margin-top: 16px;
    border-radius: 8px;
    font-size: 20px;
    line-height: 30px;
  }
  
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: 460px;
    height: 78px;
    margin-top: 16px;
    border-radius: 8px;
    font-size: 20px;
    line-height: 30px;
  }
  
  &:hover {
    background: #FA163F;
  }
  
  .MuiLoadingButton-loadingIndicator {
    color: white;
  }
`;

export const ForgetPasswordSentContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    ${(props) => props.theme.breakpoints.up('sm')} {
        width: 258px;
        height: 252px;
    }
  
    ${(props) => props.theme.breakpoints.up('md')} {
        width: 258px;
        height: 252px;
    }
    
    ${(props) => props.theme.breakpoints.up('lg')} {
        height: 603px;
        width: 489px;
    }
    
    ${(props) => props.theme.breakpoints.up('xl')} {
        height: 603px;
        width: 489px;
    }
`;

export const Acknowledgement = styled(Typography)`
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: center;
    color: #3B3B58;

    ${(props) => props.theme.breakpoints.up('sm')} {
        font-size: 12px;
        line-height: 18px;
    }
  
    ${(props) => props.theme.breakpoints.up('md')} {
        font-size: 12px;
        line-height: 18px;
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