import React from "react";
import { CoreValueCardProps } from "./types";

export const CoreValueCard: React.FC<CoreValueCardProps> = ({
  ValueIcon,
  valueTitle,
  valueDescription,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <ValueIcon className="mx-auto mb-4 w-16 h-16 text-regal-red" />
      <h3 className="text-xl font-bold mb-2 text-charcoal-gray">
        {" "}
        {valueTitle}{" "}
      </h3>
      <p className="text-charcoal-gray">{valueDescription}</p>
    </div>
  );
};
