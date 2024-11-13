import React from "react";
import { LeadershipCard } from "../../atoms/LeadershipCard";
import { founder, coFounder, manager } from "../../../assets/images";

export const LeaderShip: React.FC = () => {
  return (
    <div className="bg-gray-50 md:px-12 md:py-16 p-4 rounded-lg">
      <div className="px-4">
        <h2 className="md:text-3xl text-2xl font-bold text-center text-charcoal-gray md:mb-10 mb-6">
          Meet Our Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-4">
          <LeadershipCard
            leaderImage={founder}
            leaderName="NA"
            leaderTitle="CEO and Founder"
          />
          <LeadershipCard
            leaderImage={coFounder}
            leaderName="NA"
            leaderTitle="Co-Founder"
          />
          <LeadershipCard
            leaderImage={manager}
            leaderName="NA"
            leaderTitle="Manager"
          />
        </div>
      </div>
    </div>
  );
};
