import React from 'react';

const Button = ({ title, color, ...props }) => {
  return (
    <button
      className="flex items-center justify-center relative font-bold rounded-full overflow-hidden text-xl py-5 px-12 bg-blue-600"
      {...props}
    >
      <div className="absolute rounded-full w-[50px] h-[50px] bg-blue-500 -top-3 z-0 left-4"></div>
      <div className="absolute rounded-full w-[16px] h-[16px] bg-blue-500 bottom-3 z-0 left-6"></div>
      <div className="absolute rounded-full w-[70px] h-[70px] bg-blue-500 -bottom-1/2 z-0 right-2"></div>
      <span className="relative z-10">{title}</span>
    </button>
  );
};

export default Button;
