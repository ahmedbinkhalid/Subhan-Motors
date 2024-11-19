import React, { useEffect } from "react";
import { FeaturedCarsCardLayout } from "../../components/molecules/FeaturedCardsLayout";
import { OfferingCardsLayout } from "../../components/molecules/OfferingCardsLayout";
import { SellYourCar } from "../../components/atoms/SellYourCar";
import { BlogCardLayout } from "../../components/molecules/BlogCardLayout";
import { TestimonialCardsLayout } from "../../components/molecules/TestimonialCardsLayout";
import { CompaniesCardsLayout } from "../../components/molecules/CompaniesCardsLayout";
import { fetchSearchResults } from "../../components/apis/FetchSearchResults";
import { useSearch } from "../../components/atoms/SearchContext";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  const { searchKey, searchResults, setSearchResults } = useSearch();

  useEffect(() => {
    const fetchResults = async () => {
      if (searchKey) {
        try {
          const results = await fetchSearchResults(searchKey);
          setSearchResults(results);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      } else {
        setSearchResults([]);
      }
    };

    fetchResults();
  }, [searchKey, setSearchResults]);

  const handleCloseResults = () => {
    setSearchResults([]);
  };

  return (
    <React.Fragment>
      {searchKey && searchResults.length > 0 ? (
        <div>
          {/* Search Results Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {searchResults.map((car, index) => (
              <Link
                to={`/viewDetailedCar/${car._id}`}
                key={index}
                className="card bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden transform hover:scale-105"
              >
                <img
                src={car.images[0] || "https://via.placeholder.com/150"}
               alt={`${car.make} ${car.model}`}
          className=" object-contain rounded-md h-48 w-full"
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">
                    {car.make} {car.model}
                  </h3>
                  <p className="text-gray-600 text-base mb-2">
                    <strong>Year:</strong> {car.year || "N/A"}
                  </p>
                  <p className="text-gray-600 text-base mb-2">
                    <strong>Location:</strong> {car.location || "N/A"}
                  </p>
                  <p className="text-gray-600 text-base mb-2">
                    <strong>Color:</strong> {car.color || "N/A"}
                  </p>
                  <p className="text-gray-600 text-base mb-4">
                    {car.description || "No description available"}
                  </p>
                  <p className="text-red-500 font-semibold text-lg">
                    <strong>Price:</strong> Rs.{car.price || "N/A"}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleCloseResults}
              className="bg-red-500 text-white p-2 rounded-md mt-4 font-sans font-semibold"
            >
              Close Results
            </button>
          </div>
        </div>
      ) : (
        // Main Home Page Content
        <>
          <SellYourCar />
          <OfferingCardsLayout />
          <FeaturedCarsCardLayout
            managedBy="Used Cars for Sale"
            viewAll="Used Cars for Sale"
            viewAllPath="/allUsedCars"
          />
          <FeaturedCarsCardLayout
            managedBy="Brand New Cars for Sale"
            viewAll="Brand New Cars for Sale"
            viewAllPath="/allNewCars"
          />
          <FeaturedCarsCardLayout
            managedBy="Imported Cars for Sale"
            viewAll="Imported  Cars for Sale"
            viewAllPath="/allBankCars"
          />
          <BlogCardLayout />
          <CompaniesCardsLayout />
          <TestimonialCardsLayout />
        </>
      )}
    </React.Fragment>
  );
};
