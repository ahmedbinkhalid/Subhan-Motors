import React, { useState, useEffect } from "react";
import { UsedCarsForSale } from "../../api/UsedCarsForSale";
import { FeaturedCarsCard } from "../../atoms/FeaturedCarsCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FeaturedCardLayoutProps } from "./types";

export const FeaturedCarsCardLayout: React.FC<FeaturedCardLayoutProps> = ({
  managedBy,
  viewAll,
}) => {
  const [carsData, setCarsData] = useState<object[]>([]);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState<string | undefined>();

  // Fetch used cars data
  useEffect(() => {
    const fetchData = async () => {
      const result = await UsedCarsForSale();
      if (result.error) {
        setError(result.error);
      } else {
        setCarsData(result.sellCarsData);
        console.log(result);
      }
    };

    fetchData();
  }, []);

  // Update cardsPerPage based on window width
  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;

      if (width >= 1440) {
        setCardsPerPage(4);
      } else if (width >= 1024) {
        setCardsPerPage(3);
      } else if (width >= 768) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(1);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  // Logic to handle right button (next slide by one card)
  const handleNext = () => {
    if (currentIndex + cardsPerPage < carsData.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Logic to handle left button (previous slide by one card)
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Slice the data based on the current index to show only a subset of cards
  const visibleCards = carsData.slice(currentIndex, currentIndex + cardsPerPage);

  if (error) {
    return <div>Error: {error}</div>; // Display error if any
  }

  return (
    <section className="relative flex items-center justify-center gap-5 my-4 flex-col w-full bg-slate-50 rounded-lg pt-8 pb-16">
      <div className="flex md:flex-row flex-col justify-between font-sans w-full md:px-16 max-lg:self-center max-md:gap-2 max-md:justify-center max-md:items-center py-2">
        <h1 className="lg:text-xl text-lg text-charcoal-gray font-bold">{managedBy}</h1>
        <p className="cursor-pointer lg:text-base text-sm font-medium text-blue-variant hover:underline hover:text-charcoal-gray">
          View All {viewAll}
        </p>
      </div>

      {currentIndex > 0 && (
        <button
          className="absolute left-0 bg-gray-300 hover:bg-gray-500 text-white p-2 rounded-full"
          onClick={handlePrevious}
        >
          <FaChevronLeft />
        </button>
      )}

      <div className="flex gap-5 overflow-hidden">
        {visibleCards.map((data, index) => {
          const { images, model, price, location } = data; // Destructure the attributes
          return (
            <FeaturedCarsCard
              key={index}
              carImage={images[0]} // Use the first image
              carModel={model} // Use car model
              carPrice={price} // Use car price
              carCity={location} // Use car city as location
            />
          );
        })}
      </div>

      {currentIndex + cardsPerPage < carsData.length && (
        <button
          className="absolute right-0 bg-gray-300 hover:bg-gray-500 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          <FaChevronRight />
        </button>
      )}
    </section>
  );
};
