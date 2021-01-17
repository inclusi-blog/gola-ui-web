import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from 'assets/images/logo.png';
import SearchImg from 'assets/images/search.svg';
import BookmarkImg from 'assets/images/bookmark.svg';
import NotifyBell from 'common-components/NotifyBell';
import { CommonFlexRow, SmallDots } from 'common-components/PostTile.style';
import useDraft from 'hooks/useDraft';
import CommonToolTip from 'common-components/CommonToolTip/CommonToolTip';
import UserProfileContext from 'context-providers/UserProfileProvider/UserProfileContext';
import useOutsideAlerter from 'hooks/useOutsideAlerter';
import {
  AppHeaderName,
  HeaderWrapper,
  LeftHeader,
  LogoIcon,
  RightHeader,
  Explore,
  SearchIcon,
  Bookmark,
  PublishButton,
  PublishButtonText,
  StoryTypeText,
  SaveStatusText,
  ProfileContainer,
} from './Header.style';
import LanguageChangeButton from '../LanugageChangeButton';

// eslint-disable-next-line no-unused-vars
const Header = ({ location: { pathname } }) => {
  const [unreadNotification] = useState(0);
  const { t } = useTranslation();
  const location = useLocation();
  const { FetchPreviewDraft, isInitiallySaved, isSaving, isPublished } = useDraft();
  const isDraft =
    location.pathname === '/new-story' ||
    (location.pathname.split('/')[1] === 'p' && location.pathname.split('/')[3] === 'edit');
  const profileOptionsRef = useRef(null);
  const profileContainerRef = useRef(null);
  const { showProfileTooltip, setShowProfileTooltip } = useContext(UserProfileContext);

  useOutsideAlerter(profileOptionsRef);

  return (
    <HeaderWrapper id="post-login-header">
      <div style={{ width: '1260px', display: 'flex', flexDirection: 'row', alignItems: 'center', height: '64px' }}>
        <LeftHeader>
          <LogoIcon alt="logo" src={Logo} />
          <AppHeaderName>{t('welcome.title')}</AppHeaderName>
          <If condition={isDraft}>
            <StoryTypeText>Draft</StoryTypeText>
            <If condition={isInitiallySaved}>
              <SaveStatusText>{isSaving ? 'Saving...' : 'Saved'}</SaveStatusText>
            </If>
          </If>
        </LeftHeader>
        <RightHeader>
          <If condition={isDraft}>
            <PublishButton
              style={{ marginRight: 32, opacity: isInitiallySaved ? 1 : 0.5 }}
              onClick={() => {
                if (!isPublished) {
                  FetchPreviewDraft();
                }
              }}
            >
              <PublishButtonText>{isPublished ? 'Save' : 'Publish'}</PublishButtonText>
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
            <NotifyBell unreadNotification={unreadNotification} />
          </If>
          <ProfileContainer onClick={() => setShowProfileTooltip(true)} ref={profileContainerRef}>
            <CommonToolTip
              showToolTip={showProfileTooltip}
              parentRef={profileContainerRef}
              ref={profileOptionsRef}
              childWidth={208}
              render={() => {
                return (
                  <div style={{ width: 208, height: 497 }}>
                    <p
                      style={{
                        fontFamily: 'Quando',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: 18,
                        lineHeight: 22,
                        color: '#000000',
                      }}
                    >
                      Gokul bruce
                    </p>
                  </div>
                );
              }}
            />
          </ProfileContainer>
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
