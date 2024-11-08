export interface CarDetailsProps {
    id : string;
    car: {
      images: string[];
      make: string;
      model: string;
      year: number;
      price: number;
      mileage: number;
      condition: string;
      transmission: string;
      engineType: string;
      engineCapacity: string;
      color: string;
      location: string;
      description: string;
      sellerInfo: string;
      phoneNumber: string;
    };
  }