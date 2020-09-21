import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import LanguageChangeButton from '../LanugageChangeButton';
import {
  AppHeaderName,
  HeaderWrapper,
  LeftHeader,
  LogoIcon,
  RightHeader,
  SignInButton,
  SignInButtonText,
  SubscribeButton,
  SubscribeText,
} from './Header.style';

// eslint-disable-next-line no-unused-vars
const Header = ({ location: { pathname } }) => {
  const { t } = useTranslation();
  return (
    <HeaderWrapper>
      <div
        style={{
          width: '1366px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          height: '64px',
          justifyContent: 'center',
        }}
      >
        <If condition={pathname === '/m/callback/email'}>
          <LeftHeader margin={0} style={{ justifyContent: 'center' }}>
            <LogoIcon alt="logo" src={Logo} />
            <AppHeaderName>{t('welcome.title')}</AppHeaderName>
          </LeftHeader>
          <Else />
          <LeftHeader margin={50}>
            <LogoIcon alt="logo" src={Logo} />
            <AppHeaderName>{t('welcome.title')}</AppHeaderName>
          </LeftHeader>
          <RightHeader>
            <SignInButton>
              <SignInButtonText>Signin</SignInButtonText>
            </SignInButton>
            <SubscribeButton>
              <SubscribeText>Subscribe</SubscribeText>
            </SubscribeButton>
            <LanguageChangeButton />
          </RightHeader>
        </If>
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
