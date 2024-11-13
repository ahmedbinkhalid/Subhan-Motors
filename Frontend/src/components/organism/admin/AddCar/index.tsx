import React from "react";
import { ImageProvider } from "../../../molecules/ImageContext";
import { AddCarImagePart } from "../../../molecules/admin/AddCarImagePart";

type AddCarProps = {
  mainImage: string;
  children: React.ReactNode;
};

export const AddCar: React.FC<AddCarProps> = ({ mainImage, children }) => {
  return (
    <ImageProvider>
      <AddCarImagePart mainImage={mainImage} />
      {children}
    </ImageProvider>
  );
};
