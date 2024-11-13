import React from "react";
import { OfferingCardsData } from "./constants";
import { OfferingCard } from "../../atoms/OfferingCard";

export const OfferingCardsLayout: React.FC = () => {
  return (
    <section className="w-full flex flex-col m-auto px-2">
      <h1 className="py-6 lg:text-xl text-lg text-charcoal-gray font-semibold px-4 border-b-2">
        Subhan Motors Offering
      </h1>
      {/* Define grid for the whole section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        {OfferingCardsData.map((data, index) => (
          <OfferingCard
            key={index} // Add a key for each element in the map
            offeringImage={data.offeringImage}
            offeringData={data.offeringData}
          />
        ))}
      </div>
    </section>
  );
};
