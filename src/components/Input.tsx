import React from 'react';

interface InputProps {
    code: string;
    type: string;
    validation: any;
    name: string;
};

const Input = ({ code, validation, type, name }: InputProps) => {
    return (
        <label className='input-container' htmlFor={code}>
            <input
                className='form-input'
                type={type}
                id={code}
                placeholder={validation.name}
                {...validation}
            />
            <span className='input-span'>{name}</span>
        </label>
    );
};

export default Input;