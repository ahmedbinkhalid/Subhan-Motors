import React, { useEffect, useState } from "react";
import { MyAdsCard } from "../../components/molecules/MyAddCard";
import { myListedAds } from "../../components/apis/MyAds";
import { CarData } from "../../components/molecules/FeaturedCardsLayout";
import { DeleteAdd } from "../../components/apis/DeleteAdd";

export const MyAds: React.FC = () => {
  const [carData, setCarData] = useState<CarData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAds = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("User not authenticated");
        return;
      }
      const response = await myListedAds(token);
      console.log(response);
      if (response.error) {
        setError(response.error);
      } else {
        setCarData(response.sellCarsData);
      }
    };

    fetchAds();
  }, []);

  const handleRemove = async (id: string) => {
    try {
      await DeleteAdd(id);
    } catch (error) {
      console.error("Failed to delete Add:", error);
    }
  };

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 md:px-3 xs:py-6 px-[6px] py-3 bg-gray-50 rounded-md">
      {error ? (
        <p className="text-regal-red">{error}</p>
      ) : carData.length === 0 ? (
        <p className="md:text-xl text-lg text-center text-regal-red col-span-full font-sans font-semibold">
          Currently No Car Ad in the List
        </p>
      ) : (
        carData.map((car, index) => (
          <MyAdsCard
            key={index}
            imageUrl={car.images[0] || "https://via.placeholder.com/150"}
            make={car.make}
            model={car.model}
            price={car.price}
            city={car.location}
            _id = {car._id}
            onRemove={() => {
              handleRemove(car._id);
            }}
          />
        ))
      )}
    </section>
  );
};
