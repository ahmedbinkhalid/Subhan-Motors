import React from "react";
import { SellCarEasySteps } from "../../components/molecules/SellCarEasySteps";
import { ContactInformation } from "../../components/molecules/ContactInformation";
import { UploadPhotos } from "../../components/molecules/UploadPhotos";
import { CarInformation } from "../../components/molecules/CarInformation";
import { ImageProvider } from "../../components/molecules/ImageContext";
import { ContactProvider } from "../../components/molecules/ContactContext";
export const SellCar: React.FC = () => {
  return (
    <ImageProvider>
      <SellCarEasySteps />
      <ContactProvider>
        <ContactInformation />

        <UploadPhotos />
        <CarInformation bgcolor="blue-variant" />
      </ContactProvider>
    </ImageProvider>
  );
};
