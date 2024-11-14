export interface MyAdsCardProps {
    imageUrl: string;
    make: string;
    model: string;
    price: string;
    city: string;
    _id: string;
    onRemove: (_id : string)
     => void;
  }
  