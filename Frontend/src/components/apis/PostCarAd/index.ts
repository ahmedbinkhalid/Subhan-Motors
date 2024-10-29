// postCarAd.ts
import { CarFormData } from "../../molecules/CarInformationForm/types";

type PostCarAdResponse = {
  error?: string;
};

export const postCarAd = async (carData: CarFormData, token: string): Promise<PostCarAdResponse> => {
  try {
    const formData = new FormData();

    // Append each key-value pair from carData to formData
    Object.entries(carData).forEach(([key, value]) => {
      if (key === "images" && Array.isArray(value)) {
        value.forEach((image) => formData.append("images", image));
      } else if (key === "sellerInfo") {
        // Stringify the sellerInfo object before appending
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, String(value));
      }
    });

    const response = await fetch("http://localhost:5000/api/addcars", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      body: formData,
    });

    return await response.json();
  } catch (error) {
    console.error("Error during Add Posting: ", error);
    return { error: "An error occurred during Add Posting." };
  }
};
