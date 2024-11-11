/* eslint-disable @typescript-eslint/no-explicit-any */
// src/contexts/SearchContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextType {
  searchKey: string;
  setSearchKey: React.Dispatch<React.SetStateAction<string>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchResults: any[]; // Adjust type as needed based on your data
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>;
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]); // Default to empty array

  return (
    <SearchContext.Provider value={{ searchKey, setSearchKey, searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook for using the SearchContext
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
