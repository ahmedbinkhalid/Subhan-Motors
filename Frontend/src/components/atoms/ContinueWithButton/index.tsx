import React from 'react';
import { ContinueWithProps } from './types';

export const ContinueWithButton : React.FC<ContinueWithProps> = ({icon, btnLabel}) => {
  return (
    <button className={`mx-0 flex p-2 ${btnLabel.includes("Facebook") ? "bg-[#4267B2] text-white" : "bg-white" } border-[0.5px] border-[#37474F] rounded-lg w-full h-full gap-8`}>
        {icon}
        <p className='s text-base font-sans font-semibold  self-center'> {btnLabel}</p>
    </button>
  );
}

