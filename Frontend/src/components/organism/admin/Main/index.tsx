import React from 'react';
import { SideBar } from '../SideBar';

type MainProps = {
  children : React.ReactNode;
} 

export const Main : React.FC <MainProps> = ({
  children
}) => {
  return (
    <section className='grid grid-cols-6 p-4'>
      <SideBar />
        <div className="col-span-5">
          {children}
        </div>
    </section>
  )
}
