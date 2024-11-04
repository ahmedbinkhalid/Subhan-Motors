import React from 'react';
import { GetCarsLayout } from '../../components/organism/admin/GetCarsLayout';

export const GetNewCars : React.FC = () => {
  return (
    <GetCarsLayout title='All Listed New Cars'
    managedBy='Brand' />
  )
}
