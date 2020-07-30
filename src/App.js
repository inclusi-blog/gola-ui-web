import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Main from './Main';
import NewStory from './new-story/NewStory';

const loginFlowEnabled = false;

const MainController = withRouter(({ location }) => {
  const { pathname } = location;
  const lowerPathname = pathname.toLowerCase();

  if (lowerPathname === '/new-story') {
    return <NewStory location={location} />;
  }

  return <Main />;
});

const App = () => {
  return (
    <Switch>
      <If condition={loginFlowEnabled}>
        <p>Hello</p>
      </If>
      <Route path="/" component={MainController} />
    </Switch>
  );
};

export default App;
