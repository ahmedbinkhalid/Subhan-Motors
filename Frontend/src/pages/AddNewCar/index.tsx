import React from 'react';
import { AddNewCarForm } from '../../components/molecules/admin/AddNewCarForm';
import { ImageProvider } from '../../components/molecules/ImageContext';


export const AddNewCar : React.FC = () => {
  return (
    <ImageProvider>
      <AddNewCarForm onSubmit={() => console.log("Hello g")} />
    </ImageProvider>
  )
}