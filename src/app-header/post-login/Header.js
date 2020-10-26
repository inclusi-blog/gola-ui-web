import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from 'assets/images/logo.png';
import SearchImg from 'assets/images/search.svg';
import BookmarkImg from 'assets/images/bookmark.svg';
import ProfileImg from 'assets/images/profile.png';
import NotifyBell from 'common-components/NotifyBell';
import { CommonFlexRow, SmallDots } from '../../common-components/InterestPostTile.style';
import {
  AppHeaderName,
  HeaderWrapper,
  LeftHeader,
  LogoIcon,
  RightHeader,
  Explore,
  SearchIcon,
  Bookmark,
  ProfileIcon,
  PublishButton,
  PublishButtonText,
} from './Header.style';
import LanguageChangeButton from '../LanugageChangeButton';

// eslint-disable-next-line no-unused-vars
const Header = ({ location: { pathname } }) => {
  const [unreadNotification] = useState(0);
  const { t } = useTranslation();
  const location = useLocation();
  return (
    <HeaderWrapper>
      <div style={{ width: '1260px', display: 'flex', flexDirection: 'row', alignItems: 'center', height: '64px' }}>
        <LeftHeader>
          <LogoIcon alt="logo" src={Logo} />
          <AppHeaderName>{t('welcome.title')}</AppHeaderName>
        </LeftHeader>
        <RightHeader>
          <If condition={location.pathname === '/new-story' || location.pathname === '/edit'}>
            <PublishButton style={{ marginRight: 32 }}>
              <PublishButtonText>Publish</PublishButtonText>
            </PublishButton>
            <CommonFlexRow style={{ marginRight: 33 }}>
              <SmallDots />
              <SmallDots />
              <SmallDots />
            </CommonFlexRow>
            <NotifyBell unreadNotification={unreadNotification} />
            <Else />
            <Explore>Explore</Explore>
            <SearchIcon src={SearchImg} />
            <Bookmark src={BookmarkImg} />
          </If>
          <ProfileIcon src={ProfileImg} />
          <LanguageChangeButton />
        </RightHeader>
      </div>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Header);
