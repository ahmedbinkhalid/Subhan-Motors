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
    <section className='lg:max-w-5xl xl:max-w-6xl mx-auto'>
      <h1 className='md:text-3xl text-2xl text-center text-charcoal-gray font-semibold font-sans md:mt-4 md:mb-8 mt-2 mb-4'>
        {title}
      </h1>
      <section className='md:p-8 p-4 md:px-2 lg:px-4 hover:border-y-4 hover:border-regal-red rounded-lg flex flex-col bg-slate-100'>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-4 flex-grow'>
          <CarsCardApiHandling managedBy={managedBy}>
            {(sellCarsData) => {
              if (!sellCarsData || sellCarsData.length === 0) {
                return <div className="text-center text-gray-500">No cars available.</div>; // Handle empty state
              }

              // Calculate the total number of pages
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
              <div className="flex flex-wrap justify-center md:justify-end items-center mt-8 gap-2">
                <button
                  className={`bg-regal-red hover:bg-red-700 text-white py-2 px-4 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <div className="flex flex-wrap justify-center gap-1">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      className={`py-2 px-3 rounded ${currentPage === index + 1 ? 'bg-regal-red text-white' : 'bg-gray-200 text-gray-700'}`}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button
                  className={`bg-regal-red hover:bg-red-700 text-white py-2 px-4 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
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
