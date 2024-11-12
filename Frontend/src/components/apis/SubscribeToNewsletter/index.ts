// src/api/newsletterApi.ts

export const subscribeToNewsletter = async (email: string) => {
    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to subscribe to the newsletter");
      }
  
      const data = await response.json();
      return data.message; // Return success message if needed
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      throw error;
    }
  };
  