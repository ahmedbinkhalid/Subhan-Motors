import { CarData } from "../../molecules/FeaturedCardsLayout";

export interface UsedCarsForSaleResponse {
    sellCarsData: CarData[]; // Ensure this is CarData[]
    error?: string;
}

export const UsedCarsForSale = async (apiEnd : string): Promise<UsedCarsForSaleResponse> => {
    try {
        const response = await fetch(`http://localhost:5000/api/${apiEnd}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch");
        }

        const data = await response.json();
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedData: CarData[] = data.map((item : any) => ({
            images: item.images,
            model: item.model,
            make : item.make,
            price: item.price,
            startingPrice : item.startingPrice,
            maxPrice : item.maxPrice,
            location: item.location,
        }));
        return { sellCarsData: formattedData }; // Return the correctly formatted data
    } catch (error) {
        console.error("Error during fetching used cars:", error);
        return { sellCarsData: [], error: "An error occurred during fetching used cars." };
    }
};
