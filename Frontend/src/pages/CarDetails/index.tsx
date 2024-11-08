// src/pages/CarDetailPage.tsx

import React from 'react';
import { CarDetailsProps } from './types';


export const CarDetailPage: React.FC<CarDetailsProps> = ({ car, id }) => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Car Image Section */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <img
            src={`/uploads/${car.images[0]}`}
            alt="Car Image"
            className="w-full h-auto max-h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="flex mt-4 space-x-2">
            {car.images.slice(1, 4).map((img, index) => (
              <img
                key={index}
                src={`/uploads/${img}`}
                alt={`Thumbnail ${index + 1}`}
                className="w-16 h-16 object-cover rounded-lg shadow"
              />
            ))}
          </div>
        </div>

        {/* Car Details Section */}
        <div className="w-full md:w-1/2 p-4 text-charcoal-gray">
          <h2 className="text-3xl font-bold text-regal-red">
            {car.make} {car.model} ({car.year})
          </h2>
          <p className="text-lg mt-2">
            Price: <span className="text-blue-700">${car.price.toLocaleString()}</span>
          </p>
          <p className="text-lg">Mileage: {car.mileage} miles</p>
          <p className="text-lg">Condition: {car.condition}</p>
          <p className="text-lg">Transmission: {car.transmission}</p>
          <p className="text-lg">Engine: {car.engineType} - {car.engineCapacity}</p>
          <p className="text-lg">Color: {car.color}</p>
          <p className="text-lg">Location: {car.location}</p>
          <p className="mt-4 text-sm text-gray-600">{car.description}</p>
          <p className="mt-4 text-lg font-semibold">Seller: {car.sellerInfo}</p>
          <p className="text-lg">Contact: {car.phoneNumber}</p>

          {/* Contact Button */}
          <button
            onClick={() => alert('Contacting seller...')}
            className="px-4 py-2 mt-4 bg-regal-red text-white rounded-lg hover:bg-red-700 transition-all"
          >
            Contact Seller
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
