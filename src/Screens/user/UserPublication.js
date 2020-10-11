import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MainContainer,
  PageTitle,
  PublicationSubTitle,
  PublicationActionType,
  BorderLine,
} from './UserPublication.style';
import MemberIn from './MemberIn';
import Following from './Following';
import Suggested from './Suggested';

const UserPublication = () => {
  const { t, i18n } = useTranslation();
  const [memberIn] = useState([
    {
      publicationTitle: 'The Ux collective',
      publicationDesc:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet',
      publicationImage: 'https://d14r87p68zn22t.cloudfront.net/Publications/ux-collective/profile.png',
    },
    {
      publicationTitle: 'The Ux collective',
      publicationDesc:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet',
      publicationImage: 'https://d14r87p68zn22t.cloudfront.net/Publications/ux-collective/profile.png',
    },
  ]);

  const [following, setFollowing] = useState([
    {
      publicationTitle: 'The Ux collective',
      publicationDesc:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet',
      publicationImage: 'https://d14r87p68zn22t.cloudfront.net/Publications/react/profile.png',
      isFollowed: true,
    },
    {
      publicationTitle: 'The Ux collective',
      publicationDesc:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet',
      publicationImage: 'https://d14r87p68zn22t.cloudfront.net/Publications/react/profile.png',
      isFollowed: false,
    },
  ]);

  const [suggested, setSuggested] = useState([
    {
      publicationTitle: 'The Ux collective',
      publicationDesc:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet',
      publicationImage: 'https://d14r87p68zn22t.cloudfront.net/Publications/flutter/profile.png',
      isFollowed: true,
    },
    {
      publicationTitle: 'The Ux collective',
      publicationDesc:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet',
      publicationImage: 'https://d14r87p68zn22t.cloudfront.net/Publications/flutter/profile.png',
      isFollowed: false,
    },
    {
      publicationTitle: 'The Ux collective',
      publicationDesc:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet',
      publicationImage: 'https://d14r87p68zn22t.cloudfront.net/Publications/flutter/profile.png',
      isFollowed: false,
    },
  ]);

  const onChangeButtonStatus = (selectedIndex) => {
    const updated = following.map((item, index) => {
      if (index === selectedIndex) {
        return { ...item, isFollowed: !item.isFollowed };
      }
      return item;
    });
    setFollowing(updated);
  };

  const onChangeStatus = (selectedIndex) => {
    const updated = suggested.map((item, index) => {
      if (index === selectedIndex) {
        return { ...item, isFollowed: !item.isFollowed };
      }
      return item;
    });
    setSuggested(updated);
  };

  const getMemberInPublication = () => {
    return memberIn.map((item) => <MemberIn details={item} />);
  };

  const getFollowingPublication = () => {
    return following.map((item, index) => (
      <Following details={item} index={index} onButtonClick={(selectedIndex) => onChangeButtonStatus(selectedIndex)} />
    ));
  };

  const getSuggestedPublication = () => {
    return suggested.map((item, index) => (
      <Suggested details={item} index={index} onButtonClick={(selectedIndex) => onChangeStatus(selectedIndex)} />
    ));
  };

  return (
    <MainContainer>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <PageTitle lang={i18n.language}>{t('welcome.PublicationTitle')}</PageTitle>
        <PublicationSubTitle lang={i18n.language}>{t('welcome.PublicationSubTitle')}</PublicationSubTitle>
      </div>

      <div style={{ marginBottom: '100px' }}>
        <PublicationActionType>Member in</PublicationActionType>
        <BorderLine />
        {getMemberInPublication()}
      </div>

      <div style={{ marginBottom: '100px' }}>
        <PublicationActionType>Following</PublicationActionType>
        <BorderLine />
        {getFollowingPublication()}
      </div>

      <div style={{ marginBottom: '100px' }}>
        <PublicationActionType>Suggested</PublicationActionType>
        <BorderLine />
        {getSuggestedPublication()}
      </div>
    </MainContainer>
  );
};

export default UserPublication;
