import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import SuperImg from 'assets/images/Super.png';
// eslint-disable-next-line import/no-unresolved
import {countFormatter} from 'utils/commonUtils';
import SuperClickImg from "assets/images/super_click.png";
import {Link, useHistory} from "react-router-dom";
import {
    CommonFlexColumn,
    CommonFlexRow,
    HandSymbol,
    InterestMainContainer,
    LikeCount,
    PostContent,
    PostHeadLine,
    PostImage,
    PostTag,
    PublishDate,
    SmallDots,
} from './PostTile.style';
import {CancelToken} from "../helpers/ajaxHelper";
import {LikePost, UnlikePost} from "../Screens/postView/post.service";
import {IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreHoriz";

const PublishedPostTile = ({
details,
borderWidth,
}) => {
    const {
        id,
        interests,
        likes_count,
        preview_image,
        published_at,
        tagline,
        title,
        username,
        url,
    } = details;
    const publishedAt = moment(published_at);
    const is_liked = true;
    const [isLiked,setIsLiked]=useState(is_liked);
    const [likeCount,setLikeCount] = useState(likes_count);
    const cancelTokens = [];
    const history = useHistory();
    const settings = [{name: "Open", handler: (authorName, url) => history.push(`/@${authorName}/${url}`)}];
    const cleanup = useCallback(() => {
        if (cancelTokens.length > 0) {
            const cancelToken = cancelTokens.pop();
            cancelToken.cancel();
        }
    }, []);

    const renderPostTags = () => {
        return <PostTag>{interests[0].name}</PostTag>;
    };

    useEffect(()=>{
        return cleanup;
    },[cleanup]);

    const onLikePost = () => {
        const cancelToken = CancelToken();
        LikePost(cancelToken, id).then(() => {
            setIsLiked(true);
            setLikeCount(likeCount+1);
        }).catch(err => {
            // eslint-disable-next-line no-console
            console.log('unable to like post', err);
        });
        cancelTokens.push(cancelToken);
    };

    const onUnlikePost = () => {
        const cancelToken = CancelToken();
        UnlikePost(cancelToken, id).then(() => {
            setIsLiked(false);
            setLikeCount(likeCount-1);
        }).catch(err => {
            // eslint-disable-next-line no-console
            console.log('unable to unlike post', err);
        });
        cancelTokens.push(cancelToken);
    };

    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClick = (handler) => {
        handler(username, url);
        handleCloseUserMenu();
    };

    return (
        <div>
            <InterestMainContainer style={{ marginTop: 32 }}>
                <CommonFlexColumn style={{ marginRight: 24 }}>
                    <Link to={`/@${username}/${title.replaceAll(" ","-")}-${details.id}`} style={{ textDecoration: 'none' }}>
                        <PostHeadLine>{title}</PostHeadLine>
                    </Link>
                    <PostContent>{tagline}</PostContent>
                    <CommonFlexRow style={{ marginTop: 7, marginBottom: 4, alignItems: 'center' }}>
                        <PublishDate>{publishedAt.format("MMM, DD YYYY")}</PublishDate>
                        {renderPostTags()}
                    </CommonFlexRow>
                    <CommonFlexRow style={{ alignItems: 'center', justifyContent: 'flex-end', height: 25 }}>
                        <HandSymbol src={isLiked ? SuperClickImg : SuperImg} onClick={isLiked?onUnlikePost:onLikePost} />
                        <LikeCount>{countFormatter(likeCount)}</LikeCount>
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
                                <MenuItem key={setting.name} onClick={() => handleClick(setting.handler)}>
                                    <Typography textAlign="center">{setting.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </CommonFlexRow>
                </CommonFlexColumn>
                <PostImage src={preview_image} />
            </InterestMainContainer>
            <div style={{ borderBottom: '1px solid #DEE3ED ', marginTop: 20, width: borderWidth }} />
        </div>
    );
};
PublishedPostTile.propTypes = {
    details: PropTypes.shape({
        id: PropTypes.string.isRequired,
        interests: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
        })).isRequired,
        likes_count: PropTypes.number.isRequired,
        preview_image: PropTypes.string,
        published_at: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired,
    borderWidth: PropTypes.number,
};

PublishedPostTile.defaultProps = {
    borderWidth: 438,
};

export default PublishedPostTile;
