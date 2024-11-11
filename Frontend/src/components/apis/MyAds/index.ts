import { CarData } from "../../molecules/FeaturedCardsLayout";

export interface UsedCarsForSaleResponse {
    sellCarsData: CarData[]; 
    error?: string;
}

export const myListedAds = async (token: string): Promise<UsedCarsForSaleResponse> => {
    try {
        const response = await fetch("https://test-backend-1xtc.onrender.com/api/usercars", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
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
            location: item.location,
            _id : item._id

        }));
        console.log(formattedData);
        return { sellCarsData: formattedData }; // Return the correctly formatted data
    } catch (error) {
        console.error("Error during fetching Ads Cars Data:", error);
        return { sellCarsData: [], error: "An error occurred during fetching Ads cars Data." };
    }
};
