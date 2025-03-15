import React from "react";
import { ImageProvider } from "../../../components/molecules/ImageContext";
import { AddCarUploadPhotos } from "../../../components/molecules/admin/AddCarUploadPhotos";
import { ContactProvider } from "../../../components/molecules/ContactContext";
import AddNewCarInformationForm from "../../../components/molecules/AddNewcarInformationForm";
export const AddNewCar: React.FC = () => {
  return (
    <ImageProvider>
      <section className="lg:max-w-5xl xl:max-w-6xl mx-auto md:px-0 px-4">
        <ContactProvider>
          <AddCarUploadPhotos />
          <AddNewCarInformationForm bgColor="regal-red" />
        </ContactProvider>
      </section>
    </ImageProvider>
  );
};
