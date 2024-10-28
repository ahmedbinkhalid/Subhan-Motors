import React, { createContext, useContext, useState } from 'react';
import { ContactContextType } from './types';


const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contactInfo, setContactInfo] = useState({
    sellerName: '',
    mobileNumber: '',
  });

  return (
    <ContactContext.Provider value={{ contactInfo, setContactInfo }}>
      {children}
    </ContactContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};
