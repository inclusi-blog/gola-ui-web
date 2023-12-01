import moment from 'moment';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreHoriz';
import { ApplyRow, ApplyColumn, Tagline, Date, TagList, PublishButton, PublishLabel } from './DraftList.style';
import { PostHeadLine } from './PostTile.style';
import { DeleteDraft } from '../new-story/draft.service';

const DraftTile = ({ draftContent, removeElement }) => {
  const createdAt = moment(draftContent.created_at);
  const settings = [
    { name: 'Delete', handler: DeleteDraft },
    { name: 'Open', handler: () => {} },
  ];
  const history = useHistory();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = async (draftID, deleteHandler, option) => {
    if (option === 'Delete') {
      await deleteHandler(draftID);
    }
    if (option === 'Open') {
      history.push(`/p/${draftID}/edit`);
    }
    handleCloseUserMenu();
    removeElement();
  };

  return (
    <div>
      <ApplyColumn style={{ marginTop: 32 }}>
        <Link to={`/p/${draftContent.id}/edit`} style={{ textDecoration: 'none' }}>
          <PostHeadLine>{draftContent.title}</PostHeadLine>
        </Link>
        <Tagline>{draftContent.tagline}</Tagline>
        <ApplyRow style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 11 }}>
          <Date>{createdAt.format('MMM, DD YYYY')}</Date>
          <TagList>{draftContent.interests?.length && draftContent.interests[0]?.name}</TagList>
          <Tooltip title="Open settings">
            <IconButton
              size="large"
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
              <MenuItem key={setting.name} onClick={() => handleClick(draftContent.id, setting.handler, setting.name)}>
                <Typography textAlign="center">{setting.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flex: 1 }}>
            <PublishButton>
              <PublishLabel>Publish</PublishLabel>
            </PublishButton>
          </div>
        </ApplyRow>
      </ApplyColumn>
      <div style={{ borderBottom: '1px solid black', marginTop: 24 }} />
    </div>
  );
};

DraftTile.propTypes = {
  draftContent: PropTypes.shape({
    id: PropTypes.string.isRequired,
    interests: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })
    ).isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  removeElement: PropTypes.func.isRequired,
};

export default DraftTile;
