import React from "react";
import { OfferingCardProps } from "./types";

export const OfferingCard: React.FC<OfferingCardProps> = ({
  offeringImage,
  offeringData,
}) => {
  return (
    <main className="w-full border-[0.5px] border-gray-500 rounded-md flex gap-4 p-2">
      <img
        src={offeringImage}
        alt="Offering1"
        className="object-contain h-20 w-40"
      />

      <div className="flex flex-col font-sans py-2 italic">
        <h1 className="text-lg font-semibold text-blue-variant">
          Subhan Motors
        </h1>
        <h3 className="text-base max-sm:text-sm font-medium text-charcoal-gray">
          {" "}
          {offeringData}{" "}
        </h3>
      </div>
    </main>
  );
};
