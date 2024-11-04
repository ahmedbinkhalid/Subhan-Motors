import React from 'react';
import CarInformationForm from '../CarInformationForm';

type CarInformation = {
  bgcolor : string;

}

export const CarInformation : React.FC<CarInformation> = ({bgcolor}) => {
  return (
    <section className={`bg-slate-50 border-y md:p-8 p-1 hover:border-t-4 hover:border-t-${bgcolor} hover:shadow-lg font-sans text-charcoal-gray my-4`}>
        <div className='max-w-5xl mx-auto'>
        <h1 className="md:text-2xl text-xl font-semibold mt-4 mb-1"> Car Information </h1>
        <h1 className="md:text-base text-sm font-normal"> (All fields are mandatory, you need to provide each detail.) </h1>
        </div>

         <CarInformationForm bgColor={bgcolor}/>
    </section>
  )
}
