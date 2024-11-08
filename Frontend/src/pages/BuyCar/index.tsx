import React from 'react';
import { GetCarsLayout } from '../../components/organism/admin/GetCarsLayout';

export const BuyCar : React.FC = () => {
  return (
    <React.Fragment>
      <h1 className=' md:mx-16 mx-1 my-4 md:text-3xl text-xl font-sans text-regal-red font-bold'> All Listed Cars </h1>
      <GetCarsLayout title='Brand New Cars'
    managedBy='Brand' />
      <GetCarsLayout title='Used Cars'
    managedBy='Used' />
      <GetCarsLayout title='Bank Released Cars'
    managedBy='Bank' />
    </React.Fragment>
  )
}

