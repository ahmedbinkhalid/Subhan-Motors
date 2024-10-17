import React from 'react';
import {SigUpFormCreationData} from "./constants";
import { LoginSignUpForm } from '../../molecules/LoginSignUpForm';

export const SignUpForm : React.FC = () => {
  return (
    <>
    {SigUpFormCreationData.map((objData, index) => (
      <LoginSignUpForm
        mainHeading={objData.mainHeading}
        mainData={objData.mainData}
        lastText={objData.lastText}
        btnText={objData.btnText}
        key={index}
        openModal={objData.openModal}
      />
    ))}
  </>
  )
}