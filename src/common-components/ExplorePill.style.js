import styled from 'styled-components';

export const ExplorePillContent = styled.p`
  font-family: MuktaMalar;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #f5f5f5;
  margin: 0 13px 0 0;
`;

export const ExplorePillWrapper = styled.div`
  height: 39px;
  border: 1px solid #3b3b58;
  box-sizing: border-box;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => (props.isSelected ? '#03527C' : 'transparent')};
  margin-top: 27px;
  margin-left: 46px;
  padding-left: 30px;
  padding-right: 20px;
  cursor: default;

  &:hover {
    padding-left: 15px;
    padding-right: 3px;
  }
`;
