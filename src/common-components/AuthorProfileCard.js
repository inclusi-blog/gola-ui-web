import React, { useState } from 'react';
import VerifyImg from 'assets/images/verify.png';
import RewardImg from 'assets/images/reward.svg';
import {
  ProfileCardContainer,
  AuthorName,
  Role,
  RoleLabel,
  AuthorQualification,
  AuthorQualificationLabel,
  VerifiedSymbol,
  Reward,
  AuthorBio,
  FollowersCount,
  FollowButton,
  FollowLabel,
  CommonFlexRow,
  CommonFlexColumn,
} from './AuthorProfileCard.style';

const AuthorProfileCard = () => {
  const [authorProfileCard] = useState({
    authorName: 'Swetha suresh',
    role: 'Author',
    authorQualification: 'IAS',
    reward: '',
    authorBio:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    followersCount: '6,678 followers',
    isFollowed: false,
  });
  return (
    <ProfileCardContainer style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CommonFlexRow style={{ display: 'flex', justifyContent: 'space-between' }}>
        <CommonFlexColumn>
          <AuthorName>{authorProfileCard.authorName}</AuthorName>
          <CommonFlexRow>
            <Role>
              <RoleLabel>{authorProfileCard.role}</RoleLabel>
            </Role>
            <AuthorQualification>
              <AuthorQualificationLabel>{authorProfileCard.authorQualification}</AuthorQualificationLabel>
            </AuthorQualification>
            <VerifiedSymbol src={VerifyImg} />
          </CommonFlexRow>
        </CommonFlexColumn>
        <Reward src={RewardImg} />
      </CommonFlexRow>
      <AuthorBio>{authorProfileCard.authorBio}</AuthorBio>
      <CommonFlexRow style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
        <FollowersCount>{authorProfileCard.followersCount}</FollowersCount>
        <FollowButton>
          <FollowLabel isFollowed={authorProfileCard.isFollowed}>
            {authorProfileCard.isFollowed ? 'unFollow' : 'follow'}
          </FollowLabel>
        </FollowButton>
      </CommonFlexRow>
    </ProfileCardContainer>
  );
};
export default AuthorProfileCard;
