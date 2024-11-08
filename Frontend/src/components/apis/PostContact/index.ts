import { ContactFormData } from "./types";

  export const postContact = async (data: ContactFormData): Promise<{ message: string; conId?: string }> => {
    try {
      const response = await fetch('http://localhost:5000/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error; 
    }
  };
  