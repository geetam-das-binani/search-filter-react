import React from "react";

const Input = ({ handleChange, value, title, name, color, border }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" name={name} value={value} />
      <span
        style={{
          background: color,
          border: border ? border :'none'
        }}
        className="checkmark"
      ></span>
      {title}
    </label>
  );
};

export default Input;
