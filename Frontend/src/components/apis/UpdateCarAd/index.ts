
export const UpdateCarAd = async (
    carId: string,
    data: object,
    token: string
  ): Promise<{ message: string; error?: boolean }> => {
    try {
      const response = await fetch(`https://test-backend-1xtc.onrender.com/api/updatecar/${carId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        return { message: errorData.message, error: true };
      }
  
      const result = await response.json();
      return { message: result.message };
    } catch (error) {
      console.error("Error updating car ad:", error);
      return { message: "Error updating car ad. Please try again later.", error: true };
    }
  };
  