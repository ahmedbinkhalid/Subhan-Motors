import React from 'react';
import AdUpdationForm from '../../components/molecules/AdUpdationForm';
import { useParams } from 'react-router-dom';

export const AdUpdation : React.FC = () => {
  const { id  } = useParams<{ id: string }>();
  return (
    <React.Fragment>
        <h1 className='md:text-2xl text-xl text-regal-red font-bold text-center font-sans md:py-4 py-2'> Update Your Posted Ad</h1>
        
<AdUpdationForm bgColor='regal-red' _id={id} />
    </React.Fragment>
  
  )
}

