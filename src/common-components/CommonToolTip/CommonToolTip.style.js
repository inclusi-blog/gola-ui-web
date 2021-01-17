import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ToolTipWrapper = styled.span`
  visibility: ${(props) => (props.showProfileOptions ? 'visible' : 'hidden')};
  color: #fff;
  text-align: center;
  padding: 5px 0;
  position: absolute;
  z-index: 20;
  left: ${(props) => (props && props.left ? props.left : 0)}px;
  top: 8%;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 8px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: ${(props) => (props && props.beforeLeft ? props.beforeLeft : 0)}px;
    bottom: 97.7%;
    width: 0;
    height: 0;
    border-top: 10px solid white;
    border-right: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid white;
    transform: rotate(45deg);
    box-shadow: -2px -2px 0px -1px rgba(0, 0, 0, 1);
  }
`;
