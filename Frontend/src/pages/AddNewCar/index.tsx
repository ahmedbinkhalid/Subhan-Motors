import React from 'react';
import { AddCar } from '../../components/organism/admin/AddCar';
import { addCar } from '../../assets/images';


export const AddNewCar : React.FC = () => {
  return (
    <AddCar mainImage={addCar}>
      Hello
    </AddCar>
  )
}