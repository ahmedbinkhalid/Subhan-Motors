import React from "react";
import { LoginSignUpForm } from "../../molecules/LoginSignUpForm";
import { SigInFormCreationData } from "./constants";

export const SignInForm: React.FC = () => {
  return (
    <>
      {SigInFormCreationData.map((objData, index) => (
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
  );
};
