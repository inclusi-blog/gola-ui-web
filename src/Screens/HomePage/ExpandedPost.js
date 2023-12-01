import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreHoriz';
import SidePostPic from 'assets/images/SidePostPhoto.png';
import PinImg from 'assets/images/Pin.svg';
import BookMark from 'assets/images/Bookmark.png';
import ReadLater from 'assets/images/Later.png';
import Super from 'assets/images/Super.png';
import { useHistory } from 'react-router-dom';
import {
  HorizontalLine,
  PinIcon,
  PostAuthorName,
  PostBookMark,
  PostDate,
  PostLikes,
  PostPicture,
  PostReadLater,
  PostSuperSymbol,
  PostTagLine,
  PostTags,
  PostTitle,
} from './GeneralFeed.style';
import { convertDateStringToFormattedDate, countFormatter } from '../../utils/commonUtils';

const ExpandedPost = ({ posts }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const history = useHistory();
  const settings = [{ name: 'Open', handler: (authorName, URL) => history.push(`/@${authorName}/${URL}`) }];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (authorName, URL, handler) => {
    handler(authorName, URL);
    handleCloseUserMenu();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 165 }}>
      <For each="post" of={posts} index="idx">
        <div style={{ display: 'flex', width: 642, height: 168, marginTop: 34 }}>
          <div style={{ display: 'flex', width: 450, height: 168, flexDirection: 'column' }}>
            <div style={{ display: 'flex', width: 450, height: 52 }}>
              <PostTitle style={{ margin: 0, fontSize: 20 }}>{post.title}</PostTitle>
            </div>

            <div style={{ display: 'flex', width: 450, height: 55, marginTop: 10 }}>
              <PostTagLine>{post.tagline}</PostTagLine>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 300,
                  height: 44,
                  marginTop: 7,
                }}
              >
                <div style={{ display: 'flex', width: 300, height: 21 }}>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <PostDate
                      style={{
                        fontSize: 14,
                        marginTop: 4,
                        marginBottom: 0,
                        width: 85,
                        height: 21,
                      }}
                    >
                      {convertDateStringToFormattedDate(post.published_date)}
                    </PostDate>
                    <For each="interest" of={post.interest_names} index="idx">
                      <PostTags
                        style={{
                          fontSize: 13,
                          margin: 0,
                          marginLeft: 6,
                          marginRight: 6,
                        }}
                      >
                        {interest}
                      </PostTags>
                    </For>
                  </div>
                </div>
                <div style={{ display: 'flex', width: 300, height: 21 }}>
                  <div style={{ display: 'flex', flex: 3 }}>
                    <PostAuthorName style={{ margin: 0, fontSize: 14 }}>{post.author_name}</PostAuthorName>
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
                  {countFormatter(post.like_count)}
                </PostLikes>

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
          <div style={{ display: 'flex', width: 168, height: 168, marginLeft: 24, flexDirection: 'row' }}>
            <PostPicture src={post.preview_image} width={168} height={168} />
            <If condition={true}>
              <PinIcon src={PinImg} />
            </If>
          </div>
        </div>
        <If condition={idx === 0}>
          <HorizontalLine style={{ width: 438, height: 0, right: 260, top: 349, marginTop: 20, marginBottom: 20 }} />
        </If>
      </For>
    </div>
  );
};

ExpandedPost.propTypes = {
  posts: PropTypes.oneOfType([
    PropTypes.shape({
      preview_image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author_name: PropTypes.string.isRequired,
      published_date: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      like_count: PropTypes.number.isRequired,
      interest_names: PropTypes.oneOfType([PropTypes.string]).isRequired,
    }),
  ]).isRequired,
};

export default ExpandedPost;
