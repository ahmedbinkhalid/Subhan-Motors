/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
import { subscribeToNewsletter } from "../../apis/SubscribeToNewsletter";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubscription = async () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      return;
    }

    try {
      const responseMessage = await subscribeToNewsletter(email);
      if (responseMessage.includes("already subscribed")) {
        setMessage("You have already subscribed to the newsletter.");
      } else {
        setMessage("Subscribed to the newsletter successfully!");
      }

      setEmail("");
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (error) {
      setMessage("Error subscribing to the newsletter. Please try again.");
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <div className="text-gray-300 pt-5 mt-5 font-sans px-8 bg-gradient-to-r from-black via-red-950 to-gray-950">
      <div className="max-w-6xl mx-auto py-5 px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="font-medium">
            <h4 className="text-white mb-4 md:text-2xl text-xl font-medium">
              Address
            </h4>
            <p className="mb-2 flex items-center gap-3">
              <FaMapMarkerAlt size={24} />
              Mandyala moor pindi bypass GT road0, Gujranwala, Punjab,52250
            </p>
            <p className="mb-2 flex items-center gap-3">
              <FaPhoneAlt /> +92-300-8749966
            </p>
            <p className="mb-2 flex items-center gap-3">
              <FaEnvelope /> atifsubhanmotors@gmail.com
            </p>
            <div className="flex space-x-3 pt-2 my-2">
              <a
                href="https://www.instagram.com/subhanmotors/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-regal-red rounded-full border-[0.5px] border-white p-2 hover:border-regal-red"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/subahnmotors/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-regal-red rounded-full border-[0.5px] border-white p-2 hover:border-regal-red"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.tiktok.com/@subhanmotors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-regal-red rounded-full border-[0.5px] border-white p-2 hover:border-regal-red"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="font-medium">
            <h4 className="text-white mb-4 md:text-2xl text-xl">
              Opening Hours
            </h4>
            <h6 className="text-gray-300">Monday - Friday:</h6>
            <p className="mb-4">09.00 AM - 09.00 PM</p>
            <h6 className="text-gray-300">Saturday - Sunday:</h6>
            <p>09.00 AM - 12.00 PM</p>
          </div>

          <div>
            <h4 className="text-white mb-4 md:text-2xl text-xl font-medium">
              Newsletter
            </h4>
            <p className="font-medium">
              Subscribe to Subhan Motors to get the latest updates.
            </p>
            <div className="flex md:flex-row flex-col mt-4 gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow py-3 pl-4 text-gray-900 placeholder-gray-500 focus:outline-none rounded-md"
                placeholder="example@gmail.com"
                required
              />
              <button
                onClick={handleSubscription}
                className="px-4  md:py-3 py-1 bg-regal-red hover:bg-red-600 text-white rounded-md font-semibold"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success or Error Popup */}
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg z-50">
          <p>{message}</p>
        </div>
      )}

      <div className="border-t border-gray-700 py-7">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center font-medium">
          <p className="mb-3 md:mb-0">
            &copy;
            <a
              href="https://freewebsitecode.com"
              className="text-regal-red border-b border-regal-red"
            >
              subhanmotors.com.pk
            </a>
            , All Rights Reserved. Designed by
            <a
              href="https://portfolio.tenzsoft.com/quote/"
              className="text-regal-red border-b border-regal-red mx-2"
            >
              tenzSoft
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
