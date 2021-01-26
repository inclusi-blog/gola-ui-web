import styled from 'styled-components';

export const FrontPage = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #2c363f;
  margin: 0;
`;

export const FeedSorterText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: ${(props) => (props.isSelected ? 700 : 400)};
  font-size: 16px;
  line-height: 24px;
  margin-top: 24px;
  color: ${(props) => (props.isSelected ? '#fa163f' : '#2c363f')};
`;
