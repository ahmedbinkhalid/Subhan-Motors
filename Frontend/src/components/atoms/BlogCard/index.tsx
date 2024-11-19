import React from "react";
import { BlogCardProps } from "./types";
import { useNavigate } from "react-router-dom";

export const BlogCard: React.FC<BlogCardProps> = ({
  blogImage,
  blogTitle,
  blogDescription,
  timeAgo,
  _id,
}) => {
   const navigate = useNavigate();


  // Truncate the description if necessary
  const shortDescription =
    blogDescription.length > 100
      ? blogDescription.slice(0, 100) + "..."
      : blogDescription;

  const readMoreHandler = () => {
    navigate(`/detailedBlog/${_id}`);
  };
  return (
    <div className="flex flex-col bg-white shadow-md rounded-md my-1 w-full h-full transition-transform duration-300 ease-in-out transform lg:hover:scale-105 hover:shadow-lg">
      <img
        src={blogImage}
        alt="Blog Thumbnail"
        className="object-cover h-52 w-full rounded-t-md"
      />
      <div className="flex flex-col flex-grow text-center p-2 gap-2">
        <h1 className="text-base md:text-lg text-blue-variant font-bold">
          {blogTitle}
        </h1>

        <p className="text-base md:text-lg text-charcoal-gray font-medium">
          {shortDescription}
        </p>

        <button
          onClick={readMoreHandler}
          className="hover:underline text-blue-variant font-semibold cursor-pointer hover:text-charcoal-gray"
        >
          Read More
        </button>
      </div>

      <p className="text-sm font-sans font-medium text-charcoal-gray my-4 mx-6">
        Posted: {timeAgo}
      </p>
    </div>
  );
};
