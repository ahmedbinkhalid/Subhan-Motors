import React from 'react';
import { GetCarsLayout } from '../../components/organism/admin/GetCarsLayout';

export const GetUsedCars : React.FC = () => {
  return (
    <GetCarsLayout title='All Listed Used Cars'
    managedBy='Used' />
  )
}