import React from 'react';
import { CompaniesCardProps } from './types';

export const CompaniesCard : React.FC <CompaniesCardProps> = ({
  companyLogo,
  companyName
}) => {
  return (
    <div className='flex flex-col justify-center items-center hover:bg-white hover:shadow-lg gap-1 p-4 hover:rounded-xl cursor-pointer'>

      <div className='rounded-full flex justify-center items-center'>
      <img
      src={companyLogo}
      alt='companyLogo'
      className='object-center'
      />
      </div>
      <p
      className='text-lg text-gray-900 font-sans font-semibold text-center'
      > {companyName}</p>
    </div>
  )
}

