import React, {useContext, useEffect, useState} from 'react';
import Context from 'context-providers/auth-modal-provider/Context';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router';
import LoggedInContext from 'context-providers/loggedin-provider/LoggedInContext';
import useBlur from 'hooks/useBlur';
import useEscapeHandler from 'hooks/useEscapeHandler';
import {Box, Container, Grid, useMediaQuery} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {PillText} from "common-components/ComponentLibrary/Styles";
import SignupOrSignInModal from './signup/SignupModal';
import {Pill, SignupBorder, SignupText, TitleContent, TitleText} from './Welcome.Style';
import PropTypes from "prop-types";

const styles = makeStyles({
  translationButton: {
    marginLeft: '83px',
    // eslint-disable-next-line no-useless-computed-key
    ['@media (min-width: 768px)']: {
      marginLeft: '33px',
    },
  },
  body: {
    padding: '0px',
    marginTop: '62px',
    '@media (min-width: 360px)': {
      marginTop: '60px',
      maxWidth: '282px'
    },
    '@media (min-width: 533px)': {
      marginTop: '60px',
      maxWidth: '507px'
    },
    '@media (min-width: 768px)': {
      marginTop: '100px',
      maxWidth: '712px',
    },
  },
  signupButton: {
    '&:hover': {
      backgroundColor: '#fa163f',
    },
  },
  welcomeSection: {
  },
  titleBody: {
    '@media (min-width: 360px)': {
      width: '278px',
    },

    '@media (min-width:533px)': {
      width: '417px',
    },

    '@media (min-width:768px)': {
      width: '651px',
    },

    '@media (min-width:1260px)': {
      width: '555px',
    },
  },
  titleStyle: {
    '@media (min-width: 360px)': {
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontSize: '48px',
      lineHeight: '73.73px',
    },
  },
  descriptionStyle: {
    '@media (min-width: 360px)': {
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '14px',
      lineHeight: '23.27px',
      textAlign: 'center',
    },
  },
  pillsContainer: {
    marginTop: '81px',
    overflow: 'hidden',
    '@media (min-width: 360px)': {
      width: '282px',
      height: '210px',
      marginTop: '20px',
    },
    '@media (min-width: 533px)': {
      width: '507px',
      height: '210px',
      marginTop: '20px',
    },
    '@media (min-width: 768px)': {
      width: '712px',
      height: '180px',
    },
    '@media (min-width: 1260px)': {
      width: '1180px',
      height: '220px',
    },
  },
  pillGrid: {
    // TODO: enable this after proper alignment fixes
    // '@media (min-width: 360px)': {
    //   '& > :first-child': {
    //     paddingLeft: '32px',
    //   },
    //   '& > :nth-child(2n + 1)': {
    //     paddingLeft: '32px',
    //   }
    // },
    // '@media (min-width: 533px)': {
    //   '& > :first-child': {
    //     paddingLeft: '22px',
    //   },
    //   '& > :nth-child(4n + 0)': {
    //     paddingLeft: '22px',
    //   }
    // },
    // '@media (min-width: 768px)': {
    //   '& > :first-child': {
    //     paddingLeft: '40px',
    //   },
    //   '& > :nth-child(5n + 0)': {
    //     paddingLeft: '40px',
    //   }
    // },
  }
});

const Welcome = ({location}) => {
  const { modalName, setModalName, showModal, setShowModal } = useContext(Context);
  const { isLoggedIn } = useContext(LoggedInContext);
  const style = styles();
  const [verifier, setVerifier] = useState(null);
  const [pills, setPills] = useState([
    {
      value: 'Art',
      isSelected: false,
      id: 1,
    },
    {
      value: 'Lifestyle',
      isSelected: false,
      id: 2,
    },
    {
      value: 'Culture',
      isSelected: false,
      id: 3,
    },
    {
      value: 'Health',
      isSelected: false,
      id: 4,
    },
    {
      value: 'Industry',
      isSelected: false,
      id: 5,
    },
    {
      value: 'Personal',
      isSelected: false,
      id: 6,
    },
    {
      value: 'Politics',
      isSelected: false,
      id: 7,
    },
    {
      value: 'Software',
      isSelected: false,
      id: 8,
    },
    {
      value: 'Science',
      isSelected: false,
      id: 9,
    },
    {
      value: 'Sports',
      isSelected: false,
      id: 11,
    },
    {
      value: 'Freedom',
      isSelected: false,
      id: 12,
    },
    {
      value: 'Poem',
      isSelected: false,
      id: 13,
    },
    {
      value: 'Short',
      isSelected: false,
      id: 14,
    },
  ]);
  const { t, i18n } = useTranslation();

  useEscapeHandler({ onEscape: () => setShowModal(false) });

  useBlur({ nodes: ['pre-login-header', 'welcome'], isVisible: showModal });

  useEffect(() => {
    if (location?.state?.verifier) {
      setVerifier(location.state.verifier);
      setModalName('resetPassword');
      setShowModal(true);
    }
  }, [location, setModalName]);

  return (
    <section style={{ marginTop: 64, display: 'flex' }} className={style.welcomeSection} id="welcome">
      <If condition={isLoggedIn}>
        <Redirect to="/" />
      </If>
      <Container className={style.body}>
        <Container
          style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
          className={style.titleBody}
        >
          <TitleText lang={i18n.language}>{t('welcome.title')}</TitleText>
          <TitleContent lang={i18n.language}>{t('welcome.sentence')}</TitleContent>
        </Container>
        <Container
          style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
        >
          <Box sx={{ flexGrow: 1 }} className={style.pillsContainer}>
            <Grid container rowSpacing={{ xs: 2, sm: 4, md: 6, lg: 5 }} columnSpacing={{ xs: 4, sm: 5, md: 6, lg: 7 }} style={{ marginLeft: 0, marginTop: 0 }} className={style.pillGrid}>
              {pills.map((item, index) => {
                return (
                  <Grid item xs="auto" md={8} key={item.id} style={{ flexBasis: 'auto' }}>
                    <Pill
                      variant="text"
                      style={{
                        border: '1px solid #CCCFD1',
                        background: item.isSelected ? '#03527C' : '#FFFFFF',
                        color: item.isSelected ? '#F5F5F5' : '#03527C',
                        boxSizing: 'border-box',
                        borderRadius: '35px',
                        padding: '4px 32px',
                      }}
                      onClick={() =>
                        setPills((allItems) =>
                          allItems.map((running, runningIndex) =>
                            runningIndex === index
                              ? {
                                  ...item,
                                  isSelected: !item.isSelected,
                                }
                              : running
                          )
                        )
                      }
                    >
                      <PillText>{item.value}</PillText>
                    </Pill>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <SignupBorder
            className={style.signupButton}
            onClick={() => {
              setModalName('signup');
              setShowModal(true);
            }}
          >
            <SignupText>Signup</SignupText>
          </SignupBorder>
        </Container>
      </Container>
      <If condition={showModal}>
        <SignupOrSignInModal onClose={() => setShowModal(false)} isSignup={!!(modalName && modalName === 'signup')} verifier={verifier}/>
      </If>
    </section>
  );
};

Welcome.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape
  }).isRequired
};

export default Welcome;
