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
