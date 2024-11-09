import React from 'react';
import { MyAdsCardProps } from './types';
import { AiFillDelete } from "react-icons/ai";

export const MyAdsCard: React.FC<MyAdsCardProps> = ({ 
  imageUrl, 
  make, 
  model, 
  price, 
  city, 
  onRemove 
}) => {
  return (
    <div className="flex flex-col items-center bg-white border rounded-md p-4 py-8 shadow-md gap-8 w-full hover:shadow-xl">
      <div className='flex gap-4 items-center'>
      <img src={`http://localhost:5000/public/uploads/${imageUrl}`} alt={`${make} ${model}`} className=" object-cover rounded-md h-40 w-40" />

<div className="flex flex-col flex-grow gap-1">
  <h2 className="md:text-xl text-lg font-bold">{`${make} ${model}`}</h2>
  <p className="text-charcoal-gray">Price: {price}</p>
  <p className="text-charcoal-gray">Location: {city}</p>
</div>

      </div>

      <div className="flex space-x-4 self-end mx-3">

        <button className='flex flex-col gap-[2px]' onClick={onRemove}>
        <AiFillDelete className='text-regal-red font-sans font-bold hover:text-blue-variant' size={24} />
        <p className='text-center text-regal-red font-medium'> Delete </p>

        </button>
      </div>


    </div>
  );
};
