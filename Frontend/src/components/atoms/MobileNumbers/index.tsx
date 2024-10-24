import React, { useState } from 'react';
import { FaTh } from "react-icons/fa";
import { FullnameInput } from '../FullnameInput';

export const MobileNumbers: React.FC = () => {
  const [fullName, setFullName] = useState(''); // State for the FullnameInput
  const [mobileNumber, setMobileNumber] = useState(''); // State for Mobile Number input

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(e.target.value);
  };

  return (
    <div className="col-span-2 flex flex-col gap-4 w-full justify-center items-center">
      {/* Full Name Input */}
      <div className='flex gap-4'>
        <h3 className='md:text-base text-sm font-normal mt-2'>
          Seller Name
        </h3>
        <FullnameInput
          name="fullName"
          value={fullName}
          onChange={handleFullNameChange} // Pass the change handler
        />
      </div>

      {/* Mobile Number Input */}
      <div className='flex gap-4'>
        <h3 className='md:text-base text-sm font-normal mt-2'>
          Mobile Number
        </h3>
        <div className='flex rounded-md border-[0.5px] p-2 gap-4 w-64'>
          <FaTh size={24} className='text-lg text-charcoal-gray object-cover' />
          <input
            type='text'
            className='outline-none bg-transparent'
            placeholder='Mobile Number'
            value={mobileNumber} // Bind the state
            onChange={handleMobileNumberChange} // Pass the change handler
          />
        </div>
      </div>
    </div>
  );
};
