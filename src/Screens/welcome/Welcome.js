import React, { useContext, useState } from 'react';
import Pill from 'common-components/Pill';
import Context from 'context-providers/auth-modal-provider/Context';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router';
import LoggedInContext from 'context-providers/loggedin-provider/LoggedInContext';
import useBlur from 'hooks/useBlur';
import useEscapeHandler from 'hooks/useEscapeHandler';
import SignupOrSignInModal from './signup/SignupModal';
import { TitleText, TitleContent, PillContainer, SignupBorder, SignupText } from './Welcome.Style';

const Welcome = () => {
  const { modalName, setModalName, showModal, setShowModal } = useContext(Context);
  const { isLoggedIn } = useContext(LoggedInContext);
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
  const { t, i18n } = useTranslation();

  useEscapeHandler({ onEscape: () => setShowModal(false) });

  const getInterestPills = () => {
    return pills.map(({ value, isSelected, id }) => (
      <Pill
        key={id}
        interest={value}
        isSelected={isSelected}
        onSelectInterest={(selectedId) => {
          const updatedPills = pills.map((singlePill) =>
            singlePill.id === selectedId ? { ...singlePill, isSelected: !singlePill.isSelected } : singlePill
          );
          setPills(updatedPills);
        }}
        id={id}
      />
    ));
  };

  useBlur({ nodes: ['pre-login-header', 'welcome'], isVisible: showModal });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <If condition={isLoggedIn}>
        <Redirect to="/" />
      </If>
      <div
        id="welcome"
        style={{
          width: 1260,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 139,
            marginTop: 65,
          }}
        >
          <TitleText lang={i18n.language}>{t('welcome.title')}</TitleText>
          <TitleContent lang={i18n.language}>{t('welcome.sentence')}</TitleContent>
        </div>
        <PillContainer>{getInterestPills()}</PillContainer>
        <SignupBorder
          onClick={() => {
            setModalName('signup');
            setShowModal(true);
          }}
        >
          <SignupText>Signup</SignupText>
        </SignupBorder>
      </div>
      <If condition={showModal}>
        <SignupOrSignInModal onClose={() => setShowModal(false)} isSignup={!!(modalName && modalName === 'signup')} />
      </If>
    </div>
  );
};

export default Welcome;
