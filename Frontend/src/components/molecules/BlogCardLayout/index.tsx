// BlogCardLayout.tsx
import React from 'react';
import { BlogCard } from '../../atoms/BlogCard';
import { FetchBlogs } from '../../atoms/FetchBlogs';

export const BlogCardLayout: React.FC = () => {
  const { blogCardsData, error } = FetchBlogs();

  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  return (
    <section className="relative flex my-4 flex-col w-full bg-slate-50 rounded-lg pb-16 pt-4">
      <div className="flex md:flex-row flex-col justify-between font-sans w-full md:px-16 max-lg:self-center max-md:gap-2 max-md:justify-center max-md:items-center lg:py-2">
        <h1 className="lg:text-xl text-lg text-charcoal-gray font-bold lg:py-4 py-2">Browse Our Blogs</h1>
        <p className="cursor-pointer lg:text-base text-sm font-medium lg:py-4 pb-6 text-blue-variant hover:underline hover:text-charcoal-gray">
          View All Blogs
        </p>
      </div>

      <main className="grid lg:grid-cols-2 grid-cols-1 gap-10 md:px-16 px-2">
        <div>
          {blogCardsData.slice(0, 1).map((data, index) => (
            <BlogCard
              key={index}
              blogImage={data.images ? data.images[0] : ''}
              blogTitle={data.title}
              blogDescription={data.content}
              timeAgo={data.timeAgo}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {blogCardsData.slice(1, 3).map((data, index) => (
            <BlogCard
              key={index}
              blogImage={data.images ? data.images[0] : ''}
              blogTitle={data.title}
              blogDescription={data.content}
              timeAgo={data.timeAgo}
            />
          ))}
        </div>
      </main>
    </section>
  );
};
