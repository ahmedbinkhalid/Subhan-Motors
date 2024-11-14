/* eslint-disable @typescript-eslint/no-explicit-any */

export const updateCar = async (id : any, carData : any) => {
    const token = localStorage.getItem("token");
  try {
    const response = await fetch(`/updatecar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Ensure token is passed for authorization
      },
      body: JSON.stringify(carData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update car");
    }

    return await response.json(); 
  } catch (error) {
    console.error("Error updating car:", error);
    throw error;
  }
};
