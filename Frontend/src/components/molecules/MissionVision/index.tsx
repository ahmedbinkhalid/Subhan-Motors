import React from 'react';
import { MissionVisionCard } from '../../atoms/MissionVisionCard';

export const MissionVision : React.FC = () => {
  return (
    <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <MissionVisionCard 
            title="Our Mission"
            description="To provide top-quality vehicles and exceptional service that meet the
      needs of our customers, making the car-buying experience smooth and stress-free."
            />
            <MissionVisionCard 
            title="Our Vision"
            description=" To be a leader in the automotive industry, known for our integrity,
                customer satisfaction, and excellence in both products and service."
            />

          </div>
        </div>
  )
}