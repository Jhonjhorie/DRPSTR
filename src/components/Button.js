
// src/view/components/Button.js
import React from 'react';

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded shadow transition duration-200 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
