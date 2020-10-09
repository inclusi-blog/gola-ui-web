import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from 'assets/images/logo.png';
import SearchImg from 'assets/images/search.svg';
import BookmarkImg from 'assets/images/bookmark.svg';
import ProfileImg from 'assets/images/profile.png';
import NotifyBell from 'common-components/NotifyBell';
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
} from './Header.style';
import LanguageChangeButton from '../LanugageChangeButton';

// eslint-disable-next-line no-unused-vars
const Header = ({ location: { pathname } }) => {
  const [unreadNotification] = useState(0);
  const { t } = useTranslation();

  return (
    <HeaderWrapper>
      <div style={{ width: '1366px', display: 'flex', flexDirection: 'row', alignItems: 'center', height: '64px' }}>
        <LeftHeader>
          <LogoIcon alt="logo" src={Logo} />
          <AppHeaderName>{t('welcome.title')}</AppHeaderName>
        </LeftHeader>
        <RightHeader>
          <Explore>Explore</Explore>
          <SearchIcon src={SearchImg} />
          <NotifyBell unreadNotification={unreadNotification} />
          <Bookmark src={BookmarkImg} />
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
