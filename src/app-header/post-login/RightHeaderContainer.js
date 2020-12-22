import React, { useState } from 'react';
import SearchImg from 'assets/images/search.svg';
import BookmarkImg from 'assets/images/bookmark.svg';
import NotifyBell from 'common-components/NotifyBell';
import { RightHeader, Explore, SearchIcon, Bookmark } from './Header.style';

const RightHeaderContainer = () => {
  const [unreadNotification] = useState(0);
  return (
    <RightHeader>
      <Explore>Explore</Explore>
      <SearchIcon src={SearchImg} />
      <Bookmark src={BookmarkImg} />
      <NotifyBell unreadNotification={unreadNotification} />
    </RightHeader>
  );
};
export default RightHeaderContainer;
