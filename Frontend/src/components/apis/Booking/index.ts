// apis/Booking.ts
import { QueryData } from "./types";

const token = localStorage.getItem("token");

export const postQuery = async (data: QueryData): Promise<{ message: string }> => {
  try {
    const response = await fetch('https://test-backend-1xtc.onrender.com/api/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,  // Add the Bearer token here
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Failed to submit query');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error posting query:", error);
    throw error; 
  }
};
