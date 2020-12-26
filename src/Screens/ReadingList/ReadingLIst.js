import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ReadLater from './ReadLater';
import Saved from './Saved';
import Read from './Read';
import { RoutedTabs, NavTab } from '../stories/router-nav-tabs';
import {Title} from './ReadingList.style';

const ReadingList = ({ match }) => {
    return (
        <div>
            <Title>Reading list</Title>
            <RoutedTabs startPathWith={match.path} style={{ borderBottom: '1px solid #9A9A9A', width: 760 }}>
                <NavTab to="/readLater">Read later</NavTab>
                <NavTab to="/saved">Saved</NavTab>
                <NavTab to="/read">Read</NavTab>
            </RoutedTabs>

            <Switch>
                <Route exact path={`${match.path}`} render={() => <Redirect replace to={`${match.path}/readLater`} />} />
                <Route path={`${match.path}/readLater`} component={ReadLater} />
                <Route path={`${match.path}/saved`} component={Saved} />
                <Route path={`${match.path}/read`} component={Read} />
            </Switch>
        </div>
    )
}
export default ReadingList;
