// src/components/apis/GetMessages.ts
import { ViewDetailedMessages } from "../../../pages/ViewDetailedMessages/types";

export const getMessageById = async (id: string): Promise<ViewDetailedMessages> => {
    try {
      const response = await fetch(`https://test-backend-1xtc.onrender.com/api/contact/${id}`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to Fetch Message By ID');
      }

      const data = await response.json();
      return data as ViewDetailedMessages;
  
    } catch (error) {
      console.error('Error while Fetching Message By ID:', error);
      throw new Error('Failed to Fetch Message By ID');
    }
};
