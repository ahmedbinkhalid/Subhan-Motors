import React from 'react';
import { AboutCompany } from '../../atoms/AboutCompany';
import { NotOnlyCompany } from '../../atoms/NotOnlyCompany';
import { CoreValues } from '../../molecules/CoreValues';
import { LeaderShip } from '../../molecules/LeaderShip';
import { MissionVision } from '../../molecules/MissionVision';

export const AboutMain : React.FC = () => {
  return (
    <section className='flex flex-col md:gap-12 gap-8'>
      <AboutCompany />
      <MissionVision />
      <NotOnlyCompany />
      <CoreValues />
      <LeaderShip />  
    </section>
  )
}
