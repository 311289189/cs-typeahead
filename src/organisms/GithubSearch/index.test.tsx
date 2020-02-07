import React from 'react'
import { render } from '@testing-library/react';

import GithubSearch from "./";

describe('<GithubSearch> Component', () => {
  xit('renders without crashing', () => {
    expect(render(<GithubSearch/>)).toMatchSnapshot()
  })
})
