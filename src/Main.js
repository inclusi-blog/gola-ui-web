import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './context-providers/providers';
import MainWrapper from './GlobalStyles/App.style';
import NewStory from './new-story/NewStory';
import HomePage from './Screens/HomePage';
import UserPublication from './Screens/user/UserPublication';
import InterestPage from './Screens/Interestpage/InterestPage';

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path="/userpublication" component={UserPublication} />
        <Route path="/interestpage" component={InterestPage} />
        <Route path="/new-story" component={NewStory} />
        <Route path="/" component={HomePage} />
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
