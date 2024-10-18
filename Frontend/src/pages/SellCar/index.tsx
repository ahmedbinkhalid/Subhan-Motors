import React from 'react'
import { SellCarEasySteps } from '../../components/molecules/SellCarEasySteps'
import { ContactInformation } from '../../components/molecules/ContactInformation'
import { UploadPhotos } from '../../components/molecules/UploadPhotos'
import { ContinueWithButton } from '../../components/atoms/ContinueWithButton';
import { continueWithData } from '../../components/atoms/ContinueWithButton/constants';

export const SellCar : React.FC = () => {
  return (
    <React.Fragment>
      <SellCarEasySteps />
      <ContactInformation />
      <UploadPhotos />
      {
        continueWithData.map((objData, index) => (
          <ContinueWithButton
                      icon={objData.icon}
                      btnLabel={objData.btnLabel}
                      key={index}
                    />
        ))
      }
    </React.Fragment>
  )
}

