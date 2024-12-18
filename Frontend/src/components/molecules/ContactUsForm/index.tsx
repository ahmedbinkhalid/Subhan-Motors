/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { FullnameInput } from "../../atoms/FullnameInput";
import { SignInEmailInput } from "../../atoms/SignInEmailInput";
import CarInformationDropDown from "../../atoms/CarInformationDropDown";
import { messageSubjectList } from "./constants";
import { CarInformationDescription } from "../../atoms/CarInformationDescription";
import { Button } from "../../atoms/Button";
import { postContact } from "../../apis/PostContact";
import { AddressInfo } from "../../atoms/AddressInfo";
import { PhoneNumber } from "../../atoms/PhoneNumber";
import { CustomPopup } from "../../atoms/CustomPopup";

export const ContactUsForm: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [popupMessage, setPopupMessage] = useState<string>("");
  const [isPopupSuccess, setIsPopupSuccess] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postContact({
        name: fullName,
        email,
        phoneNumber,
        subject: messageSubject,
        message,
      });

      setPopupMessage("Your message has been sent successfully!");
      setIsPopupSuccess(true);
      setShowPopup(true);

      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setMessageSubject("");
      setMessage("");
    } catch (error) {
      setPopupMessage(
        "There was an issue submitting the form. Please try again."
      );
      setIsPopupSuccess(false);
      setShowPopup(true);
    }

    // Auto-close the popup after 4 seconds
    setTimeout(() => setShowPopup(false), 4000);
  };

  return (
    <section className="grid md:grid-cols-2 xl:gap-10 md:gap-8 gap-4">
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-slate-50 py-8 px-6 max-w-xl rounded-md"
        >
          <h1 className="text-charcoal-gray md:text-2xl text-xl font-sans font-semibold mb-3">
            Your Details
          </h1>
          <FullnameInput
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <SignInEmailInput
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PhoneNumber
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
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
          <div className="flex justify-center mt-3">
            <Button
              type="submit"
              bgColor="bg-regal-red"
              hoverBgColor="bg-red-700"
              btnTitle="Submit"
            />
          </div>
        </form>
      </div>

      <div>
        <AddressInfo />

        <div className="mt-8 bg-slate-50 rounded-md md:p-4 p-3">
          <h2 className="text-charcoal-gray md:text-xl text-lg font-sans font-bold md:my-6 my-4">
            Find Us Here
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d843.8315786997852!2d74.17019626964502!3d32.222379132923365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDEzJzIwLjYiTiA3NMKwMTAnMTUuMCJF!5e0!3m2!1sen!2s!4v1731495400308!5m2!1sen!2s"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md shadow-lg border-none"
          ></iframe>
        </div>
      </div>

      {/* Custom Popup */}
      {showPopup && (
        <CustomPopup
          message={popupMessage}
          isSuccess={isPopupSuccess}
          onClose={() => setShowPopup(false)}
        />
      )}
    </section>
  );
};
