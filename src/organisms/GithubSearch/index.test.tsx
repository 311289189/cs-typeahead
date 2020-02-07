import React from 'react'
import { render } from '@testing-library/react';

import GithubSearch from "./";

describe('<GithubSearch> Component', () => {
  it('renders without crashing', () => {
    expect(render(<GithubSearch/>)).toMatchSnapshot()
  })
})
