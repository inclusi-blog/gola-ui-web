import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './context-providers/providers';
import MainWrapper from './GlobalStyles/App.style';
import NewStory from './new-story/NewStory';
import HomePage from './Screens/HomePage';

const Main = () => {
  return (
    <Provider>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/new-story" component={NewStory} />
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
