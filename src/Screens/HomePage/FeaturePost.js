import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import Super from "assets/images/Super.png";
import {IconButton, Menu, MenuItem, Tooltip, Typography} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreHoriz";
import {
    PostAuthorName,
    PostDate,
    PostLikes,
    PostPicture,
    PostSuperSymbol,
    PostTags,
    PostTitle
} from "./GeneralFeed.style";
import {convertDateStringToFormattedDate, countFormatter} from "../../utils/commonUtils";

const FeaturePost = ({post}) => {
    const history = useHistory();
    const [anchorElUser, setAnchorElUser] = useState(null);
    const settings = [{name: "Open", handler: () => history.push(`/@${post.author_name}/${post.url}`)}];

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClick = () => {
        handleCloseUserMenu();
    };
    return (
        <div style={{ width: 397, height: 464 }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <PostPicture src={post.preview_image} style={{ display: 'flex', width: 397, height: 326 }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    <PostTitle
                        style={{ display: 'flex', marginTop: 8, fontSize: 20, width: 397, height: 78, marginBottom: 0 }}
                    >
                        {post.title}
                    </PostTitle>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', height: 57 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: 280, height: 57, flex: 3 }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <PostDate style={{ margin: 5, marginLeft: 1, marginRight: 11 }}>{convertDateStringToFormattedDate(post.published_date)}</PostDate>
                            <For each="tag" of={post.interest_names} index="idx">
                                <If condition={idx < 3}>
                                    <PostTags style={{ marginRight: 5, marginLeft: 5, marginTop: 0, marginBottom: 0 }}> {tag}</PostTags>
                                </If>
                            </For>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <PostAuthorName onClick={() => history.push(`/@${post.author_name}`)} style={{ margin: 2, marginTop: 5 }}>{post.author_name}</PostAuthorName>
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
                        <PostLikes style={{ width: 41, height: 36, margin: 0, marginLeft: 4 }}>{countFormatter(post.like_count)}</PostLikes>
                        <div>
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
                                    <MenuItem key={setting.name} onClick={() => handleClick()}>
                                        <Typography textAlign="center">{setting.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

FeaturePost.propTypes = {
    post: PropTypes.shape({
        preview_image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author_name: PropTypes.string.isRequired,
        published_date: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        like_count: PropTypes.number.isRequired,
        interest_names: PropTypes.oneOfType([PropTypes.string]).isRequired,
    }).isRequired,
};

export default FeaturePost;