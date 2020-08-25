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
    <div>
      <HeaderWrapper>
        <LeftHeader>
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
      </HeaderWrapper>
    </div>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Header);
