import { CarDetailProps } from "../../../pages/ViewDetailedCar/types";


export const  GetCarDetailById = async (id: string): Promise<CarDetailProps> => {
    try {
      const response = await fetch(`http://localhost:5000/api/getCarById/${id}`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to Fetch Car Detail By ID');
      }

      const data = await response.json();
      return data as CarDetailProps;
  
    } catch (error) {
      console.error('Error while Fetching Car Detail By ID:', error);
      throw new Error('Failed to Fetch Car Detail By ID');
    }
};
