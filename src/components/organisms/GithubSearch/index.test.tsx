import React from 'react'
import { render } from '@testing-library/react';

import GithubSearch from "./index";

describe('<GithubSearch> Component', () => {
  it('renders', () => {
    const { baseElement } = render(<GithubSearch />);
    expect(baseElement).toBeInTheDocument();
  })
})
