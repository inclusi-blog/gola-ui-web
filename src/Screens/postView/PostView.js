import React, { useMemo, useState } from 'react';
import ProfilePalatte from 'common-components/ProfilePalatte';
import ReviewPalatte from 'common-components/ReviewPalatte';
import HeroPostPhoto from 'assets/images/HeroPostPhoto.png';
import DownArrowImg from 'assets/images/Arrow.svg';
import ProfileImg from 'assets/images/profile.png';
import CommentImg from 'assets/images/commentProfile.svg';
import superClick from 'assets/images/OkHand.svg';
import { useParams } from 'react-router-dom';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import Element from '../../new-story/editor/components/Element';
import { withImages, withLinks } from '../../new-story/editor/ContentEditor';
import Leaf from '../../new-story/editor/Leaf';
import {
  MainContainer,
  PostMainImage,
  PreviewPostOuterContainer,
  CommentContainer,
  ProfilePic,
  ApplyRow,
  ApplyColumn,
  CommentBox,
  CommentButton,
  CommentLabel,
  ViewCommentListContainer,
  SingleCommentContainer,
  CommentAuthor,
  CommentAuthorName,
  CommentDate,
  CommentHandSymbol,
  CommentContent,
  ArrowImg,
  ViewAllComments,
} from './PostView.style';
import { InterestTag, InterestTagText } from '../../new-story/editor/PreviewCard.style';

const PostView = () => {
  // eslint-disable-next-line camelcase,no-unused-vars
  const { post_url, username } = useParams();
  const editor = useMemo(() => withImages(withLinks(withHistory(withReact(createEditor())))), []);

  const urlPaths = post_url.split('-');
  // eslint-disable-next-line no-unused-vars
  const postID = urlPaths[urlPaths.length - 1];
  // eslint-disable-next-line no-unused-vars
  const [post, setPost] = useState({
    title: 'ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட சச்சின் பைலட்',
    data: [
      {
        children: [
          {
            text: 'ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட சச்சின் பைலட்',
            bold: true,
          },
        ],
      },
      { children: [{ text: '' }] },
      {
        children: [
          {
            text:
              'இந்தக் கேள்விதான் சென்னைவாசிகள் உட்பட அனைத்து தமிழக மக்களின் மனதிலும் எழுந்துள்ளது. ஒருநாளைக்கு சராசரியாக 2,000 புதிய நோயாளிகள் கண்டறியப்பட்டு வந்த நிலையில், கடந்த சில நாள்களாக நோயாளிகளின் எண்ணிக்கை கடுமையாகக் குறைந்துள்ளது. ஞாயிற்றுக்கிழமை வெளியிட்ட அரசின் செய்திக் குறிப்பில் சென்னையில் 1,168 நோயாளிகளே கண்டறியப்பட்டுள்ளதாகத் தெரிவிக்கபபடடளளத. அதபல இனற சனனயல 1,140 பரகக பதபப உறதபபடததபபடடளளத.',
          },
        ],
      },
      { children: [{ text: '' }] },
      { children: [{ text: '' }] },
      { children: [{ text: 'படபபடயக உயரநத எணணகக' }] },
      {
        children: [
          {
            text:
              'தமழநடடல கரன தறற பரவத தடஙகயபத நயளகளன எணணகக படபபடயக அதகரதத வநதத. தமழகம மடடமலல உலகம மழவதம இத மறயல (Pattern) தன நய பரவயத. நயன தககம படபபடயக அதகரததத பலவதன தறறம படபபடயகக கறயம எனற மரததவ நபணரகள தரவதத வநதனர. இநநலயல சனனயல மடடம தடரனற தடலடயக எணணகக கறநதத எபபட எனற சநதகம இயலபகவ எழகறத.',
          },
        ],
      },
    ],
    interests: ['அரசியல்', 'விளையாட்டு'],
    likeCount: 5000,
    commentCount: 12,
  });

  const getInterestPills = () => {
    return post.interests.map((item) => (
      <InterestTag key={item}>
        <InterestTagText>{item}</InterestTagText>
      </InterestTag>
    ));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <MainContainer>
        <PreviewPostOuterContainer
          style={{ marginBottom: 16, backgroundImage: `url(${HeroPostPhoto})`, backgroundSize: 'cover' }}
        >
          <PostMainImage src={HeroPostPhoto} />
        </PreviewPostOuterContainer>
        <ProfilePalatte />
        <div style={{ borderBottom: '1px solid #DFDFDF ', marginTop: 60 }}>
          <Slate editor={editor} value={post.data}>
            <Editable
              renderElement={(props) => <Element {...props} />}
              readOnly
              style={{
                fontSize: 24,
                lineHeight: '177%',
              }}
              renderLeaf={(props) => <Leaf {...props} />}
            />
          </Slate>
        </div>
        <ReviewPalatte />
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 32 }}>{getInterestPills()}</div>
        <CommentContainer>
          <ApplyRow style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ProfilePic src={ProfileImg} />
            <CommentBox placeholder="Write your thoughts..." />
            <CommentButton>
              <CommentLabel>Comment</CommentLabel>
            </CommentButton>
          </ApplyRow>
        </CommentContainer>
        <ViewCommentListContainer style={{ marginTop: 40 }}>
          <ApplyColumn style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <SingleCommentContainer>
              <ApplyRow>
                <CommentAuthor src={CommentImg} />
                <ApplyColumn style={{ marginLeft: 12 }}>
                  <CommentAuthorName>Munniyamma</CommentAuthorName>
                  <CommentDate>July, 2020</CommentDate>
                </ApplyColumn>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 3 }}>
                  <CommentHandSymbol src={superClick} />
                </div>
              </ApplyRow>
              <ApplyRow style={{ marginTop: 17 }}>
                <CommentContent>
                  படிப்படியாக உயர்ந்த எண்ணிக்கை தமிழ்நாட்டில் கொரோனா தொற்று பரவத் தொடங்கியபோது
                </CommentContent>
                <ArrowImg src={DownArrowImg} />
              </ApplyRow>
            </SingleCommentContainer>
            <ViewAllComments>all comments</ViewAllComments>
          </ApplyColumn>
        </ViewCommentListContainer>
      </MainContainer>
    </div>
  );
};
export default PostView;
