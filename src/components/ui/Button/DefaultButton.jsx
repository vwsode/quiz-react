import React from 'react';

const DefaultButton = ({ title, color, disabled, ...props }) => {
  return (
    <button className="font-bold bg-accent-100 p-5 rounded-xl" disabled={disabled} {...props}>
      {title}
    </button>
  );
};

export default DefaultButton;
