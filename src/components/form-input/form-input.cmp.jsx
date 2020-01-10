import React from 'react';
import './form-input.scss';

const FormInput = ({ handleChange, placeholder,textarea, ...otherProps }) => (
  <div className="group">
    {
    textarea ?
        (<textarea className="form-input" onChange={handleChange} {...otherProps} placeholder={placeholder} />)
        :
        (<input className="form-input" onChange={handleChange} {...otherProps} placeholder={placeholder} />)
    }
  </div>
);

export default FormInput;