import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Main from './Main';
import NewUserActivation from './Screens/Activation/NewUserActivation';
import Welcome from './welcome/Welcome';

const loginFlowEnabled = true;

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
        <Route path="/welcome" component={Welcome} />
        <Route path="/m/callback/email?token=:token" component={NewUserActivation} />
      </If>
      <Route path="/" component={MainController} />
    </Switch>
  );
};

export default App;
