import React from 'react';
import { DNA } from 'react-loader-spinner';
import { DataLoaderTypes} from './types';

const DataLoader : React.FC <DataLoaderTypes> = ({
  loadingTitle
}) => {
  return (
    <div className="h-[70vh] flex justify-center items-center">
      <div className="flex-col">
                  <DNA
                    visible={true}
                    height="150"
                    width="230"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                  />
    
                  <p className="mt-2 2xl:text-base text-xs text-cetacean-blue">
                   {` Fetching ${loadingTitle}, Please Wait...`}
                  </p>
                </div>
                </div>
  )
}
export default DataLoader;

