import React from 'react';
import { SellCarEasySteps } from '../../components/molecules/SellCarEasySteps';
import { ContactInformation } from '../../components/molecules/ContactInformation';
import { UploadPhotos } from '../../components/molecules/UploadPhotos';
import { CarInformation } from '../../components/molecules/CarInformation';
import { ImageProvider } from '../../components/molecules/ImageContext';
import { ContactProvider } from '../../components/molecules/ContactContext';
export const SellCar: React.FC = () => {
  return (
    <ImageProvider>
        <SellCarEasySteps />
        <ContactProvider>
        <ContactInformation />
        <section className="bg-slate-50 border-y p-8 hover:border-t-4 hover:border-t-blue-variant hover:shadow-lg font-sans text-charcoal-gray my-4">
        <UploadPhotos
        bgColor='blue-variant'
        hoverBgColor='blue-600'
         />
          </section>
        <CarInformation />
        </ContactProvider>
    </ImageProvider>
  );
};
