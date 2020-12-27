import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import ReadLater from './ReadLater';
import Saved from './Saved';
import Read from './Read';
import { RoutedTabs, NavTab } from '../stories/router-nav-tabs';
import { Title } from './ReadingList.style';

const ReadingList = ({ match }) => {
  return (
    <div>
      <Title>Reading list</Title>
      <RoutedTabs startPathWith={match.path} style={{ borderBottom: '1px solid #9A9A9A', width: 760 }}>
        <NavTab to="/read-later">Read later</NavTab>
        <NavTab to="/saved">Saved</NavTab>
        <NavTab to="/read">Read</NavTab>
      </RoutedTabs>

      <Switch>
        <Route exact path={`${match.path}`} render={() => <Redirect replace to={`${match.path}/read-later`} />} />
        <Route path={`${match.path}/read-later`} component={ReadLater} />
        <Route path={`${match.path}/saved`} component={Saved} />
        <Route path={`${match.path}/read`} component={Read} />
      </Switch>
    </div>
  );
};

ReadingList.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReadingList;
