import React from "react";
import { ImageProvider } from "../../components/molecules/ImageContext";
import { AddCarUploadPhotos } from "../../components/molecules/admin/AddCarUploadPhotos";
import { ContactProvider } from "../../components/molecules/ContactContext";
import { CarInformation } from "../../components/molecules/CarInformation";

export const AddUsedOrBankCar: React.FC = () => {
  return (
    <ImageProvider>
      <section className="lg:max-w-5xl xl:max-w-6xl mx-auto md:px-0 px-4">
        <AddCarUploadPhotos />
        <ContactProvider>
          <CarInformation bgcolor="regal-red" />
        </ContactProvider>
      </section>
    </ImageProvider>
  );
};
