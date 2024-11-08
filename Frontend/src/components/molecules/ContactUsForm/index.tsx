/* eslint-disable @typescript-eslint/no-unused-vars */
// components/ContactUsForm.tsx

import React, { useState } from 'react';
import { FullnameInput } from '../../atoms/FullnameInput';
import { SignInEmailInput } from '../../atoms/SignInEmailInput';
import CarInformationDropDown from '../../atoms/CarInformationDropDown';
import { messageSubjectList } from './constants';
import { CarInformationDescription } from '../../atoms/CarInformationDescription';
import { Button } from '../../atoms/Button';
import { postContact } from '../../apis/PostContact';
import { AddressInfo } from '../../atoms/AddressInfo';
import { PhoneNumber } from '../../atoms/PhoneNumber';

export const ContactUsForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [messageSubject, setMessageSubject] = useState('');
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await postContact({
        name: fullName,
        email,
        phoneNumber,
        subject: messageSubject,
        message,
      });
      setSuccessMessage(result.message);
      setErrorMessage('');
  
      // Clear form fields after successful submission
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setMessageSubject('');
      setMessage('');
    } catch (error) {
      setErrorMessage('There was an issue submitting the form. Please try again.');
      setSuccessMessage('');
    }
  };
  

  return (
    <section className='grid md:grid-cols-2 lg:gap-24 gap-12'>
      <div className='bg-slate-50 py-8 px-6 max-w-xl rounded-md'>
        <h1 className='text-charcoal-gray md:text-2xl text-xl font-sans font-semibold mb-3'>Your Details</h1>

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <FullnameInput name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <SignInEmailInput name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <PhoneNumber name="phoneNumber" value={phoneNumber} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setPhoneNumber(e.target.value)} />
          <CarInformationDropDown
            label="Message Subject"
            name="messageSubject"
            options={messageSubjectList}
            value={messageSubject}
            onChange={(e) => setMessageSubject(e.target.value)}
          />
          <CarInformationDescription
            id_name="message"
            label="Message"
            value={message}
            placeHolder="Enter your Message Here"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div>
            <Button type="submit" bgColor='bg-regal-red' hoverBgColor='bg-red-700' btnTitle="Send" />
          </div>
        </form>
        {errorMessage && <p className="text-regal-red">{errorMessage}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}
      </div>
      <AddressInfo />
    </section>
  );
};
