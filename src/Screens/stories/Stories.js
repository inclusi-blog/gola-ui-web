/* eslint react/prop-types: 0 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Drafts from './Drafts';
import Published from './Published';
import { RoutedTabs, NavTab } from './router-nav-tabs';

export default ({ match }) => {
  return (
    <div style={{ marginTop: 190 }}>
      <RoutedTabs startPathWith={match.path} style={{ borderBottom: '1px solid #9A9A9A', width: 760 }}>
        <NavTab to="/drafts">Drafts</NavTab>
        <NavTab to="/published">Published</NavTab>
      </RoutedTabs>

      <Switch>
        <Route exact path={`${match.path}`} render={() => <Redirect replace to={`${match.path}/drafts`} />} />
        <Route path={`${match.path}/drafts`} component={Drafts} />
        <Route path={`${match.path}/published`} component={Published} />
      </Switch>
    </div>
  );
};
