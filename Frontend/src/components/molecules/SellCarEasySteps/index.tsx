import React from 'react';
import { SellEasyStepsCardsData } from './constants';
import { SellCarEasyStepsCard } from '../../atoms/SellCarEasyStepsCard';

export const SellCarEasySteps : React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-center p-8 font-sans gap-3 bg-slate-50 border-y my-4'>
        <h1 className='md:text-xl text-lg text-regal-red font-bold'>
        Sell your Car With 3 Easy & Simple Steps!
        </h1>
        <p className='md:text-lg text-base font-medium text-center text-blue-variant'>
        It's free and takes less than a minute
        </p>

        <div className='flex gap-5'>
            {
                SellEasyStepsCardsData.map((item, index) => (
                    <SellCarEasyStepsCard
                    key={index}
                    cardIcon = {item.cardIcon}
                    cardTitle = {item.cardTitle}
                     />
                ))
            }
        </div>
    </section>
  )
}

