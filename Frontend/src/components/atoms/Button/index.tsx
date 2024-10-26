import React from 'react';
import { ButtonProps } from './types';

export const Button : React.FC <ButtonProps> = ({
    btnTitle
}) => {
  return (
    <button className="text-white rounded-md px-3 py-3 bg-regal-red cursor-pointer font-semibold hover:bg-red-700">
    {btnTitle}
  </button>
  )
}

