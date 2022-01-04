import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, withRouter } from 'react-router-dom';
import Logo from 'assets/images/logo.png';
import Context from 'context-providers/auth-modal-provider/Context';
import { AppBar, Button, Container, Toolbar, Typography, useMediaQuery } from '@mui/material';
import LanguageChangeButton from '../LanugageChangeButton';
import { LogoIcon } from './Header.style';
import Z_INDEX from '../../constants/zIndex';

const Header = () => {
  const { setModalName, setShowModal } = useContext(Context);
  const min = useMediaQuery('(min-width:360px)');
  const { t } = useTranslation();
  return (
    <AppBar
      id="pre-login-header"
      style={{ boxShadow: '0px 8px 46px rgba(0, 0, 0, 0.07)', zIndex: Z_INDEX.HEADER }}
      position="fixed"
    >
      <Toolbar style={{ backgroundColor: '#FFFFFF', justifyContent: 'space-between' }}>
        <Container>
          <Link
            style={{
              display: 'flex',
              flexDirection: 'row',
              underline: 'none',
              alignItems: 'center',
              textDecoration: 'none',
            }}
            to="/"
          >
            <LogoIcon alt="logo" src={Logo} />
            <If condition={!min}>
              <Typography marginLeft="12px">{t('welcome.title')}</Typography>
            </If>
          </Link>
        </Container>
        <Container style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            onClick={() => {
              setModalName('signin');
              setShowModal(true);
            }}
            variant="text"
            style={{ color: '#FA163F', textTransform: 'capitalize', height: 23 }}
          >
            Signin
          </Button>
          <LanguageChangeButton />
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
