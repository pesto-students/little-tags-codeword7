import React from 'react';
import './FormInput.scss';

const FormInput = ({ handleOnChange, ...otherProps }) => {
    return (
        <input type="text" className="form-input" onChange={handleOnChange} {...otherProps} />
    )
}

export default FormInput;
