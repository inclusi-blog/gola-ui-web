import React from 'react';
import { Switch } from 'react-router-dom';
import Provider from 'context-providers/providers';
import PrivateRoute from './common-components/PrivateRoute';
import MainWrapper from './GlobalStyles/App.style';
import NewStory from './new-story/NewStory';
import HomePage from './Screens/HomePage';
import Stories from './Screens/stories/Stories';
import UserPublication from './Screens/user/UserPublication';
import InterestPage from './Screens/Interestpage/InterestPage';
import PostView from './Screens/postView/PostView';
import ReadingList from './Screens/ReadingList/ReadingList';

const Main = () => {
  return (
    <Provider>
      <Switch>
        <PrivateRoute path="/p/:draftId/edit" component={NewStory} />
        <PrivateRoute path="/@:username/:post_url" component={PostView} />
        <PrivateRoute path="/me/stories" component={Stories} />
        <PrivateRoute path="/reading-list" component={ReadingList} />
        <PrivateRoute path="/user-publication" component={UserPublication} />
        <PrivateRoute path="/interest-page" component={InterestPage} />
        <PrivateRoute path="/new-story" component={NewStory} />
        <PrivateRoute path="/" component={HomePage} />
        <>
          <MainWrapper>
            <p>Hello</p>
          </MainWrapper>
        </>
      </Switch>
    </Provider>
  );
};

export default Main;
