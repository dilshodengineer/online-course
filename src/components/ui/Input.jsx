import React from 'react';

const Input = ({
    type = "text",
    id = "",
    name = "",
    label = null,
    className = "",
    placeholder = "",
    value = "",
    onChange,
    disabled = false
}) => {
    return (
        <div className={className}>
            {label && (
                <label htmlFor={id} className="mb-1">
                    {label}
                </label>
            )}

            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className="form-control"
            />
        </div>
    );
};

export default Input;