import React from 'react';
import { LeadershipCard } from '../../atoms/LeadershipCard';
import { team1, team2, team3 } from '../../../assets/images';

export const LeaderShip : React.FC = () => {
  return (
    <div className="bg-gray-50 md:px-12 md:py-16 p-4 rounded-lg">
    <div className="px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Meet Our Leadership
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-4">
        <LeadershipCard
        leaderImage={team1}
        leaderName='Leader 1'
        leaderTitle='CEO'
        />
        <LeadershipCard
        leaderImage={team2}
        leaderName='Leader 2'
        leaderTitle='CEO'
        />
        <LeadershipCard
        leaderImage={team3}
        leaderName='Leader 3'
        leaderTitle='CEO'
        />
      </div>
    </div>
  </div>

  )
}

