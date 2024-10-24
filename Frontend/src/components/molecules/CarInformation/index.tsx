import React from 'react';
import CarInformationForm from '../CarInformationForm';

export const CarInformation : React.FC = () => {
  return (
    <section className="bg-slate-50 border-y p-8 hover:border-t-4 hover:border-t-blue-variant hover:shadow-lg font-sans text-charcoal-gray my-4">
        <div className='max-w-5xl mx-auto'>
        <h1 className="md:text-2xl text-xl font-semibold mt-4 mb-1"> Car Information </h1>
        <h1 className="md:text-base text-sm font-normal"> (All fields marked with * are mandatory) </h1>
        </div>

         <CarInformationForm />
    </section>
  )
}
