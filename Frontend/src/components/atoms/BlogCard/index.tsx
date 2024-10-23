import React, { useState } from "react";
import { BlogCardProps } from "./types";

export const BlogCard: React.FC<BlogCardProps> = ({
  blogImage,
  blogTitle,
  blogDescription,
  timeAgo
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  // Truncate the description if necessary
  const shortDescription =
    blogDescription.length > 100
      ? blogDescription.slice(0, 100) + "..."
      : blogDescription;

  return (
    <div className="flex flex-col bg-white shadow-md rounded-md my-1 w-full h-full">
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
          {isExpanded ? blogDescription : shortDescription}
        </p>

        <button
          onClick={toggleReadMore}
          className="hover:underline text-blue-variant font-semibold cursor-pointer hover:text-charcoal-gray"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      <p className="text-sm font-sans font-medium text-charcoal-gray my-6 mx-6">
        Posted: {timeAgo}
      </p>
    </div>
  );
};
