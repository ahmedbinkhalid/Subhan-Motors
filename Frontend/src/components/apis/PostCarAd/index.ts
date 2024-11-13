
import { CarFormData } from "../../molecules/CarInformationForm/types";

type PostCarAdResponse = {
  error?: string;
};

// Assuming `carData.images` is typed as `(File | string)[]`
export const postCarAd = async (carData: CarFormData, token: string): Promise<PostCarAdResponse> => {
  try {
    const imageBase64Array: string[] = [];

    // Convert each image to base64 if it's a File
    if (Array.isArray(carData.images)) {
      for (const image of carData.images) {
        if (image instanceof File) {
          // Convert File to base64
          const base64Image = await convertToBase64(image);
          imageBase64Array.push(base64Image);
        } else if (typeof image === "string") {
          // Already a base64 string
          imageBase64Array.push(image);
        } else {
          console.warn("Unexpected type in images array; skipping.");
        }
      }
    }

    // Construct the data object to send as JSON
    const dataToSend = {
      ...carData,
      images: imageBase64Array,
      sellerInfo: JSON.stringify(carData.sellerInfo) // Stringify sellerInfo if it's an object
    };

    const response = await fetch("test-backend-1xtc.onrender.com/api/addcars", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    return await response.json();
  } catch (error) {
    console.error("Error during Add Posting: ", error);
    return { error: "An error occurred during Add Posting." };
  }
};

// Helper function to convert a File to a base64 string
const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
