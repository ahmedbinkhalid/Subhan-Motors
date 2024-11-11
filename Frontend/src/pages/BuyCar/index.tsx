import React from 'react';
import { GetCarsLayout } from '../../components/organism/admin/GetCarsLayout';

export const BuyCar : React.FC = () => {
  return (
    <section>
      <h1 className='xl:mx-16 md:mx-24 xs:mx-14 mx-1 my-4 md:text-3xl text-xl font-sans text-regal-red font-bold'> All Listed Cars </h1>
      <GetCarsLayout title='Brand New Cars'
    managedBy='Brand' />
      <GetCarsLayout title='Used Cars'
    managedBy='Used' />
      <GetCarsLayout title='Bank Released Cars'
    managedBy='Bank' />
    </section>
      
  )
}

