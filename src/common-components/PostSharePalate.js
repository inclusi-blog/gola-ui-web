import React from 'react';
import TwitterImg from 'assets/images/Twitter.png';
import FacebookImg from 'assets/images/Facebook.svg';
import WhatsAppImg from 'assets/images/whatsApp.svg';
import LinkedInImg from 'assets/images/LinkedIn.svg';
import {
    TwitterIcon,
    FacebookIcon,
    WhatsAppIcon,
    LinkedInIcon,
    SmallDots,
    ApplyRow
}from './PostSharePalate.style';

const PostSharePalate = () =>{
    return(
        <ApplyRow>
            <TwitterIcon src ={TwitterImg}/>
            <FacebookIcon src={FacebookImg}/>
            <WhatsAppIcon src={WhatsAppImg}/>
            <LinkedInIcon src={LinkedInImg}/>
            <ApplyRow>
                <SmallDots/>
                <SmallDots/>
                <SmallDots/>
            </ApplyRow>      
        </ApplyRow>
    )
}
export default PostSharePalate;