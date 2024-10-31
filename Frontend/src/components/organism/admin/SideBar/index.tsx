import React from 'react';
import { AiFillDashboard } from "react-icons/ai";
import { SideBarLinksData } from './constants';
import { SideBarLink } from '../../../atoms/admin/SideBarLink';

export const SideBar : React.FC = () => {
  return (
    <div className=" flex flex-col gap-2 bg-transparent rounded-md shadow-lg pt-4 px-1">
    <p className='flex gap-4 justify-center items-center ml-2'>
    <AiFillDashboard size={34} className='text-regal-red mt-[1px]' />
    <span className='text-xl text-blue-variant font-bold'> Dashboard Widgets </span>
    </p>
    <div className='flex flex-col gap-4 py-6 px-4'>
        {
            SideBarLinksData.map((data, index) => (
                <SideBarLink
                key={index}
                linkTitle={data.linkTitle}
                linkPath={data.linkPath}
                LinkIcon = {data.LinkIcon}
                linkOptions={data.linkOptions}
                 />
            ))
        }
    </div>
  </div>
  )
}
