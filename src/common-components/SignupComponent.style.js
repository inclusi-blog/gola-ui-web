import styled from 'styled-components';

export const TermsConditionsLabel = styled.p`
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #828294;
  text-align: center;
`;

export const PasswordContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  align-items: center;
`;

export const PasswordToolTip = styled.div`
  position: relative;

  &:nth-child(3) {
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
    width: 198px;
    height: 71px;
    color: #fff;
    border-radius: 6px;
    padding-bottom: 4px;
    padding-top: 2px;
    position: absolute;
    z-index: 1;
    top: 372px;
    left: 42%;
    background-color: #ffffff;
    border: 1px solid #2c363f;
    box-sizing: border-box;
    border-radius: 8px;
    color: black;

    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    -webkit-transition: opacity 0.5s linear;
    -moz-transition: opacity 0.5s linear;
    -ms-transition: opacity 0.5s linear;
    -o-transition: opacity 0.5s linear;
    transition: opacity 0.5s linear;
  }
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

export const ValidationFactorName = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #2c363f;
  margin-left: 5px;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

export const CapslockNotifierText = styled.p`
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #fa163f;
`;

export const TermsConditionsLink = styled.a`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #03527c;
`;
