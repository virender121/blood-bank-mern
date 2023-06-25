import React from 'react'
import './Form.css'
const InputType = ({ labelText, labelFor, inputType, name, value, onChange, className }) => {
  if (inputType === 'textarea') {
    return (
      <div>
        <label htmlFor={labelFor} className="form-label">{labelText}</label>
        <textarea
          id={labelFor}
          name={name}
          value={value}
          onChange={onChange}
          className={className}
        />
      </div>
    );
  } else {
    return (
      <div>
        <label htmlFor={labelFor} className="form-label">{labelText}</label>
        <input
          type={inputType}
          id={labelFor}
          name={name}
          value={value}
          onChange={onChange}
          className={className || "form-control"}
        />
      </div>
    );
  }
};

export default InputType;
