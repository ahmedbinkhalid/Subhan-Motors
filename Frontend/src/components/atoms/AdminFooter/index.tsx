import React from 'react'

export const AdminFooter : React.FC = () => {
  return (
    <div className='px-6 py-3 bg-slate-50 border-t-[2px] mb-2'>
 <p className="mb-3 md:mb-0 text-center">
            &copy;
            <a
              href="https://freewebsitecode.com"
              className="text-regal-red border-b border-regal-red font-semibold"
            >
              subhanmotors.com.pk
            </a>
            , All Rights Reserved. Designed by 
            <a
              href="https://portfolio.tenzsoft.com/quote/"
              className="text-regal-red border-b border-regal-red mx-2 font-semibold"
            >
              tenzSoft
            </a>
          </p>
    </div>
   
  )
}
