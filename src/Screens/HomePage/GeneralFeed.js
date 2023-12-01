import React, { useEffect, useState } from 'react';
import Super from 'assets/images/Super.png';
import withFeedSorter from 'common-components/CategorySorter/withFeedSorter';
import useGeneralFeedSorter from 'hooks/useGeneralFeedSorter';
import { IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreHoriz';
import { useHistory } from 'react-router-dom';
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
  Split,
} from './GeneralFeed.style';
import { GetHomeFeed } from '../postView/post.service';
import { convertDateStringToFormattedDate, countFormatter } from '../../utils/commonUtils';
import FeaturePost from './FeaturePost';
import ExpandedPost from './ExpandedPost';

const GeneralFeed = () => {
  // eslint-disable-next-line no-unused-vars
  const [isAdminPost, setIsAdminPost] = useState('true');
  const { selectedSort } = useGeneralFeedSorter();
  const [posts, setPosts] = useState([]);
  const [start, setStart] = useState(0);
  const history = useHistory();
  const settings = [{ name: 'Open', handler: (authorName, url) => history.push(`/@${authorName}/${url}`) }];
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
    GetHomeFeed(start, 5)
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log('unable to fetch posts ', err);
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
      <GeneralPostsContainer style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <If condition={posts.length > 0}>
          <FeaturePost post={posts[0]} />
        </If>

        <SidePostContainer style={{ display: 'flex', flexDirection: 'column', marginLeft: 54 }}>
          <For each="post" of={posts} index="idx">
            <div style={{ display: 'flex', width: 416, height: 137 }}>
              <div style={{ width: 256, height: 137, marginRight: 25 }}>
                <div style={{ display: 'flex', width: 255, height: 83 }}>
                  <PostTitle style={{ margin: 0, fontSize: 16 }}>{post.title}</PostTitle>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ display: 'flex', width: 195, flexDirection: 'column', height: 54 }}>
                    <div style={{ display: 'flex', width: 195, height: 22 }}>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <PostDate style={{ margin: 0, marginTop: 3, fontSize: 14, width: 85 }}>
                          {convertDateStringToFormattedDate(post.published_date)}
                        </PostDate>
                        <For each="tag" of={post.interest_names} index="idx">
                          <If condition={idx < 3}>
                            <PostTags style={{ fontSize: 13, margin: 0, marginLeft: 6 }}>{tag}</PostTags>
                          </If>
                        </For>
                      </div>
                    </div>
                    <div
                      style={{ display: 'flex', justifyContent: 'space-between', width: 195, height: 24, marginTop: 8 }}
                    >
                      <div style={{ display: 'flex', marginTop: 4 }}>
                        <PostAuthorName
                          onClick={() => history.push(`/@${post.author_name}`)}
                          style={{ margin: 0, fontSize: 14 }}
                        >
                          {post.author_name}
                        </PostAuthorName>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <PostSuperSymbol src={Super} style={{ width: 11, height: 14, marginBottom: 6, marginRight: 4 }} />
                    <PostLikes
                      style={{ display: 'flex', width: 27, height: 24, marginBottom: 5, marginTop: 0, fontSize: 16 }}
                    >
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
                          <MenuItem
                            key={setting.name}
                            onClick={() => handleClick(post.author_name, post.url, setting.handler)}
                          >
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
              <HorizontalLine
                style={{ width: 416, height: 0, right: 260, top: 349, marginTop: 12, marginBottom: 15 }}
              />
            </If>
          </For>
        </SidePostContainer>
      </GeneralPostsContainer>

      <div style={{ display: 'flex', flexDirection: 'column', marginTop: 150 }}>
        <ReadMore style={{ display: 'flex', marginTop: 53, marginLeft: 407, flex: 1 }}>Read More</ReadMore>
        <Split style={{ display: 'flex', marginTop: 24 }} />

        <If condition={posts.length > 3}>
          <ExpandedPost posts={posts.slice(3)} />
        </If>
      </div>
    </div>
  );
};

export default withFeedSorter(GeneralFeed, useGeneralFeedSorter);
