import React from "react";
import { LeadershipCardProps } from "./types";

export const LeadershipCard: React.FC<LeadershipCardProps> = ({
  leaderImage,
  leaderName,
  leaderTitle,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg text-center hover:shadow-2xl transition duration-300">
      <div className="overflow-hidden rounded-lg">
        <img
          src={leaderImage}
          alt={leaderName}
          className="mx-auto mb-4 rounded-lg object-cover transform transition duration-300 hover:scale-105 hover:opacity-90"
        />
      </div>
      <div className="flex flex-col gap-2 pt-2 pb-8">
        <h3 className="md:text-2xl text-lg font-bold text-regal-red">
          {leaderName}
        </h3>
        <p className="text-charcoal-gray font-medium text-xl">{leaderTitle}</p>
      </div>
    </div>
  );
};
