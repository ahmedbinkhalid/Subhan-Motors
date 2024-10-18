interface UsedCarsForSaleResponse {
    sellCarsData: object[]; // Assuming this is an array of car objects
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
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return { sellCarsData: data }; // Adjust based on the actual structure of your data
    } catch (error) {
        console.error("Error during getting Sell Cars Data: ", error);
        return { sellCarsData: [], error: "An error occurred during fetching used cars." };
    }
};
