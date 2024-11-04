import React from 'react';
import { AddCar } from '../../components/organism/admin/AddCar';
import { addCar } from '../../assets/images';
import { AddNewCarForm } from '../../components/organism/admin/AddNewCarForm';
import { ContactProvider } from '../../components/molecules/ContactContext';


export const AddNewCar : React.FC = () => {
  return (
    <AddCar mainImage={addCar}>
       <section className={`bg-slate-50 border-y md:p-8 p-1 hover:border-t-4 hover:border-t-regal-red hover:shadow-lg font-sans text-charcoal-gray my-4 lg:max-w-3xl xl:max-w-5xl mx-auto`}>
    <div className='max-w-5xl mx-auto'>
    <h1 className="md:text-2xl text-xl font-semibold mt-4 mb-1"> Car Information </h1> 
    <h1 className="md:text-base text-sm font-normal"> (All fields are mandatory, you need to provide each detail.) </h1>
    </div>
    <ContactProvider>
    <AddNewCarForm bgColor='regal-red' />
    </ContactProvider>
    </section>
    </AddCar>
  )
}