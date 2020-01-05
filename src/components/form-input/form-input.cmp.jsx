import React from 'react';
import './form-input.scss';

const FormInput = ({ handleChange, label, placeholder,textarea, ...otherProps }) => (
  <div className="group">
    {
      label ?
        (<label className='form-input-label'>
          {label}
        </label>)
        : null
    }
    {
    textarea ?
        (<textarea className="form-input" onChange={handleChange} {...otherProps} placeholder={placeholder} />)
        :
        (<input className="form-input" onChange={handleChange} {...otherProps} placeholder={placeholder} />)
    }
  </div>
);

export default FormInput;