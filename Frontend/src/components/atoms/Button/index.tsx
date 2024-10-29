import React from 'react';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  btnTitle,
  onClick,
  bgColor,
  hoverBgColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} text-white rounded-md px-3 py-3 cursor-pointer font-semibold transition-colors duration-200 hover:${hoverBgColor}`}
    >
      {btnTitle}
    </button>
  );
};
