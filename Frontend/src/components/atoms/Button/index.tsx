import React from "react";
import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  btnTitle,
  onClick,
  bgColor,
  hoverBgColor,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${bgColor} text-white rounded-md px-3 py-3 cursor-pointer font-semibold transition-colors duration-200 ${
        hoverBgColor && `hover:${hoverBgColor}`
      }`}
    >
      {btnTitle}
    </button>
  );
};
