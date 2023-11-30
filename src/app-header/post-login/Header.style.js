import styled from 'styled-components';
import ProfileImg from 'assets/images/profile.png';
import Z_INDEX from '../../constants/zIndex';
import { FollowStatus, FollowStatusButton } from '../../Screens/user/UserPublication.style';

export const HeaderWrapper = styled.header`
  z-index: ${Z_INDEX.HEADER};
  height: 64px;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: white;
  box-shadow: 0px 8px 46px rgba(0, 0, 0, 0.07);
  box-sizing: border-box;
`;

export const LeftHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 50px;
`;

export const LogoIcon = styled.img`
  width: 45px;
  height: 45px;
`;

export const AppHeaderName = styled.p`
  margin: 0 0 0 12px;
  font-family: Quando;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #3b3b58;
`;

export const RightHeader = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const Explore = styled.p`
  margin: 0 auto;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #fa163f;
  margin-right: 33px;
`;

export const SearchIcon = styled.img`
  width: 17.69px;
  height: 17.69px;
  margin-right: 34.1px;
`;

export const Bookmark = styled.img`
  width: 15.17px;
  height: 19.5px;
  margin-right: 32.83px;
`;

export const ProfileIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const ProfileContainer = styled.button`
  border-radius: 200px;
  width: 40px;
  height: 40px;
  margin-right: 40px;
  background: url(${ProfileImg});
  border: none;
`;

export const PublishButton = styled(FollowStatusButton)`
  background: #fa163f;
  border-radius: 8px;
`;

export const PublishButtonText = styled(FollowStatus)`
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  cursor: default;
`;

export const StoryTypeText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-left: 61px;
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 0;
`;

export const SaveStatusText = styled(StoryTypeText)`
  color: #808080;
  margin-left: 24px;
`;

export const ProfileNameStyle = styled.p`
    font-family: Quando;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    color: #000000;
    white-space: nowrap;
    overflow: hidden;    
    text-overflow: ellipsis; 
`;

export const ProfileDropDownItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
