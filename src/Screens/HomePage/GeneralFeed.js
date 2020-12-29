import React, { useState } from 'react';
import HeroPostPic from 'assets/images/HeroPostPhoto.png';
import Super from 'assets/images/Super.png';
import SidePostPic from 'assets/images/SidePostPhoto.png';
import BookMark from 'assets/images/Bookmark.png';
import ReadLater from 'assets/images/Later.png';
import ThreeDots from 'assets/images/Dot.png';
import PinImg from 'assets/images/Pin.svg';
import {
  GeneralPostsContainer,
  SidePostContainer,
  PostPicture,
  PostTitle,
  PostDate,
  PostTags,
  PostAuthorName,
  PostSuperSymbol,
  PostLikes,
  HorizontalLine,
  ReadMore,
  SelectInterests,
  Split,
  Video,
  PostTagLine,
  PostBookMark,
  PostReadLater,
  PostDots,
  PinIcon,
} from './GeneralFeed.style';

const GeneralFeed = () => {
  const isAdminPost = useState('true');
  return (
    <div>
      <GeneralPostsContainer style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: 397, height: 464 }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <PostPicture src={HeroPostPic} style={{ display: 'flex', width: 397, height: 326 }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
              <PostTitle
                style={{ display: 'flex', marginTop: 8, fontSize: 20, width: 397, height: 78, marginBottom: 0 }}
              >
                ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட சச்சின் பைலட்
              </PostTitle>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', height: 57 }}>
              <div style={{ display: 'flex', flexDirection: 'column', width: 280, height: 57, flex: 3 }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <PostDate style={{ margin: 5, marginLeft: 1, marginRight: 11 }}>Jul 8,2020</PostDate>
                  <PostTags style={{ marginRight: 5, marginLeft: 5, marginTop: 0, marginBottom: 0 }}> அரசியல்</PostTags>
                  <PostTags style={{ marginRight: 5, marginLeft: 5, marginTop: 0, marginBottom: 0 }}>
                    விளையாட்டு
                  </PostTags>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <PostAuthorName style={{ margin: 2, marginTop: 5 }}>கருபழனியப்பன் </PostAuthorName>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  height: 55,
                  flex: 1,
                  margin: 0,
                }}
              >
                <PostSuperSymbol src={Super} style={{ width: 15, height: 19, margin: 0, marginBottom: 10 }} />
                <PostLikes style={{ width: 41, height: 36, margin: 0, marginLeft: 4 }}>1.5K</PostLikes>
                <div
                  style={{ display: 'flex', width: 18, height: 4, marginBottom: 16, marginLeft: 12, cursor: 'pointer' }}
                >
                  <PostDots src={ThreeDots} style={{ display: 'flex', width: 4, height: 4, marginRight: 3 }} />
                  <PostDots src={ThreeDots} style={{ display: 'flex', width: 4, height: 4, marginRight: 3 }} />
                  <PostDots src={ThreeDots} style={{ display: 'flex', width: 4, height: 4 }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <SidePostContainer style={{ display: 'flex', flexDirection: 'column', marginLeft: 54 }}>
          <div style={{ display: 'flex', width: 416, height: 137 }}>
            <div style={{ width: 256, height: 137, marginRight: 25 }}>
              <div style={{ display: 'flex', width: 255, height: 83 }}>
                <PostTitle style={{ margin: 0, fontSize: 16 }}>
                  ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட சச்சின் பைலட்
                </PostTitle>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', width: 195, flexDirection: 'column', height: 54 }}>
                  <div style={{ display: 'flex', width: 195, height: 22 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <PostDate style={{ margin: 0, marginTop: 3, fontSize: 14 }}>July,2020</PostDate>
                      <PostTags style={{ fontSize: 13, margin: 0, marginLeft: 6 }}>விளையாட்டு</PostTags>
                    </div>
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between', width: 195, height: 24, marginTop: 8 }}
                  >
                    <div style={{ display: 'flex', marginTop: 4 }}>
                      <PostAuthorName style={{ margin: 0, fontSize: 14 }}>கருபழனியப்பன்</PostAuthorName>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <PostSuperSymbol src={Super} style={{ width: 11, height: 14, marginBottom: 6, marginRight: 4 }} />
                  <PostLikes
                    style={{ display: 'flex', width: 27, height: 24, marginBottom: 5, marginTop: 0, fontSize: 16 }}
                  >
                    1.5K
                  </PostLikes>
                  <div
                    style={{
                      display: 'flex',
                      width: 10,
                      height: 2,
                      marginBottom: 11,
                      marginLeft: 7,
                      cursor: 'pointer',
                    }}
                  >
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 2, height: 2, marginRight: 2 }} />
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 2, height: 2, marginRight: 2 }} />
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 2, height: 2 }} />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', width: 135, height: 135 }}>
              <PostPicture src={SidePostPic} width={135} height={135} />
            </div>
          </div>

          <HorizontalLine style={{ width: 416, height: 0, right: 260, top: 349, marginTop: 12, marginBottom: 15 }} />

          <div style={{ display: 'flex', width: 416, height: 137 }}>
            <div style={{ width: 256, height: 137, marginRight: 25 }}>
              <div style={{ display: 'flex', width: 255, height: 83 }}>
                <PostTitle style={{ margin: 0, fontSize: 16 }}>
                  ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட சச்சின் பைலட்
                </PostTitle>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', width: 195, flexDirection: 'column', height: 54 }}>
                  <div style={{ display: 'flex', width: 195, height: 22 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <PostDate style={{ margin: 0, marginTop: 3, fontSize: 14 }}>July,2020</PostDate>
                      <PostTags style={{ fontSize: 13, margin: 0, marginLeft: 6 }}>விளையாட்டு</PostTags>
                    </div>
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between', width: 195, height: 24, marginTop: 8 }}
                  >
                    <div style={{ display: 'flex', marginTop: 4 }}>
                      <PostAuthorName style={{ margin: 0, fontSize: 14 }}>கருபழனியப்பன்</PostAuthorName>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <PostSuperSymbol src={Super} style={{ width: 11, height: 14, marginBottom: 6, marginRight: 4 }} />
                  <PostLikes
                    style={{ display: 'flex', width: 27, height: 24, marginBottom: 5, marginTop: 0, fontSize: 16 }}
                  >
                    1.5K
                  </PostLikes>
                  <div
                    style={{
                      display: 'flex',
                      width: 10,
                      height: 2,
                      marginBottom: 11,
                      marginLeft: 7,
                      cursor: 'pointer',
                    }}
                  >
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 2, height: 2, marginRight: 2 }} />
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 2, height: 2, marginRight: 2 }} />
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 2, height: 2 }} />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', width: 135, height: 135 }}>
              <PostPicture src={SidePostPic} width={135} height={135} />
            </div>
          </div>

          <HorizontalLine style={{ width: 416, height: 0, right: 260, top: 349, marginTop: 12, marginBottom: 15 }} />
          <div style={{ display: 'flex', width: 416, height: 137 }}>
            <div style={{ width: 256, height: 137, marginRight: 25 }}>
              <div style={{ display: 'flex', width: 255, height: 83 }}>
                <PostTitle style={{ margin: 0, fontSize: 16 }}>
                  ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட சச்சின் பைலட்
                </PostTitle>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', width: 195, flexDirection: 'column', height: 54 }}>
                  <div style={{ display: 'flex', width: 195, height: 22 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <PostDate style={{ margin: 0, marginTop: 3, fontSize: 14 }}>July,2020</PostDate>
                      <PostTags style={{ fontSize: 13, margin: 0, marginLeft: 6 }}>விளையாட்டு</PostTags>
                    </div>
                  </div>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between', width: 195, height: 24, marginTop: 8 }}
                  >
                    <div style={{ display: 'flex', marginTop: 4 }}>
                      <PostAuthorName style={{ margin: 0, fontSize: 14 }}>கருபழனியப்பன்</PostAuthorName>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                  <PostSuperSymbol src={Super} style={{ width: 11, height: 14, marginBottom: 6, marginRight: 4 }} />
                  <PostLikes
                    style={{ display: 'flex', width: 27, height: 24, marginBottom: 5, marginTop: 0, fontSize: 16 }}
                  >
                    1.5K
                  </PostLikes>
                  <div
                    style={{
                      display: 'flex',
                      width: 10,
                      height: 2,
                      marginBottom: 11,
                      marginLeft: 7,
                      cursor: 'pointer',
                    }}
                  >
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 2, height: 2, marginRight: 2 }} />
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 2, height: 2, marginRight: 2 }} />
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 2, height: 2 }} />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', width: 135, height: 135 }}>
              <PostPicture src={SidePostPic} width={135} height={135} />
            </div>
          </div>
        </SidePostContainer>
      </GeneralPostsContainer>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ReadMore style={{ display: 'flex', marginTop: 53, marginLeft: 407 }}>Read More</ReadMore>
        <Split style={{ display: 'flex', marginTop: 24 }} />

        <SelectInterests style={{ display: 'flex', marginLeft: 223, marginTop: 28, marginBottom: 32 }}>
          Choose your interests
        </SelectInterests>
        <div style={{ display: 'flex', width: 804, height: 39, marginLeft: 97, marginBottom: 42 }} />
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 165 }}>
          <Video />

          <div style={{ display: 'flex', width: 642, height: 168, marginTop: 34 }}>
            <div style={{ display: 'flex', width: 450, height: 168, flexDirection: 'column' }}>
              <div style={{ display: 'flex', width: 450, height: 52 }}>
                <PostTitle style={{ margin: 0, fontSize: 20 }}>
                  ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட
                </PostTitle>
              </div>

              <div style={{ display: 'flex', width: 450, height: 55, marginTop: 10 }}>
                <PostTagLine>விவசாயிகள் போராட்டத்துக்கு திமுக ஆதரவு: மு.க.</PostTagLine>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: 300, height: 44, marginTop: 7 }}>
                  <div style={{ display: 'flex', width: 300, height: 21 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <PostDate style={{ fontSize: 14, marginTop: 4, marginBottom: 0, width: 65, height: 21 }}>
                        July,2020
                      </PostDate>
                      <PostTags style={{ fontSize: 13, margin: 0, marginLeft: 6, marginRight: 6 }}>விளையாட்டு</PostTags>
                    </div>
                  </div>
                  <div style={{ display: 'flex', width: 300, height: 21 }}>
                    <div style={{ display: 'flex', flex: 3 }}>
                      <PostAuthorName style={{ margin: 0, fontSize: 14 }}>Anandhkrishnan</PostAuthorName>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flex: 1 }}>
                  <PostBookMark src={BookMark} style={{ width: 13, height: 17, marginRight: 15, marginBottom: 1 }} />
                  <PostReadLater src={ReadLater} style={{ width: 17, height: 17, marginRight: 13, marginBottom: 1 }} />
                  <PostSuperSymbol src={Super} style={{ width: 15, height: 19, marginRight: 4, marginBottom: 1 }} />
                  <PostLikes
                    style={{
                      display: 'flex',
                      width: 35,
                      height: 21,
                      marginRight: 4,
                      margin: 0,
                      fontSize: 16,
                      marginBottom: 5,
                    }}
                  >
                    1.5K
                  </PostLikes>
                  <div
                    style={{ display: 'flex', width: 16, height: 4, marginBottom: 8, marginLeft: 8, cursor: 'pointer' }}
                  >
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 4, height: 4, marginRight: 2 }} />
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 4, height: 4, marginRight: 2 }} />
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 4, height: 4 }} />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', width: 168, height: 168, marginLeft: 24, flexDirection: 'row' }}>
              <PostPicture src={SidePostPic} width={168} height={168} />
              <If condition={isAdminPost}>
                <PinIcon src={PinImg} />
              </If>
            </div>
          </div>
          <HorizontalLine style={{ width: 438, height: 0, right: 260, top: 349, marginTop: 20, marginBottom: 20 }} />

          <div style={{ display: 'flex', width: 642, height: 168, marginTop: 34 }}>
            <div style={{ display: 'flex', width: 450, height: 168, flexDirection: 'column' }}>
              <div style={{ display: 'flex', width: 450, height: 52 }}>
                <PostTitle style={{ margin: 0, fontSize: 20 }}>
                  ராஜஸ்தான்:`காங்கிரஸில் வலுக்கும் மோதல்!’ - டெல்லியில் முகாமிட்ட
                </PostTitle>
              </div>

              <div style={{ display: 'flex', width: 450, height: 55, marginTop: 10 }}>
                <PostTagLine>விவசாயிகள் போராட்டத்துக்கு திமுக ஆதரவு: மு.க.</PostTagLine>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: 300, height: 44, marginTop: 7 }}>
                  <div style={{ display: 'flex', width: 300, height: 21 }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <PostDate style={{ fontSize: 14, marginTop: 4, marginBottom: 0, width: 65, height: 21 }}>
                        July,2020
                      </PostDate>
                      <PostTags style={{ fontSize: 13, margin: 0, marginLeft: 6, marginRight: 6 }}>விளையாட்டு</PostTags>
                    </div>
                  </div>
                  <div style={{ display: 'flex', width: 300, height: 21 }}>
                    <div style={{ display: 'flex', flex: 3 }}>
                      <PostAuthorName style={{ margin: 0, fontSize: 14 }}>Anandhkrishnan</PostAuthorName>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flex: 1 }}>
                  <PostBookMark src={BookMark} style={{ width: 13, height: 17, marginRight: 15, marginBottom: 1 }} />
                  <PostReadLater src={ReadLater} style={{ width: 17, height: 17, marginRight: 13, marginBottom: 1 }} />
                  <PostSuperSymbol src={Super} style={{ width: 15, height: 19, marginRight: 4, marginBottom: 1 }} />
                  <PostLikes
                    style={{
                      display: 'flex',
                      width: 35,
                      height: 21,
                      marginRight: 4,
                      margin: 0,
                      fontSize: 16,
                      marginBottom: 5,
                    }}
                  >
                    1.5K
                  </PostLikes>
                  <div
                    style={{ display: 'flex', width: 16, height: 4, marginBottom: 8, marginLeft: 8, cursor: 'pointer' }}
                  >
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 4, height: 4, marginRight: 2 }} />
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 4, height: 4, marginRight: 2 }} />
                    <PostDots src={ThreeDots} style={{ display: 'flex', width: 4, height: 4 }} />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', width: 168, height: 168, marginLeft: 24 }}>
              <PostPicture src={SidePostPic} width={168} height={168} />
            </div>
          </div>
          <HorizontalLine style={{ width: 438, height: 0, right: 260, top: 349, marginTop: 20, marginBottom: 20 }} />
        </div>
      </div>
    </div>
  );
};
export default GeneralFeed;
