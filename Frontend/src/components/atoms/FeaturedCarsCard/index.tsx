import React from 'react';
import { FeaturedCarsCardProps } from './types';

export const FeaturedCarsCard  : React.FC  <FeaturedCarsCardProps> = ({carImage, carMake, carModel, carPrice, carCity}) => {
  return (
    <div className='flex flex-col justify-between bg-white shadow-md italic w-64 rounded-md my-1'>
        <img
        src={`http://localhost:5000/public/uploads/${carImage}`}
        alt='Featured Car'
        className='object-fill h-56 w-auto rounded-md'/>
        <div className="mx-4 gap-6 py-4">
        <h1 className='md:text-xl text-lg text-charcoal-gray font-semibold'>{carMake}, {carModel} </h1>
        <p className='md:text-lg text-base text-blue-variant font-medium'> {carPrice} </p>
        <p className='md:text-base text-sm text-charcoal-gray font-normal'> {carCity} </p>
        </div>
    </div>
  )
}
