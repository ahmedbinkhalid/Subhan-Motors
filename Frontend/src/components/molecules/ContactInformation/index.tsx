import React from 'react';
import { MobileNumbers } from '../../atoms/MobileNumbers';
import { FaMobileScreenButton } from "react-icons/fa6";

export const ContactInformation : React.FC = () => {
  return (
    <section className='bg-slate-50 border-y p-8 hover:border-t-4 hover:border-t-blue-variant hover:shadow-lg font-sans text-charcoal-gray my-4'>
        <h1 className='md:text-xl text-lg font-semibold my-2'>
        Contact Information
        </h1>

        <div className='grid grid-cols-3 py-6 px-16 items-center justify-center'>
            <MobileNumbers />
            <div className="flex gap-6 items-center justify-center">
            <FaMobileScreenButton size={64} className='text-blue-variant' />
            <p className='md:text-base text-sm text-charcoal-gray font-medium'>
            Enter a genuine 11 digit mobile no. with format 03XXXXXXXXX. All inquires will come on this number.
            </p>
            </div>
        </div>
    </section>
  )
}

