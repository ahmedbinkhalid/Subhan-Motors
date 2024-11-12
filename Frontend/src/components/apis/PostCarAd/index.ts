// // postCarAd.ts
// import { CarFormData } from "../../molecules/CarInformationForm/types";

// type PostCarAdResponse = {
//   error?: string;
// };

// export const postCarAd = async (carData: CarFormData, token: string): Promise<PostCarAdResponse> => {
//   try {
//     const formData = new FormData();

//     // Append each key-value pair from carData to formData
//     Object.entries(carData).forEach(([key, value]) => {
//       if (key === "images" && Array.isArray(value)) {
//         value.forEach((image) => formData.append("images", image));
//       } else if (key === "sellerInfo") {
//         // Stringify the sellerInfo object before appending
//         formData.append(key, JSON.stringify(value));
//       } else {
//         formData.append(key, String(value));
//       }
//     });

//     const response = await fetch("http://localhost:5000/api/addcars", {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${token}`,
//       },
//       body: formData,
//     });

//     return await response.json();
//   } catch (error) {
//     console.error("Error during Add Posting: ", error);
//     return { error: "An error occurred during Add Posting." };
//   }
// };
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

    const response = await fetch("http://localhost:5000/api/addcars", {
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
