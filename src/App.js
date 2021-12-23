import React, {useContext} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Main from './Main';
import NewUserActivation from './Screens/Activation/NewUserActivation';
import ActivateAccount from './Screens/welcome/signup/ActivateAccount';
import Welcome from './Screens/welcome/Welcome';
import {Redirect} from "react-router";
import LoggedInContext from "./context-providers/loggedin-provider/LoggedInContext";

const loginFlowEnabled = true;

const MainController = withRouter(({location}) => {
    const {pathname} = location;
    const lowerPathname = pathname.toLowerCase();

    if (lowerPathname === '/login') {
        return <></>;
    }

    return <Main/>;
});

const App = () => {
    return (
        <Switch>
            <If condition={loginFlowEnabled}>
                <Route path="/welcome" component={Welcome}/>
                <Route path="/m/callback/email" component={NewUserActivation}/>
                <Route path="/verify" component={ActivateAccount}/>
            </If>
            <Route path="/" component={MainController}/>
        </Switch>
    );
};

export default App;
