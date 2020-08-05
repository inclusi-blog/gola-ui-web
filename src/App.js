import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import Main from './Main';

const loginFlowEnabled = false;

const MainController = withRouter(({ location }) => {
  const { pathname } = location;
  const lowerPathname = pathname.toLowerCase();

  if (lowerPathname === '/login') {
    return <></>;
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
