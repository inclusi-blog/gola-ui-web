import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Provider from './context-providers/providers';
import MainWrapper from './GlobalStyles/App.style';
import NewStory from './new-story/NewStory';

const Main = () => {
  return (
    <Provider>
      <Switch>
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
