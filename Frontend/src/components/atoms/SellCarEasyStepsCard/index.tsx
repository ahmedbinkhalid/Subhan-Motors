import React from 'react';
import { SellCarEasyStepsCardProps } from './types';


export const SellCarEasyStepsCard : React.FC <SellCarEasyStepsCardProps>= ({
    cardIcon,
    cardTitle
}) => {
  return (
    <div className='flex gap-3'>
        <div className='p-4 rounded-full bg-slate-100 border-[0.5px]'>
          {cardIcon}
        </div>
        <p className='md:text-lg text-base text-charcoal-gray font-sans font-medium mt-4'>
             {cardTitle}
             </p>
    </div>
  )
}
