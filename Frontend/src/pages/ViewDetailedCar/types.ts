export interface CarDetailProps {
    owner: string;
    PhoneNumber: string;
    make: string;
    model: string;
    year: string;
    startingPrice ?: string;
    maxPrice ?: string;
    releasedDate ?: string;
    availableColors ?: string[];
    price: string;
    mileage: string;
    condition: string;
    transmission: string;
    engineType: string;
    engineCapacity: string;
    color: string;
    location: string;
    description: string;
    images: string[];
    sellerInfo: string;
    dateAdded: Date;
    status: string;
    _id : string;
  }