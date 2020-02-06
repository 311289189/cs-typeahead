import React from 'react';
import './index.css'

interface Props {
    onChange?(value: string): void
}

const Input = (props: Props) => (
    <input
        onChange={e => props.onChange && props.onChange(e.target.value)}
        aria-label="cost-input"
        className="generic-input"
        type="text"
    />
)

export default Input
