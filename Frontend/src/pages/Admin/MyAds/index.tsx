import React, { useEffect, useState } from "react";
import { MyAdsCard } from "../../../components/molecules/MyAddCard";
import { myListedAds } from "../../../components/apis/MyAds";
import { CarData } from "../../../components/molecules/FeaturedCardsLayout";
import { DeleteAdd } from "../../../components/apis/DeleteAdd";
import { CustomPopup } from "../../../components/atoms/CustomPopup";
import DataLoader from "../../../components/atoms/DataLoader";

export const MyAds: React.FC = () => {
  const itemsPerPage = 6; // Number of items per page
  const [carData, setCarData] = useState<CarData[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [error, setError] = useState<string | null>(null);
  const [customPopupMessage, setCustomPopupMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchAds = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("User not authenticated");
        return;
      }
      const response = await myListedAds(token);
      setLoading(false);
      if (response.error) {
        setError(response.error);
      } else {
        setCarData(response.sellCarsData);
      }
    };

    fetchAds();
  }, []);

  const handleRemove = async (id: string) => {
    const result = await DeleteAdd(id);
    setCustomPopupMessage(result.message);
    if (result.success) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = carData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(carData.length / itemsPerPage);

  return (
    <section className="max-w-screen-lg mx-auto px-6 py-4 bg-gray-50 rounded-md">
      {customPopupMessage && (
        <CustomPopup
          message={customPopupMessage}
          isSuccess={isSuccess}
          onClose={() => setCustomPopupMessage("")}
        />
      )}

      {loading ? (
        <DataLoader loadingTitle="Listed Ad's" />
      ) : (
        <>
          {error ? (
            <p className="text-regal-red">{error}</p>
          ) : carData.length === 0 ? (
            <p className="md:text-xl text-lg text-center text-regal-red col-span-full font-sans font-semibold">
              Currently No Car Ad in the List
            </p>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
                {currentItems.map((car, index) => (
                  <MyAdsCard
                    key={index}
                    imageUrl={
                      car.images[0] || "https://via.placeholder.com/150"
                    }
                    make={car.make}
                    model={car.model}
                    price={car.price}
                    city={car.location}
                    _id={car._id}
                    onRemove={() => {
                      handleRemove(car._id);
                    }}
                  />
                ))}
              </div>

              {/* Pagination controls */}
              <div className="flex justify-center items-center mt-6 gap-2">
                <button
                  className={`bg-regal-red text-white py-2 px-4 rounded ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-red-700"
                  }`}
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  Previous
                </button>

                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      className={`py-2 px-3 rounded ${
                        currentPage === index + 1
                          ? "bg-regal-red text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>

                <button
                  className={`bg-regal-red text-white py-2 px-4 rounded ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-red-700"
                  }`}
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </>
          )}
        </>
      )}
    </section>
  );
};
