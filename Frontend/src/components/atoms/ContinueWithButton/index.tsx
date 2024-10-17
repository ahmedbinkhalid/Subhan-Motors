import React from 'react';
import { ContinueWithProps } from './types';

export const ContinueWithButton : React.FC<ContinueWithProps> = ({icon, btnLabel}) => {
  return (
    <button className={`mx-0 flex p-2 ${btnLabel.includes("Facebook") ? "bg-[#4267B2] text-white" : "bg-white" } border-[0.5px] border-[#37474F] rounded-lg w-full h-full items-center justify-center gap-6`}>
        {icon}
        <p className='text-base font-sans font-semibold'> {btnLabel}</p>
    </button>
  );
}

