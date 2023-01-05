import React from "react";

const TextInput = ({ name, type, onChange, placeholder, value, label }) => {
  return (
    <div className="d-flex flex-column align-items-start">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
