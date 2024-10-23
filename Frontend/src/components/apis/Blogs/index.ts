import { blogsCardsData, BlogsDataResponse } from "./types";

export const Blogs = async (): Promise<BlogsDataResponse> => {
    try {
        const response = await fetch("http://localhost:5000/api/blogs", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch Blogs");
        }
        
        const data = await response.json();
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedData: blogsCardsData[] = data.map((item : any) => ({
            images: item.images,
            author: item.author,
            title: item.title,
            content: item.content,
            timeAgo: item.timeAgo,
        }));

        // console.log(formattedData);
        return {blogsData : formattedData }; // Return the correctly formatted data
    } catch (error) {
        console.error("Error during fetching used Blogs:", error);
        return {blogsData : [], error: "An error occurred during fetching Blogs." };
    }
};
