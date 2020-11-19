import React from 'react';
import TwitterImg from 'assets/images/Twitter.png';
import FacebookImg from 'assets/images/Facebook.svg';
import WhatsAppImg from 'assets/images/whatsApp.svg';
import LinkedInImg from 'assets/images/LinkedIn.svg';
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
