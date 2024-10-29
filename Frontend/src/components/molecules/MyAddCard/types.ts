export interface MyAdsCardProps {
    imageUrl: string;
    make: string;
    model: string;
    price: string;
    city: string;
    onEdit: () => void;
    onRemove: () => void;
  }
  