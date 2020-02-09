import React from 'react';
import renderer from 'react-test-renderer';

import GithubUser from "./index";

const mockUserFixture = {
  login: 'string',
  id: 123,
  node_id: 'string',
  avatar_url: 'string',
  gravatar_id: 'string',
  url: 'string',
  html_url: 'string',
  followers_url: 'string',
  following_url: 'string',
  gists_url: 'string',
  starred_url: 'string',
  subscriptions_url: 'string',
  organizations_url: 'string',
  repos_url: 'string',
  events_url: 'string',
  received_events_url: 'string',
  type: 'string',
  site_admin: false,
  score: 123,
}

describe('GithubUser', () => {
  it('matches snapshot', () => {
    const element = renderer.create(<GithubUser isLoading={false} user={mockUserFixture} />).toJSON();
    expect(element).toMatchSnapshot()
  })
})
