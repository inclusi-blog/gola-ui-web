import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import Logo from 'assets/images/logo.png';
import Context from 'context-providers/auth-modal-provider/Context';
import LanguageChangeButton from '../LanugageChangeButton';
import {
  AppHeaderName,
  HeaderWidthWrapper,
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
  const { setModalName, setShowModal } = useContext(Context);
  const { t } = useTranslation();
  return (
    <HeaderWrapper id="pre-login-header">
      <HeaderWidthWrapper>
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
            <SignInButton
              onClick={() => {
                setModalName('signin');
                setShowModal(true);
              }}
            >
              <SignInButtonText>Signin</SignInButtonText>
            </SignInButton>
            <SubscribeButton>
              <SubscribeText>Subscribe</SubscribeText>
            </SubscribeButton>
            <LanguageChangeButton />
          </RightHeader>
        </If>
      </HeaderWidthWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(Header);
