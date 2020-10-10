import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './context-providers/providers';
import MainWrapper from './GlobalStyles/App.style';
import NewStory from './new-story/NewStory';
import HomePage from './Screens/HomePage';
import UserPublication from './user/UserPublication';

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path="/new-story" component={NewStory} />
        <Route path="/" component={HomePage} />
        <Route path="/userpublication" component={UserPublication} />
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
