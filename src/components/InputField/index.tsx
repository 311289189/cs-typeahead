import React, { InputHTMLAttributes } from 'react';
import './index.css'

interface Props {
    onChange?(value: string): void
    value?: string
}

const InputField = (props: Props & Omit<InputHTMLAttributes<never>, 'onChange'>) => {

    const {
        onChange,
        ...rest
    } = props

    return (
      <input
        onChange={e => onChange && onChange(e.target.value)}
        className="generic-input"
        type="text"
        value={props.value}
        { ...rest }
      />
    )
}

export default InputField
