import React from 'react';
import { AddCar } from '../../components/organism/admin/AddCar';
import { addCar } from '../../assets/images';
import { ContactProvider } from '../../components/molecules/ContactContext';
import { CarInformation } from '../../components/molecules/CarInformation';


export const AddUsedOrBankCar : React.FC = () => {
  return (
          <AddCar mainImage={addCar} >
            <ContactProvider>
              <div className='lg:max-w-3xl xl:max-w-5xl mx-auto'>
              <CarInformation bgcolor='regal-red' />
              </div>
      </ContactProvider>
          </AddCar>
  )
}