import { CarData } from "../../molecules/FeaturedCardsLayout";

export interface UsedCarsForSaleResponse {
    sellCarsData: CarData[]; // Ensure this is CarData[]
    error?: string;
}

export const UsedCarsForSale = async (): Promise<UsedCarsForSaleResponse> => {
    try {
        const response = await fetch("http://localhost:5000/api/usedcars", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch");
        }

        const data = await response.json();
        
        // Assuming `data` is an array of car objects, map it to CarData[]
        const formattedData: CarData[] = data.map((item) => ({
            images: item.images,
            model: item.model,
            make : item.make,
            price: item.price,
            location: item.location,
        }));

        return { sellCarsData: formattedData }; // Return the correctly formatted data
    } catch (error) {
        console.error("Error during fetching used cars:", error);
        return { sellCarsData: [], error: "An error occurred during fetching used cars." };
    }
};
