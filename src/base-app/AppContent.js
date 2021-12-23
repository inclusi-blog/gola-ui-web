import React, {useContext} from 'react';
import LoggedInContext from 'context-providers/loggedin-provider/LoggedInContext';
import Header from '../app-header/post-login/Header';
import PreLoginHeader from '../app-header/pre-login';
import AppContentWrapper from './AppContent.style';
import App from '../App';

const AppContent = () => {
    const {isLoggedIn, isLoginDone} = useContext(LoggedInContext);

    return (
        <AppContentWrapper>
            <If condition={isLoggedIn}>
                <Header/>
                <Else/>
                <PreLoginHeader/>
            </If>
            {/* TODO: Add the app into a lazy loading view */}
            <If condition={isLoginDone}>
                <App/>
            </If>
        </AppContentWrapper>
    );
};

export default AppContent;
