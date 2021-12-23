import React, {useContext, useState} from 'react';
import Context from 'context-providers/auth-modal-provider/Context';
import {useTranslation} from 'react-i18next';
import {Redirect} from 'react-router';
import LoggedInContext from 'context-providers/loggedin-provider/LoggedInContext';
import useBlur from 'hooks/useBlur';
import useEscapeHandler from 'hooks/useEscapeHandler';
import {Box, Button, Container, Grid} from "@mui/material";
import {makeStyles} from '@mui/styles';
import SignupOrSignInModal from './signup/SignupModal';
import {SignupBorder, SignupText, TitleContent, TitleText} from './Welcome.Style';

const styles = makeStyles({
    translationButton: {
        marginLeft: '83px',
        // eslint-disable-next-line no-useless-computed-key
        ["@media (max-width: 768px)"]: {
            marginLeft: '33px',
        },
    },
    body: {
        marginTop: '62px',
        // eslint-disable-next-line no-useless-computed-key
        ["@media (max-width: 768px)"]: {
            marginTop: '100px',
        },
    },
    signupButton: {
        '&:hover': {
            backgroundColor: '#fa163f',
        }
    }
});

const Welcome = () => {
    const {modalName, setModalName, showModal, setShowModal} = useContext(Context);
    const {isLoggedIn} = useContext(LoggedInContext);
    const style = styles();
    const [pills, setPills] = useState([
        {
            value: 'அரசியல்',
            isSelected: false,
            id: 1,
        },
        {
            value: 'ஆன்மீகம்',
            isSelected: false,
            id: 2,
        },
        {
            value: 'விளையாட்டு',
            isSelected: false,
            id: 3,
        },
        {
            value: 'அரசியல்',
            isSelected: false,
            id: 4,
        },
        {
            value: 'ஆன்மீகம்',
            isSelected: false,
            id: 5,
        },
        {
            value: 'விளையாட்டு',
            isSelected: false,
            id: 6,
        },
        {
            value: 'அரசியல்',
            isSelected: false,
            id: 7,
        },
        {
            value: 'ஆன்மீகம்',
            isSelected: false,
            id: 8,
        },
        {
            value: ' விளையாட்டு ',
            isSelected: false,
            id: 9,
        },
        {
            value: 'விளையாட்டு',
            isSelected: false,
            id: 11,
        },
        {
            value: 'அரசியல்',
            isSelected: false,
            id: 12,
        },
        {
            value: 'ஆன்மீகம்',
            isSelected: false,
            id: 13,
        },
        {
            value: 'விளையாட்டு',
            isSelected: false,
            id: 14,
        },
    ]);
    const {t, i18n} = useTranslation();

    useEscapeHandler({onEscape: () => setShowModal(false)});

    useBlur({nodes: ['pre-login-header', 'welcome'], isVisible: showModal});

    return (
        <section style={{marginTop: 64, display: 'flex'}} id="welcome">
            <If condition={isLoggedIn}>
                <Redirect to="/"/>
            </If>
            <Container className={style.body}>
                <Container style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <TitleText lang={i18n.language}>{t('welcome.title')}</TitleText>
                    <TitleContent lang={i18n.language}>{t('welcome.sentence')}</TitleContent>
                </Container>
                <Container style={{display: 'flex', alignItems: "center", flexDirection: 'column'}}>
                    <Box sx={{flexGrow: 1, marginTop: '81px'}}>
                        <Grid container spacing={5} style={{marginLeft: 0, marginTop: 0}}>
                            {
                                pills.map((item, index) => {
                                    return (
                                        <Grid item xs="auto" md={8} key={item.id} style={{flexBasis: "auto"}}>
                                            <Button
                                                variant="text"
                                                style={{
                                                    border: '1px solid #CCCFD1',
                                                    background: item.isSelected ? '#03527C' : '#FFFFFF',
                                                    color: item.isSelected ? '#F5F5F5' : '#03527C',
                                                    boxSizing: 'border-box',
                                                    borderRadius: '35px',
                                                    padding: '4px 32px',
                                                    fontWeight: 500,
                                                    fontSize: '1.125rem',
                                                    lineHeight: '30px'
                                                }}
                                                onClick={() => setPills((allItems) => allItems.map((running, runningIndex) => runningIndex === index ? {
                                                    ...item,
                                                    isSelected: !item.isSelected
                                                } : running))}
                                            >
                                                {item.value}
                                            </Button>
                                        </Grid>
                                    );
                                })
                            }
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
                <SignupOrSignInModal onClose={() => setShowModal(false)}
                                     isSignup={!!(modalName && modalName === 'signup')}/>
            </If>
        </section>
    );
};

export default Welcome;
