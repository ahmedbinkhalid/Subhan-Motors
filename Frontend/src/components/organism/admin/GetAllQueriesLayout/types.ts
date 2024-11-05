export interface QueryData {
    title: string;
    phoneNumber: string;
    email: string; // New email field
  }
  
  export interface GetAllQueriesLayoutProps {
    data: QueryData[];
  }
  