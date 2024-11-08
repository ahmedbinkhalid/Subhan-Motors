import React from 'react';
import { ChartsLayout } from '../../components/molecules/admin/ChartsLayout';

export const AdminHome : React.FC= () => {
  return (
    <React.Fragment>
 <h1 className='md:text-3xl text-xl font-sans font-semibold text-charcoal-gray md:my-8 my-4 text-center'>
        Statistics
      </h1>
    <ChartsLayout />
    </React.Fragment>
   

  )
}
