import React, { useState } from 'react';
import { FetchBlogs } from '../../components/atoms/FetchBlogs';
import { BlogCard } from '../../components/atoms/BlogCard';
import { GrBlog } from "react-icons/gr";
type GetApprovedBlogsProps = {
  title ?: string;
}
export const GetApprovedBlogs: React.FC <GetApprovedBlogsProps> = ({title}) => {
  const itemsPerPage = 8; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const { blogCardsData, error } = FetchBlogs(); // Use FetchBlogs hook

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <React.Fragment>
      <section className='lg:max-w-3xl xl:max-w-5xl mx-auto'>
      <div className='flex justify-center items-center gap-4 md:text-2xl text-xl text-charcoal-gray font-semibold font-sans xxl:mt-4 md:mb-8 mt-2 mb-4'>
      <h1 className=''>
        {!title ? "All your Blog's" : title} 
      </h1>
      <GrBlog className='text-regal-red font-bold' />
      </div>
      <section className='bg-slate-50 md:p-8 p-4 border-y-2  flex flex-col'>
        <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 flex-grow'>
          {
            blogCardsData.length === 0 ? (
              <div className="text-center text-gray-500">No blogs available.</div>
            ) : (
              blogCardsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((data, index) => (
                <BlogCard
                  key={index}
                  blogImage={data.images ? data.images[0] : ""}
                  blogTitle={data.title}
                  blogDescription={data.content}
                  timeAgo={data.timeAgo}
                />
              ))
            )
          }
        </div>

        {/* Pagination controls */}
        <div className="flex flex-wrap justify-center md:justify-end items-center mt-8 gap-2">
          <button
            className={`bg-regal-red hover:bg-red-700 text-white py-2 px-4 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <div className="flex flex-wrap justify-center gap-1">
            {Array.from({ length: Math.ceil(blogCardsData.length / itemsPerPage) }, (_, index) => (
              <button
                key={index}
                className={`py-2 px-3 rounded ${currentPage === index + 1 ? 'bg-regal-red text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            className={`bg-regal-red hover:bg-red-700 text-white py-2 px-4 rounded ${currentPage === Math.ceil(blogCardsData.length / itemsPerPage) ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(blogCardsData.length / itemsPerPage)))}
            disabled={currentPage === Math.ceil(blogCardsData.length / itemsPerPage)}
          >
            Next
          </button>
        </div>
      </section>

      </section>
    </React.Fragment>
  );
};
