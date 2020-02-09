import React, { InputHTMLAttributes } from 'react';
import './index.css'

interface Props {
    onChange?(value: string): void
    value?: string
    hasFocus?(hasFocus: boolean): void
}

const InputField = (props: Props & Omit<InputHTMLAttributes<never>, 'onChange'>) => {

    const {
        onChange,
        hasFocus,
        ...rest
    } = props

    return (
      <input
        onChange={e => onChange && onChange(e.target.value)}
        onFocus={() => hasFocus && hasFocus(true)}
        onBlur={() => hasFocus && hasFocus(false)}
        className="generic-input"
        type="text"
        value={props.value}
        { ...rest }
      />
    )
}

export default InputField
