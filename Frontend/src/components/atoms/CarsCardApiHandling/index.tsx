// CarsCardApiHandling.tsx
import React, { useEffect, useState } from "react";
import { UsedCarsForSale, UsedCarsForSaleResponse } from "../../apis/UsedCarsForSale";

export interface CarData {
  images: Array<string>;
  make: string;
  model: string;
  price: string;
  startingPrice: string;
  maxPrice: string;
  location: string;
}

interface CarsCardApiHandlingProps {
  managedBy: string;
  children: (data: CarData[]) => React.ReactNode;
}

export const CarsCardApiHandling: React.FC<CarsCardApiHandlingProps> = ({ managedBy, children }) => {
  const [carData, setCarData] = useState<CarData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: UsedCarsForSaleResponse = await UsedCarsForSale(
        managedBy.includes("Brand") ? "newcars" : managedBy.includes("Used") ? "usedcars" : "bankcars"
      );
      if (!response.error) {
        setCarData(response.sellCarsData); // Set the formatted car data
      } else {
        console.error(response.error);
      }
    };
    fetchData();
  }, [managedBy]);

  return <>{children(carData)}</>;
};
