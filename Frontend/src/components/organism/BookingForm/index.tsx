/* eslint-disable @typescript-eslint/no-unused-vars */
// components/BookingForm.tsx

import React, { useState } from 'react';
import { CarInformationInput } from '../../atoms/CarInformationInput';
import CarInformationDropDown from '../../atoms/CarInformationDropDown';
import { CarInformationDescription } from '../../atoms/CarInformationDescription';
import { Button } from '../../atoms/Button';
import { PhoneNumber } from '../../atoms/PhoneNumber';
import { postQuery } from '../../apis/Booking';

export const BookingForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [engineCapacity, setEngineCapacity] = useState('');
  const [transmission, setTransmission] = useState('');
  const [color, setColor] = useState('');
  const [fromYear, setFromYear] = useState('');
  const [toYear, setToYear] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const transmissionOptions = ['Automatic', 'Manual'];
  const colorOptions = ['Red', 'Blue', 'Black', 'White', 'Silver'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await postQuery({
        title,
        content,
        minPrice,
        maxPrice,
        phoneNumber,
        make,
        model,
        enginecapacity: engineCapacity,
        transmission,
        color,
        fromYear,
        toYear,
      });

      setSuccessMessage(result.message);
      setErrorMessage('');
      setTitle('');
      setContent('');
      setMinPrice('');
      setMaxPrice('');
      setPhoneNumber('');
      setMake('');
      setModel('');
      setEngineCapacity('');
      setTransmission('');
      setColor('');
      setFromYear('');
      setToYear('');
    } catch (error) {
      setErrorMessage('Error submitting the form. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <section className="max-w-6xl mx-auto p-4 my-2">
      <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
      <div className="space-y-4">
      <CarInformationInput
          id_name="title"
          label="Title"
          value={title}
          placeHolder="Enter title for your booking"
          onChange={(e) => setTitle(e.target.value)}
        />
<CarInformationInput
          id_name="make"
          label="Make"
          value={make}
          placeHolder="Enter car make (e.g., Toyota)"
          onChange={(e) => setMake(e.target.value)}
        />
 <CarInformationDropDown
          label="Transmission"
          name="transmission"
          options={transmissionOptions}
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
        />

        <CarInformationInput
          id_name="minPrice"
          label="Min Price"
          value={minPrice}
          placeHolder="Enter minimum price"
          onChange={(e) => setMinPrice(e.target.value)}
        />

<CarInformationInput
          id_name="fromYear"
          label="From Year"
          value={fromYear}
          placeHolder="Enter starting year"
          onChange={(e) => setFromYear(e.target.value)}
        />
         <CarInformationDropDown
          label="Color"
          name="color"
          options={colorOptions}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
 </div>

 <div className="space-y-4">
 <PhoneNumber
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <CarInformationInput
          id_name="model"
          label="Model"
          value={model}
          placeHolder="Enter car model (e.g., Corolla)"
          onChange={(e) => setModel(e.target.value)}
        />

        <CarInformationInput
          id_name="engineCapacity"
          label="Engine Capacity"
          value={engineCapacity}
          placeHolder="Enter engine capacity (e.g., 1600cc)"
          onChange={(e) => setEngineCapacity(e.target.value)}
        />

<CarInformationInput
          id_name="maxPrice"
          label="Max Price"
          value={maxPrice}
          placeHolder="Enter maximum price"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <CarInformationInput
          id_name="toYear"
          label="To Year"
          value={toYear}
          placeHolder="Enter ending year"
          onChange={(e) => setToYear(e.target.value)}
        />

<CarInformationDescription
          id_name="content"
          label="Content"
          value={content}
          placeHolder="Enter a description of your query"
          onChange={(e) => setContent(e.target.value)}
        />

        </div>


        <div className="sm:col-span-2 text-center mt-4">
          <Button type="submit" bgColor="bg-regal-red" hoverBgColor="bg-red-700" btnTitle="Submit Query" />
        </div>
      </form>

      {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
      {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
    </section>
  );
};
