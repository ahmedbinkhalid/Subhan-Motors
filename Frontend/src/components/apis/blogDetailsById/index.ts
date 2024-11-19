import { blogsCardsData } from "../Blogs/types";



export const  GetBlogDetailedById = async (id: string): Promise<blogsCardsData> => {
    try {
      const response = await fetch(`https://test-backend-1xtc.onrender.com/api/blogs/${id}`, {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to Fetch Blog Details By ID');
      }

      const data = await response.json();
      return data as blogsCardsData;
  
    } catch (error) {
      console.error('Error while Fetching Blog Details By ID:', error);
      throw new Error('Failed to Fetch Blog Details By ID');
    }
};
