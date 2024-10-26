import React from 'react';
import { BlogCardsData } from '../../components/molecules/BlogCardLayout/constants';
import { BlogCard } from '../../components/atoms/BlogCard';

export const Blogs: React.FC = () => {
  return (
    <React.Fragment>

      <div className="bg-[#E9E9E9] py-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12 gap-8 md:px-12 px-8 rounded-lg">
        {BlogCardsData.map((data, index) => (
          <div
            key={index}
            className={`${
              index === BlogCardsData.length - 1 && BlogCardsData.length % 3 === 1
                ? 'lg:col-start-2 md:col-start-1'
                : ''
            }`}
          >
            <BlogCard
              blogImage={data.blogImage}
              blogTitle={data.blogTitle}
              blogDescription={data.blogDescription}
              timeAgo={data.timeAgo}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
