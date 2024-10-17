import React from 'react';
import { FaTh } from "react-icons/fa";

export const MobileNumbers : React.FC = () => {
  return (
    <div className="col-span-2 flex flex-col gap-4">
                <div className='flex gap-4 self-center'>
                <h3 className='md:text-base text-sm font-normal mt-2'>
                Mobile Number
                </h3>
                <div className='flex rounded-md border-[0.5px] p-2 gap-4 w-64'>
                    <FaTh size={24} className='text-lg text-charcoal-gray object-cover' />
                <input
                type='text'
                className='outline-none bg-transparent'
                placeholder='Mobile Number'
                 />
                </div>
                </div>

                <div className='flex gap-4 ml-11'>
                <h3 className='md:text-base text-sm font-normal mt-2'>
                Secondary Number (Optional)
                </h3>
                <div className='flex rounded-md border-[0.5px] p-2 gap-4 w-64'>
                <input
                type='text'
                className='outline-none bg-transparent w-full px-2'
                placeholder='Secondary Number'
                 />
                </div>
                </div>

            </div>
  )
}

