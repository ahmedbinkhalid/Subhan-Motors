import React from 'react';
import { GetCarsLayout } from '../../components/organism/admin/GetCarsLayout';

export const GetBankCars : React.FC = () => {
  return (
    <GetCarsLayout title='All Listed Bank Released Cars'
    managedBy='Bank' />
  )
}