import React, { useMemo, useState } from 'react';
import ProfilePalatte from 'common-components/ProfilePalatte';
import HeroPostPhoto from 'assets/images/HeroPostPhoto.png';
import { useParams } from 'react-router-dom';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import Element from '../../new-story/editor/components/Element';
import { withImages, withLinks } from '../../new-story/editor/ContentEditor';
import Leaf from '../../new-story/editor/Leaf';
import { MainContainer, PostMainImage, PreviewPostOuterContainer } from './PostView.style';

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

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <MainContainer>
        <PreviewPostOuterContainer
          style={{ marginBottom: 16, backgroundImage: `url(${HeroPostPhoto})`, backgroundSize: 'cover' }}
        >
          <PostMainImage src={HeroPostPhoto} />
        </PreviewPostOuterContainer>
        <ProfilePalatte />
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
      </MainContainer>
    </div>
  );
};
export default PostView;
