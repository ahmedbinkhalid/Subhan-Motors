export interface CarFormData {
    sellerInfo : {
      sellerName: string,
      mobileNumber: string,
    };
    images : string[];
    make: string;
    model: string;
    year: string;
    status : string;
    price: string;
    mileage: string;
    condition: string;
    transmission: string;
    engineType: string;
    engineCapacity: string;
    color: string;
    location: string;
    description: string;
  }