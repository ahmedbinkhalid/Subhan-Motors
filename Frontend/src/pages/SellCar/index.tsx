import React from 'react'
import { SellCarEasySteps } from '../../components/molecules/SellCarEasySteps'
import { ContactInformation } from '../../components/molecules/ContactInformation'
import { UploadPhotos } from '../../components/molecules/UploadPhotos'
import { CarInformation } from '../../components/molecules/CarInformation'
export const SellCar : React.FC = () => {
  return (
    <React.Fragment>
      <SellCarEasySteps />
      <ContactInformation />
      <UploadPhotos />
      <CarInformation />
    </React.Fragment>
  )
}

