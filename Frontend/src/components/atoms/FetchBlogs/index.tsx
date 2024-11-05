// src/hooks/FetchBlogs.ts
import { useState, useEffect } from 'react';
import { blogsCardsData, BlogsDataResponse } from '../../apis/Blogs/types';
import { Blogs } from '../../apis/Blogs';

export const FetchBlogs = () => {
  const [blogCardsData, setBlogCardsData] = useState<blogsCardsData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: BlogsDataResponse = await Blogs();
        if (!response.error) {
          setBlogCardsData(response.blogsData);
        } else {
          setError(response.error);
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('An unexpected error occurred in Fetching Blogs');
      }
    };
    fetchData();
  }, []);

  return { blogCardsData, error };
};
