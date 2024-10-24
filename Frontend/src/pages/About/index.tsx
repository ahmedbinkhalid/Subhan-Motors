import React from 'react';
import { about, headerBg1, team1, team2, team3, team4 } from '../../assets/images';
import CarInformationSubmitButton from '../../components/atoms/CarInformationSubmitButton';
import { LeaderShip } from '../../components/molecules/LeaderShip';
import { AboutCompany } from '../../components/atoms/AboutCompany';

export const About : React.FC = () => {
  return (
    <section className='flex flex-col md:gap-12 gap-8'>
      <AboutCompany />
        <section
  className="relative w-full bg-right bg-no-repeat bg-cover"
  style={{
    backgroundImage: `url("https://www.anaconda.com/wp-content/uploads/2024/05/Anaconda-10yr-white.webp")`,
  }}
>
  {/* Outer div with full width and no visual separation on the right */}
  <div className="w-full bg-white bg-opacity-20 p-8 rounded-md shadow-lg">
    {/* Inner content remains unaffected */}
    <div className="md:p-12 max-w-2xl">
      <h1 className="text-6xl font-bold mb-4 text-charcoal-gray">
        We’re not just a company; we’re a movement.
      </h1>
      <p className="text-xl text-blue-variant font-sans font-semibold">
      Subhan Motors stands at the forefront of the automotive revolution. We offer a diverse range of high-quality vehicles and unparalleled customer service, empowering our customers and community with the freedom to explore their journeys. Our commitment to innovation and excellence ensures that every vehicle meets the highest standards of performance and safety, helping our customers drive forward with confidence.
      </p>
      {/* <CarInformationSubmitButton /> */}
    </div>
  </div>
</section>    
    </section>




  )
}

