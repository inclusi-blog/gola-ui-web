import React, { useEffect, useState } from 'react';
import HeroPostPic from 'assets/images/HeroPostPhoto.png';
import Super from 'assets/images/Super.png';
import SidePostPic from 'assets/images/SidePostPhoto.png';
import BookMark from 'assets/images/Bookmark.png';
import ReadLater from 'assets/images/Later.png';
import ThreeDots from 'assets/images/Dot.png';
import PinImg from 'assets/images/Pin.svg';
import withFeedSorter from 'common-components/CategorySorter/withFeedSorter';
import useGeneralFeedSorter from 'hooks/useGeneralFeedSorter';
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
import {GetHomeFeed} from "../postView/post.service";
import {convertDateStringToFormattedDate, countFormatter} from "../../utils/commonUtils";
import {IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import {DeleteDraft} from "../../new-story/draft.service";
import {useHistory} from "react-router-dom";
import FeaturePost from "./FeaturePost";

const GeneralFeed = () => {
  // eslint-disable-next-line no-unused-vars
  const [isAdminPost, setIsAdminPost] = useState('true');
  const { selectedSort } = useGeneralFeedSorter();
  const [posts, setPosts] = useState([]);
  const [start, setStart] = useState(0);
  const history = useHistory();
  const settings = [{name: "Open", handler: (authorName, url) => history.push(`/@${authorName}/${url}`)}];
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (author_name, url, handler) => {
    handler(author_name, url);
    handleCloseUserMenu();
  };

  useEffect(() => {
    GetHomeFeed(start, 5).then(({data}) => {
      setPosts(data);
    }).catch((err) => {
      console.log("unable to fetch posts ", err);
    });
  }, []);

  const sidebarOptionsConfig = {
    Top: () => {
      // eslint-disable-next-line no-console
      console.log('called top');
    },
    Best: () => {
      // eslint-disable-next-line no-console
      console.log('called best');
    },
    Hot: () => {
      // eslint-disable-next-line no-console
      console.log('called hot');
    },
    Recent: () => {
      // eslint-disable-next-line no-console
      console.log('called recent');
    },
    Personalized: () => {
      // eslint-disable-next-line no-console
      console.log('called personalized');
    },
  };

  useEffect(() => {
    sidebarOptionsConfig[selectedSort]();
  }, [selectedSort]);

  return (
    <div>
      <GeneralPostsContainer style={{ display: 'flex', flexDirection: 'row' }}>
        <If condition={posts.length > 0}>
          <FeaturePost post={posts[0]} />
        </If>

        <SidePostContainer style={{ display: 'flex', flexDirection: 'column', marginLeft: 54 }}>
          <For each="post" of={posts} index="idx" >
            <div style={{ display: 'flex', width: 416, height: 137 }}>
              <div style={{ width: 256, height: 137, marginRight: 25 }}>
                <div style={{ display: 'flex', width: 255, height: 83 }}>
                  <PostTitle style={{ margin: 0, fontSize: 16 }}>
                    {post.title}
                  </PostTitle>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ display: 'flex', width: 195, flexDirection: 'column', height: 54 }}>
                    <div style={{ display: 'flex', width: 195, height: 22 }}>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <PostDate style={{ margin: 0, marginTop: 3, fontSize: 14, width: 85 }}>{convertDateStringToFormattedDate(post.published_date)}</PostDate>
                        <For each="tag" of={post.interest_names} index="idx">
                          <If condition={idx < 3}>
                            <PostTags style={{ fontSize: 13, margin: 0, marginLeft: 6 }}>{tag}</PostTags>
                          </If>
                        </For>
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: 195, height: 24, marginTop: 8 }}>
                      <div style={{ display: 'flex', marginTop: 4 }}>
                        <PostAuthorName onClick={() => history.push(`/@${post.author_name}`)} style={{ margin: 0, fontSize: 14 }}>{post.author_name}</PostAuthorName>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <PostSuperSymbol src={Super} style={{ width: 11, height: 14, marginBottom: 6, marginRight: 4 }} />
                    <PostLikes style={{ display: 'flex', width: 27, height: 24, marginBottom: 5, marginTop: 0, fontSize: 16 }}>
                      {countFormatter(post.like_count)}
                    </PostLikes>
                    <div
                        style={{
                          display: 'flex',
                          cursor: 'pointer',
                        }}
                    >
                      <Tooltip title="Open settings">
                        <IconButton
                            size="small"
                            aria-label="display more actions"
                            edge="end"
                            color="inherit"
                            onClick={(e) => handleOpenUserMenu(e)}
                        >
                          <MoreIcon />
                        </IconButton>
                      </Tooltip>
                      <Menu
                          sx={{ mt: '45px' }}
                          id="menu-appbar"
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={Boolean(anchorElUser)}
                          onClose={handleCloseUserMenu}
                      >
                        {settings.map((setting) => (
                            <MenuItem key={setting.name} onClick={() => handleClick(post.author_name, post.url, setting.handler)}>
                              <Typography textAlign="center">{setting.name}</Typography>
                            </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', width: 135, height: 135 }}>
                <PostPicture src={post.preview_image} width={135} height={135} />
              </div>
            </div>

            <If condition={idx !== posts.length - 1}>
              <HorizontalLine style={{ width: 416, height: 0, right: 260, top: 349, marginTop: 12, marginBottom: 15 }} />
            </If>
          </For>
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

export default withFeedSorter(GeneralFeed, useGeneralFeedSorter);
