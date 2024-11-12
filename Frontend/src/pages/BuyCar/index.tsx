import React from 'react';
import { GetCarsLayout } from '../../components/organism/admin/GetCarsLayout';

export const BuyCar : React.FC = () => {
  return (
    <section>
      <h1 className=' my-4 md:text-3xl text-xl font-sans text-regal-red font-bold lg:ml-12 md:ml-8 xxl:ml-16 ml-4 leading-none'> All Listed Cars </h1>
      <GetCarsLayout title='Brand New Cars'
    managedBy='Brand' />
      <GetCarsLayout title='Used Cars'
    managedBy='Used' />
      <GetCarsLayout title='Bank Released Cars'
    managedBy='Bank' />
    </section>
      
  )
}

