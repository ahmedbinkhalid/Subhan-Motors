import React, { useEffect } from "react";
import { carDeal2 } from "../../../assets/images";
import { GiCheckMark } from "react-icons/gi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../organism/AllPagesLayout/ModalContext";
import { LoginValidator } from "../LoginValidator";
import { handleNavigation } from "../handleNavigation";
import { useSearch } from "../SearchContext";
import { fetchSearchResults } from "../../apis/FetchSearchResults";

export const SellYourCar: React.FC = () => {
  const navigate = useNavigate();
  const { openModal } = useModal();
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
        setSearchResults([]);  // Clear results if no search key
      }
    };
    // Fetch results only if searchKey is present (after search button click)
    if (searchKey) {
      fetchResults();
    }
  }, [searchKey, setSearchResults]);

  const handleCloseResults = () => {
    setSearchResults([]);  // Clear the search results when the close button is clicked
  };

  return (
    <div>
      {searchKey && searchResults.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {searchResults.map((car, index) => (
              <div
                key={index}
                className="card bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden transform hover:scale-105"
              >
                {/* Display car image if available */}
                {car.imageUrl && (
                  <img src={car.imageUrl} alt={`${car.make} ${car.model}`} className="w-full h-48 object-cover" />
                )}

                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2 text-gray-900">
                    {car.make} {car.model}
                  </h3>
                  <p className="text-gray-600 text-base mb-2">
                    <strong>Year:</strong> {car.year || 'N/A'}
                  </p>
                  <p className="text-gray-600 text-base mb-2">
                    <strong>Location:</strong> {car.location || 'N/A'}
                  </p>
                  <p className="text-gray-600 text-base mb-2">
                    <strong>Color:</strong> {car.color || 'N/A'}
                  </p>
                  <p className="text-gray-600 text-base mb-4">
                    {car.description || 'No description available'}
                  </p>
                  <p className="text-red-500 font-semibold text-lg">
                    <strong>Price:</strong> ${car.price || 'N/A'}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleCloseResults}
            className="bg-red-500 text-white p-2 rounded-md mt-4"
          >
            Close Results
          </button>
        </div>
      ) : (
        <fieldset className="grid md:grid-cols-2 grid-cols-1 xl:gap-2 p-4 border border-gray-500 rounded-md m-auto lg:mx-4">
          <legend className="text-center text-xl text-charcoal-gray font-sans font-normal">
            Sell Your Car on Subhan Motors and Get the Best Price
          </legend>
          <div className="flex flex-col p-6">
            <motion.img
              src={carDeal2}
              alt="Car Deal"
              className="object-contain h-auto w-auto"
              initial={{ y: 300, opacity: 0 }}
              animate={{ x: [null, 100, 0], y: 0, opacity: 10 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="flex flex-col font-sans justify-center items-center gap-1 md:border-l border-charcoal-gray font-bolder max-lg:pl-6 max-md:border-t max-md:pt-3">
            <h1 className="text-regal-red font-semibold text-2xl">
              Post your Ad on Subhan Motors
            </h1>
            <ul className="text-charcoal-gray md:text-lg text-base py-4">
              <li className="flex gap-3">
                <GiCheckMark className="text-regal-red mt-[5px]" />
                <span className="font-normal">
                  Dedicated Sales Expert to Sell your Car
                </span>
              </li>
              <li className="flex gap-3 font-sans">
                <GiCheckMark className="text-regal-red mt-[5px]" />
                <span className="font-normal">
                  We Bargain for you and share the Best Offer
                </span>
              </li>
              <li className="flex gap-3">
                <GiCheckMark className="text-regal-red mt-[5px]" />
                <span className="font-normal">
                  We ensure Safe & Secure Transaction
                </span>
              </li>
            </ul>

            <button
              className="text-white rounded-md px-6 py-3 hover:bg-regal-red bg-red-600 font-medium text-lg"
              onClick={() => {
                handleNavigation("/sellCar", navigate, openModal("login"), LoginValidator);
              }}
            >
              Post Ad
            </button>
          </div>
        </fieldset>
      )}
    </div>
  );
};
