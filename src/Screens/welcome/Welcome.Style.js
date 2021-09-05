import styled from 'styled-components';

export const TitleText = styled.p`
  width: 557px;
  height: 120px;
  font-family: ${(props) => (props.lang === 'tam' ? 'BalooThambi' : 'Quando')};
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 6em;
  line-height: 120px;
  color: #3b3b58;
  margin: 0;
`;

export const TitleContent = styled.p`
  width: 526px;
  height: 36px;
  font-style: normal;
  font-family: ${(props) => (props.lang === 'tam' ? 'MuktaMalar' : 'Poppins')};
  font-weight: normal;
  font-size: 1.5em;
  line-height: 36px;
  color: #2c363f;
  margin: 0;
  text-align: center;
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

export const SignupBorder = styled.div`
  width: 164px;
  height: 68px;
  background: #fa163f;
  border-radius: 52.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
  margin-bottom: 75px;
`;

export const SignupText = styled.p`
  width: 125px;
  height: 54px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 54px;
  margin: 0;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
