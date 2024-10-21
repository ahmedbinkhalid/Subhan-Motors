// FeaturedCarsCardLayout.tsx
import React, { useState, useEffect } from "react";
import { FeaturedCarsCard } from "../../atoms/FeaturedCarsCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FeaturedCardLayoutProps } from "./types";
import {
  UsedCarsForSale,
  UsedCarsForSaleResponse,
} from "../../api/UsedCarsForSale";

// Define the type for car data
export interface CarData {
  images: Array<string>;
  make: string;
  model: string;
  price: string;
  location: string;
}

export const FeaturedCarsCardLayout: React.FC<FeaturedCardLayoutProps> = ({
  managedBy,
  viewAll,
}) => {
  const [cardsPerPage, setCardsPerPage] = useState(4); // Default for extra large screens
  const [sellCarsData, setSellCarsData] = useState<CarData[]>([]); // Use CarData[] type
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the first visible card

  // Fetch the cars data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const response: UsedCarsForSaleResponse = await UsedCarsForSale();
      if (!response.error) {
        setSellCarsData(response.sellCarsData); // Set the formatted car data
      } else {
        console.error(response.error);
      }
    };
    fetchData();
  }, []);

  const totalCards = sellCarsData.length;

  // Update cardsPerPage based on window width
  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;

      if (width >= 1440) {
        setCardsPerPage(4); // Extra large screens (e.g., desktops 1440px+)
      } else if (width >= 1024) {
        setCardsPerPage(3); // Large screens (desktop)
      } else if (width >= 768) {
        setCardsPerPage(2); // Tablets
      } else {
        setCardsPerPage(1); // Mobile screens
      }
    };

    // Initial call
    updateCardsPerPage();

    // Listen for window resize
    window.addEventListener("resize", updateCardsPerPage);

    // Clean up the event listener
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  // Logic to handle right button (next slide by one card)
  const handleNext = () => {
    if (currentIndex + cardsPerPage < totalCards) {
      setCurrentIndex(currentIndex + 1); // Move to the next card
    }
  };

  // Logic to handle left button (previous slide by one card)
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // Move to the previous card
    }
  };

  // Slice the data based on the current index to show only a subset of cards
  const visibleCards = sellCarsData.slice(
    currentIndex,
    currentIndex + cardsPerPage > totalCards
      ? totalCards
      : currentIndex + cardsPerPage
    // ok
  );

  return (
    <section className="relative flex items-center justify-center gap-5 my-4 flex-col w-full bg-slate-50 rounded-lg pt-8 pb-16">
      <div className="flex md:flex-row flex-col justify-between font-sans w-full md:px-16 max-lg:self-center max-md:gap-2 max-md:justify-center max-md:items-center py-2">
        <h1 className="lg:text-xl text-lg text-charcoal-gray font-bold">
          {managedBy}
        </h1>
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
          console.log("Rendering Card Data:", data); // Log each card data
          return (
            <FeaturedCarsCard
              key={index}
              carImage={data.images.length > 0 ? data.images[0] : ""} // Conditional rendering
              carMake={data.make}
              carModel={data.model}
              carPrice={data.price}
              carCity={data.location}
            />
          );
        })}
      </div>

      {currentIndex + cardsPerPage < totalCards && (
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
