import React from "react";

const SignupInput = ({ type, name, placeholder, value, onChange }) => {
return (
    <input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    />
  );
};

export default SignupInput;