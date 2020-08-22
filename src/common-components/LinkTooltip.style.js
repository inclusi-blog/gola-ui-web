import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const LinkToolTipSpan = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 100;

  &::before {
    content: ' ';
    position: absolute;
    top: -37%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    transform: rotate(180deg);
    border-color: black transparent transparent transparent;
  }
`;
