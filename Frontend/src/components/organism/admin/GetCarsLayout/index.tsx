import React, { useState } from 'react';
import { GetCarsLayoutProps } from './types';
import { CarsCardApiHandling } from '../../../atoms/CarsCardApiHandling'; 
import { FeaturedCarsCard } from '../../../atoms/FeaturedCarsCard'; 

export const GetCarsLayout: React.FC<GetCarsLayoutProps> = ({
    title,
    managedBy 
}) => {
  const itemsPerPage = 8; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page state

  return (
    <section className='max-w-screen-xl mx-auto px-4 lg:px-8 md:mb-4'>
      <h1 className='text-2xl md:text-3xl text-center text-charcoal-gray font-semibold mt-4 mb-6'>
        {title}
      </h1>
      
      <section className='p-4  rounded-lg bg-slate-100'>
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:px-8 xxl:grid-cols-4'>
          <CarsCardApiHandling managedBy={managedBy}>
            {(sellCarsData) => {
              if (!sellCarsData || sellCarsData.length === 0) {
                return <div className="text-center text-gray-500">No cars available.</div>;
              }

              // Pagination logic
              const startIndex = (currentPage - 1) * itemsPerPage;
              const endIndex = startIndex + itemsPerPage;
              const currentItems = sellCarsData.slice(startIndex, endIndex);

              return (
                <>
                  {currentItems.map((data, index) => (
                    <FeaturedCarsCard
                      key={index}
                      carImage={data.images ? data.images[0] : ""}
                      carMake={data.make}
                      carModel={data.model}
                      carPrice={managedBy.includes("Brand") ? `${data.startingPrice} - ${data.maxPrice}` : data.price}
                      carCity={data.location}
                      _id={data._id}
                    />
                  ))}
                </>
              );
            }}
          </CarsCardApiHandling>
        </div>

        {/* Pagination controls */}
        <CarsCardApiHandling managedBy={managedBy}>
          {(sellCarsData) => {
            const totalItems = sellCarsData.length;
            const totalPages = Math.ceil(totalItems / itemsPerPage);

            return (
              <div className="flex justify-center items-center mt-6 gap-2">
                <button
                  className={`bg-regal-red text-white py-2 px-4 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      className={`py-2 px-3 rounded ${currentPage === index + 1 ? 'bg-regal-red text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button
                  className={`bg-regal-red text-white py-2 px-4 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'}`}
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            );
          }}
        </CarsCardApiHandling>
      </section>
    </section>
  );
}
