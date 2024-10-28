export interface ContactContextType {
    contactInfo: {
      sellerName: string;
      mobileNumber: string;
    };
    setContactInfo: React.Dispatch<React.SetStateAction<{
      sellerName: string;
      mobileNumber: string;
    }>>;
  }