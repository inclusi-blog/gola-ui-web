import styled from 'styled-components';

export const SuggestionOuterWrapper = styled.div`
  width: 665px;
  position: absolute;
  height: 88px;
  background: #eaeaf7;
  border-radius: 8px;
  display: flex;
  padding: 5px 5px 5px 5px;
  flex-wrap: wrap;
  align-items: center;

  &:focus {
    outline: red auto 1px;
  }
`;

export const SuggestionWordWrapper = styled.div`
  background: ${(props) => (props.selected ? '#2C363F' : '#FFFFFF')};
  border-radius: 4px;
  height: 32px;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 6px;
  cursor: default;

  &:hover {
    background: ${(props) => (props.selected ? '#2C363F' : '#C4C4C4')};
  }
`;

export const SuggestionWord = styled.p`
  font-family: MuktaMalar;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 177%;
  margin: 0;
  color: ${(props) => (props.selected ? '#FFFFFF' : '#3B3B58')};
`;
