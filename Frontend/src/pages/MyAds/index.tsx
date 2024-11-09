import React, { useEffect, useState } from 'react';
import { MyAdsCard } from '../../components/molecules/MyAddCard';
import { myListedAds } from '../../components/apis/MyAds'; // Adjust this path as needed
import { CarData } from '../../components/molecules/FeaturedCardsLayout';
import { DeleteAdd } from '../../components/apis/DeleteAdd';

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
      console.error('Failed to delete Add:', error);
    }
  };

  return (
    <section className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 p-8 bg-gray-50 rounded-md'>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        carData.map((car, index) => (
          <MyAdsCard 
            key={index}
            imageUrl={car.images[0] || "https://via.placeholder.com/150"} // Fallback to placeholder
            make={car.make}
            model={car.model}
            price={car.price}
            city={car.location}
            onRemove={() => {
              handleRemove(car._id);
            }}
          />
        ))
      )}
    </section>
  );
};
