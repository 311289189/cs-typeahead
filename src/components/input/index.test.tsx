import React from 'react';
import { render } from '@testing-library/react';
import Input from './';

test('renders <Input/> component', () => {
    const { container } = render(<Input />);
    const inputElement = container.querySelector('input')
    expect(inputElement).toBeInTheDocument();
});
