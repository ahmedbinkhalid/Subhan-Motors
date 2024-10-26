import React from 'react';
import { SellEasyStepsCardsData } from './constants';
import { SellCarEasyStepsCard } from '../../atoms/SellCarEasyStepsCard';

export const SellCarEasySteps: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-8 font-sans gap-3 bg-slate-50 border-y my-4 md:py-12">
      <h1 className="text-lg font-bold text-center text-regal-red md:text-2xl lg:text-3xl">
        Sell your Car With 3 Easy & Simple Steps!
      </h1>
      <p className="text-base font-medium text-center text-blue-variant md:text-lg lg:text-xl">
        It's free and takes less than a minute
      </p>

      <div className="flex flex-col gap-5 mt-6 md:flex-row md:gap-8 lg:gap-10">
        {SellEasyStepsCardsData.map((item, index) => (
          <SellCarEasyStepsCard
            key={index}
            cardIcon={item.cardIcon}
            cardTitle={item.cardTitle}
          />
        ))}
      </div>
    </section>
  );
};
