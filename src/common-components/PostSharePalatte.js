import React from 'react';
import TwitterImg from 'assets/images/eva_twitter.png';
import FacebookImg from 'assets/images/eva_facebook.png';
import WhatsAppImg from 'assets/images/eva_whatsapp.png';
import LinkedInImg from 'assets/images/eva_linkedin.png';
import { TwitterIcon, FacebookIcon, WhatsAppIcon, LinkedInIcon, SmallDots, ApplyRow } from './PostSharePalatte.style';

const PostSharePalatte = () => {
  return (
    <ApplyRow style={{ alignItems: 'center' }}>
      <TwitterIcon src={TwitterImg} />
      <FacebookIcon src={FacebookImg} />
      <WhatsAppIcon src={WhatsAppImg} />
      <LinkedInIcon src={LinkedInImg} />
      <ApplyRow>
        <SmallDots />
        <SmallDots />
        <SmallDots />
      </ApplyRow>
    </ApplyRow>
  );
};
export default PostSharePalatte;
