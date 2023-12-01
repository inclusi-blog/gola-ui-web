import styled from 'styled-components';
import { Button, NewStoryLabel } from '../user/UserPublication.style';

export const StoriesTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
  color: #2c363f;
`;

export const StoriesTitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NewStoryButton = styled.button`
  height: 35px;
  padding: 8px 20px;
  background-color: ${(props) => (props.isBackgroundLessButton ? 'white' : '#FA163F')};
  cursor: default;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const ButtonLabel = styled(NewStoryLabel)`
  color: ${(props) => (props.isBackgroundLessButton ? '#FA163F' : 'white')};
`;
