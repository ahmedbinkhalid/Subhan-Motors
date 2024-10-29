export interface ContactContextType {
    sellerInfo: {
      sellerName: string;
      mobileNumber: string;
    };
    setSellerInfo: React.Dispatch<React.SetStateAction<{
      sellerName: string;
      mobileNumber: string;
    }>>;
  }