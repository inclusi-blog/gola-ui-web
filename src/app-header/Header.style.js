import styled from 'styled-components';
import Z_INDEX from '../constants/zIndex';
import device from '../helper/styleHelper';

const HeaderWrapper = styled.header`
  z-index: ${Z_INDEX.HEADER};
  height: 64px;

  @media ${device.laptop} {
    background-color: white;
    box-shadow: 0px 8px 46px rgba(0, 0, 0, 0.07);
    box-sizing: border-box;
  }
`;

export default HeaderWrapper;
