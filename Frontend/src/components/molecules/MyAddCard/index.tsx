import React, { useState } from "react";
import { MyAdsCardProps } from "./types";
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { GiBleedingEye } from "react-icons/gi";

export const MyAdsCard: React.FC<MyAdsCardProps> = ({
  imageUrl,
  make,
  model,
  price,
  city,
  _id,
  onRemove,
}) => {
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const onEditHandler = () => {
    navigate(`/adUpdation/${_id}`);
  };

  const ViewDetailedAdHandler = () => {
    navigate(`/viewDetailedCar/${_id}`);
  };

  const handleDeleteConfirmation = () => {
    setShowDeleteConfirm(false); 
    onRemove(_id);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  return (
    <div className="flex flex-col shadow-md rounded-md hover:shadow-xl">
      <img
        src={imageUrl}
        alt={`${make} ${model}`}
        className="object-fill h-56 w-auto rounded-md"
      />
      <div className="flex flex-col justify-center items-center flex-grow gap-3 py-6">
        <h2 className="md:text-xl text-lg font-bold">{`${make} ${model}`}</h2>
        <p className="font-bold text-regal-red text-xl">
          <span className="text-charcoal-gray font-semibold"> Price: </span>
          {price}
        </p>
        <p className="text-xl font-bold text-blue-variant">
          <span className="text-charcoal-gray font-semibold"> Location: </span>
          {city}
        </p>
      </div>

      <div className="flex space-x-6 self-end m-6 ">
        <button
          className="flex flex-col gap-[2px]"
          onClick={ViewDetailedAdHandler}
        >
          <GiBleedingEye
            className="text-charcoal-gray font-sans font-bold hover:text-regal-red"
            size={28}
          />
          <p className="text-center text-charcoal-gray font-medium"> View </p>
        </button>
        <button className="flex flex-col gap-[2px]" onClick={onEditHandler}>
          <MdOutlineModeEdit
            className="text-charcoal-gray font-sans font-bold hover:text-regal-red"
            size={28}
          />
          <p className="text-center text-charcoal-gray font-medium"> Edit </p>
        </button>

        <button
          className="flex flex-col gap-[2px]"
          onClick={() => setShowDeleteConfirm(true)}
        >
          <MdDeleteOutline
            className="text-regal-red font-sans font-bold hover:text-charcoal-gray"
            size={28}
          />
          <p className="text-center text-regal-red font-medium"> Delete </p>
        </button>
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
            <p className="mb-4">Are you sure you want to delete this ad?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
              >
                No
              </button>
              <button
                onClick={handleDeleteConfirmation}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

  
    </div>

    // <div className="flex flex-col items-center bg-white border rounded-md p-2 py-8 shadow-md gap-8 w-full hover:shadow-xl ">
    //   <div className="flex gap-4 items-center">
    //     <img
    //       src={imageUrl}
    //       alt={`${make} ${model}`}
    //       className=" object-cover rounded-md h-full w-40"
    //     />

    //   </div>

    //
    //   {showDeleteConfirm && (
    //     <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
    //       <div className="bg-white p-6 rounded-lg shadow-lg">
    //         <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
    //         <p className="mb-4">Are you sure you want to delete this ad?</p>
    //         <div className="flex justify-end space-x-4">
    //           <button
    //             onClick={handleCancelDelete}
    //             className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
    //           >
    //             No
    //           </button>
    //           <button
    //             onClick={handleDeleteConfirmation}
    //             className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
    //           >
    //             Yes
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   )}

    //   {customPopupMessage && (
    //     <CustomPopup
    //       message={customPopupMessage}
    //       isSuccess={isSuccess}
    //       onClose={() => setCustomPopupMessage("")}
    //     />
    //   )}
    // </div>
  );
};
