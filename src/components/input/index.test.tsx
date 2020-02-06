import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './';

const inputTextFixture = 'hello'

test('renders <Input/> component', () => {
    const { container } = render(<Input />);
    const inputElement = container.querySelector('input')
    expect(inputElement).toBeInTheDocument();
});

test('<Input/> state can be updated', async () => {
    const inputWrapper = render(<Input />);
    const input = inputWrapper.getByLabelText('cost-input') as HTMLInputElement;
    fireEvent.change(input, { target: { value: inputTextFixture } });
    expect(input.value).toBe(inputTextFixture);
});

test('when <Input/> internal state is updated callback prop is fired', async () => {
    const spy = jest.fn();
    const input = render(<Input onChange={spy}/>).getByLabelText('cost-input');
    fireEvent.change(input, { target: { value: inputTextFixture } });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(inputTextFixture);
});
