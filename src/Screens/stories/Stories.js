/* eslint react/prop-types: 0 */
import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Drafts from './Drafts';
import Published from './Published';
import { RoutedTabs, NavTab } from './router-nav-tabs';
import { ButtonLabel, NewStoryButton, StoriesTitle, StoriesTitleRow } from './Stories.style';

export default ({ match }) => {
  const history = useHistory();
  return (
    <div style={{ width: 760 }}>
      <StoriesTitleRow>
        <StoriesTitle>Stories</StoriesTitle>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <NewStoryButton isBackgroundLessButton style={{ marginRight: 30 }}>
            <ButtonLabel isBackgroundLessButton>IMPORT</ButtonLabel>
          </NewStoryButton>
          <NewStoryButton isBackgroundLessButton={false} onClick={() => history.push('/new-story')}>
            <ButtonLabel isBackgroundLessButton={false}>New story</ButtonLabel>
          </NewStoryButton>
        </div>
      </StoriesTitleRow>
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
