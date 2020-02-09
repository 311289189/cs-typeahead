import React, { InputHTMLAttributes } from 'react';

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
        type="text"
        value={props.value}
        { ...rest }
      />
    )
}

export default InputField
