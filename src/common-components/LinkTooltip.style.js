import styled from 'styled-components';

export const LinkToolTipSpan = styled.span`
  visibility: ${(props) => (props.visibility === 'true' ? 'visible' : 'hidden')};
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
`;

export const LinkHoverText = styled.p`
  margin: 0 auto;
  font-size: 10px;
`;
