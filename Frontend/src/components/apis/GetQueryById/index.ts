import { ViewDetailedQueryProps } from "../../../pages/ViewDetailedQuery/types";

export const  GetQueryById = async (id: string): Promise<ViewDetailedQueryProps> => {
    try {
      const response = await fetch(`http://localhost:5000/api/query/${id}`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to Fetch Query By ID');
      }

      const data = await response.json();
      return data as ViewDetailedQueryProps;
  
    } catch (error) {
      console.error('Error while Fetching Query By ID:', error);
      throw new Error('Failed to Fetch Query By ID');
    }
};
