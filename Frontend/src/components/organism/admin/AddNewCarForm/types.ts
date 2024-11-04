export interface FormProps {
    sellerInfo : {
      sellerName: string,
      mobileNumber: string,
    };
    images : string[];
    make: string;
    model: string;
    startingPrice : string;
    maxPrice : string;
    date : string;
    transmission: string;
    engineType: string;
    engineCapacity: string;
    color: string;
    description: string;
  }