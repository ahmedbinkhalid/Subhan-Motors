// src/components/CompaniesCardsLayout.tsx
import React from "react";
import { CompaniesCardsData } from "./constants";
import { CompaniesCard } from "../../atoms/CompaniesCard";

export const CompaniesCardsLayout: React.FC = () => {
  // Split the data into two halves
  const firstHalf = CompaniesCardsData.slice(0, Math.ceil(6));
  const secondHalf = CompaniesCardsData.slice(6, Math.ceil(12));
  const thirdHalf = CompaniesCardsData.slice(12, Math.ceil(18));

  return (
    <section className="relative flex flex-col w-full bg-slate-50 rounded-lg md:px-16 gap-2 py-16">
      <h1 className="lg:text-xl text-lg pb-8 text-gray-900 font-bold ml-8 border-b-2">
        New cars By Make 
      </h1>

      {/* First container - First half of the cards */}
      <div className="flex flex-wrap justify-center gap-4 ">
        {firstHalf.map((company, index) => (
          <CompaniesCard
            key={index}
            companyLogo={company.companyLogo}
            companyName={company.companyName}
          />
        ))}
      </div>

      {/* Second container - Second half of the cards */}
      <div className="flex flex-wrap justify-center gap-4">
        {secondHalf.map((company, index) => (
          <CompaniesCard
            key={index}
            companyLogo={company.companyLogo}
            companyName={company.companyName}
          />
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {thirdHalf.map((company, index) => (
          <CompaniesCard
            key={index}
            companyLogo={company.companyLogo}
            companyName={company.companyName}
          />
        ))}
      </div>

    </section>
  );
};
