import styled from 'styled-components';
import TagPen from 'assets/images/tag-pen.svg';

export const PreviewContainer = styled.div`
  width: 703px;
  height: 163px;
  display: flex;
  flex-direction: row;
`;

export const PreviewImageContainer = styled.div`
  width: 163px;
  height: 163px;
  background: #c4c4c4;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const PreviewContentContainer = styled.div`
  margin-left: 20px;
  width: 520px;
`;

export const PreviewTitleText = styled.p`
  font-family: MuktaMalar;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #000000;
  margin-top: 0;
  margin-bottom: 0;
  width: 520px;
  overflow: hidden;
  position: relative;
  line-height: 1.6em;
  height: 2.9em;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;

  &::before {
    content: ${(props) => (props.wordsCount > 120 ? `'...'` : `''`)};
    position: absolute;
    right: 0;
    bottom: 0;
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: white;
  }
`;

export const TaglineInput = styled.textarea`
  width: 414px;
  height: 41px;
  margin-top: 8px;
  border: 0;
  resize: none;
  font-family: MuktaMalar;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #a7a7a7;
  background-position: 5px 8px;
  background-image: url(${TagPen});
  background-repeat: no-repeat;
  text-indent: 20px;
  &:focus {
    background-image: ${(props) => (props.showPen ? 'none' : `url(${TagPen})`)};
    border: 1px solid #9a9a9a;
    box-sizing: border-box;
    border-radius: 2px;
    outline: none;
  }
`;

export const InterestTagContainer = styled.div``;

export const InterestTagRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AddTagButton = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 200px;
  border: 1px solid #000000;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;

export const VerticalLine = styled.div`
  height: 6px;
  border-bottom: 1px solid black;
  transform: rotate(90deg);
  margin-top: 7px;
  margin-left: 8px;
  width: 10px;
`;

export const HorizontalLine = styled.div`
  width: 10px;
  border-bottom: 1px solid black;
  border-bottom-width: 1px;
  transform: rotate(180deg);
  margin-top: -4px;
  margin-left: 5px;
`;

export const AddInterestTagText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #000000;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 0;
  margin-left: 10px;
`;

export const InterestsInputs = styled.input`
  font-family: MuktaMalar;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  width: 90%;
  color: #3b3b58;
  border: none;

  &:focus {
    border-bottom: 1px solid black;
    outline: none;
  }
`;

export const InterestSuggestionsBox = styled.div`
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  width: 232px;
  border-radius: 8px;
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
`;

export const InterestListItem = styled.div`
  width: 222px;
  padding-top: ${(props) => props.paddingTop}px;
  padding-bottom: 8px;
  border-bottom: ${(props) => (props.isLast ? 'none' : '1px solid #DEE3ED')};
`;

export const InterestListItemText = styled.p`
  font-family: MuktaMalar;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #3b3b58;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 0;
  margin-left: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 200px;
  white-space: nowrap;
`;

export const InterestPillsContainer = styled.div`
  width: 520px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export const InterestTag = styled.div`
  height: 30px;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dee3ed;
  border-radius: 3px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export const InterestTagText = styled.p`
  font-family: MuktaMalar;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #3b3b58;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100px;
  white-space: nowrap;
`;
