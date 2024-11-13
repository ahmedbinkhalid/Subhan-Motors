import React, { useState, useEffect } from "react";
import { FeaturedCarsCard } from "../../atoms/FeaturedCarsCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FeaturedCardLayoutProps } from "./types";
import { CarsCardApiHandling } from "../../atoms/CarsCardApiHandling";
import { useNavigate } from "react-router-dom";

export const FeaturedCarsCardLayout: React.FC<FeaturedCardLayoutProps> = ({
  managedBy,
  viewAll,
  viewAllPath
}) => {
  const [cardsPerPage, setCardsPerPage] = useState(4); 
  const [currentIndex, setCurrentIndex] = useState(0); 
  const navigate = useNavigate();

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

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const handleNext = (totalCards: number) => {
    if (currentIndex + cardsPerPage < totalCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleViewAll = () => {
    navigate(viewAllPath); 
  };

  return (
    <CarsCardApiHandling managedBy={managedBy}>
      {(sellCarsData) => {
        const totalCards = sellCarsData.length;
        const visibleCards = sellCarsData.slice(
          currentIndex,
          currentIndex + cardsPerPage > totalCards ? totalCards : currentIndex + cardsPerPage
        );

        return (
          <section className="relative flex items-center justify-center gap-5 my-4 flex-col w-full bg-slate-50 rounded-lg pt-8 pb-16">
            {/* Updated section for mobile-centered layout */}
            <div className="flex flex-col md:flex-row justify-between items-center font-sans w-full text-center md:px-10 py-2 md:gap-0 gap-4">
              <h1 className="lg:text-xl text-lg text-charcoal-gray font-bold">
                {managedBy}
              </h1>
              <button
                className="cursor-pointer lg:text-base text-sm font-medium text-blue-variant hover:underline hover:text-charcoal-gray"
                onClick={handleViewAll} // Attach the handleViewAll function here
              >
                View All {viewAll}
              </button>
            </div>

            {currentIndex > 0 && (
              <button
                className="absolute md:left-2 left-0 bg-gray-400 hover:bg-charcoal-gray text-white p-2 rounded-full"
                onClick={handlePrevious}
              >
                <FaChevronLeft />
              </button>
            )}

            <div className="flex gap-5 overflow-hidden">
              {visibleCards.map((data, index) => (
                <FeaturedCarsCard
                  key={index}
                  carImage={data.images ? data.images[0] : ""}
                  carMake={data.make}
                  carModel={data.model}
                  carPrice={
                    managedBy.includes("Brand")
                      ? `${data.startingPrice} - ${data.maxPrice}`
                      : data.price
                  }
                  carCity={data.location}
                  _id={data._id}
                />
              ))}
            </div>

            {currentIndex + cardsPerPage < totalCards && (
              <button
                className="absolute md:right-2 right-0 bg-gray-300 hover:bg-charcoal-gray text-white p-2 rounded-full"
                onClick={() => handleNext(totalCards)}
              >
                <FaChevronRight />
              </button>
            )}
          </section>
        );
      }}
    </CarsCardApiHandling>
  );
};
