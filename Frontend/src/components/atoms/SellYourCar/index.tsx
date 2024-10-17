import React from "react";
import { carDeal2 } from "../../../assets/images";
import { GiCheckMark } from "react-icons/gi";

export const SellYourCar: React.FC = () => {
  return (
    <fieldset className="grid md:grid-cols-2 grid-cols-1  xl:gap-2 p-4 border border-gray-500 rounded-md m-auto lg:mx-4">
      <legend className="text-center text-xl text-charcoal-gray font-sans font-normal">
        Sell Your Car on Subhan Motors and Get the Best Price
      </legend>

      <div className="flex flex-col p-6">
        <img
          src={carDeal2}
          alt="Car Deal"
          className="object-contain h-auto w-auto"
        />
      </div>

      <div className="flex flex-col font-sans justify-center items-center gap-1 md:border-l border-charcoal-gray font-bolder max-lg:pl-6 max-md:border-t max-md:pt-3">
        <h1 className="text-regal-red font-semibold text-2xl">
          Post your Ad on Subhan Motors{" "}
        </h1>
        <ul className="text-charcoal-gray md:text-lg text-base py-4">
          <li className="flex gap-3">
            {" "}
            <GiCheckMark className="text-regal-red mt-[5px]" />{" "}
            <span className="font-normal">
              {" "}
              Dedicated Sales Expert to Sell your Car
            </span>{" "}
          </li>

          <li className="flex gap-3 font-sans">
            {" "}
            <GiCheckMark className="text-regal-red mt-[5px]" />{" "}
            <span className="font-normal">
              {" "}
              We Bargain for you and share the Best Offer{" "}
            </span>{" "}
          </li>

          <li className="flex gap-3">
            {" "}
            <GiCheckMark className=" text-regal-red mt-[5px]" />{" "}
            <span className="font-normal">
              {" "}
              We ensure Safe & Secure Transaction{" "}
            </span>{" "}
          </li>
        </ul>

        <button
          className="text-white rounded-md px-6 py-3 hover:bg-regal-red bg-red-600
            font-medium text-lg"
        >
          Sell a Car
        </button>
      </div>
    </fieldset>
  );
};
