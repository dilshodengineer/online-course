import React from 'react';

const Input = ({
    type = "text",
    id = "",
    label = null,
    className = "",
    placeholder = "",
    value = null,
    onChange = () => {},
    disabled = false
}) => {
    return (
        <div className={className}>
            {label && (
                <label htmlFor={id} className='mb-1'>
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className='form-control'
            />
        </div>
    )
}

export default Input;