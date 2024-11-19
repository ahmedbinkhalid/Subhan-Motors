import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogsCardsData } from "../../components/apis/Blogs/types";
import { GetBlogDetailedById } from "../../components/apis/blogDetailsById";

const DetailedBlog: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blogData, setBlogData] = useState<blogsCardsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (id) {
        try {
          const response: blogsCardsData = await GetBlogDetailedById(id);
          setBlogData(response);
        } catch (err) {
          console.error("Error fetching blog details:", err);
          setError("Failed to fetch blog details.");
        }
      } else {
        setError("No ID found in the URL.");
      }
    };

    fetchBlogData();
  }, [id]);

  if (error) {
    return (
      <div className="container mx-auto p-6 text-red-500 text-center">
        {error}
      </div>
    );
  }

  if (!blogData) {
    return <div className="container mx-auto p-6 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12 bg-slate-50 rounded-xl shadow-lg">
      <div className="flex justify-center mb-10">
        <div className="relative rounded-lg shadow-2xl overflow-hidden transform transition duration-500 ease-in-out hover:scale-105 w-full lg:w-2/3">
          <img
            src={blogData.images[0]}
            alt={blogData.title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="text-center space-y-6">
        <h1 className="text-lg md:text-2xl xl:text-3xl font-bold leading-tight text-charcoal-gray">
          {blogData.title}
        </h1>
        <div className="lg:text-xl text-lg text-charcoal-gray leading-relaxed mt-8 px-4 sm:px-10">
          <p>{blogData.content}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailedBlog;
