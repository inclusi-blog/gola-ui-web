import styled from 'styled-components';

export const PillWrapper = styled.div`
  width: 133px;
  height: 39px;
  border: 1px solid #3b3b58;
  box-sizing: border-box;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.isSelected ? '#2C363F' : 'transparent')};
`;

export const PillContent = styled.p`
  font-family: MuktaMalar;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: ${(props) => (props.isSelected ? '#F5F5F5' : '#2C363F')};
  margin: 0;
`;
