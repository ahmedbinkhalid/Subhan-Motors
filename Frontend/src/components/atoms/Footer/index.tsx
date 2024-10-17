import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaAngleRight } from "react-icons/fa";

import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div className="text-gray-300 pt-5 mt-5 font-sans px-8 bg-gradient-to-r from-black via-red-950 to-gray-950 ...">
      <div className="container mx-auto py-5 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Address Section */}
          <div className="font-medium">
            <h4 className="text-white mb-4 md:text-2xl text-xl font-medium">
              Address
            </h4>
            <p className="mb-2 flex items-center gap-3">
              <FaMapMarkerAlt /> Location, City, Country
            </p>
            <p className="mb-2 flex items-center gap-3">
              <FaPhoneAlt /> +012 345 67890
            </p>
            <p className="mb-2 flex items-center gap-3">
              <FaEnvelope /> info@example.com
            </p>
            <div className="flex space-x-2 pt-2 my-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-regal-red rounded-full border-[0.5px] border-white p-2 hover:border-regal-red"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-regal-red rounded-full border-[0.5px] border-white p-2 hover:border-regal-red"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-regal-red rounded-full border-[0.5px] border-white p-2 hover:border-regal-red"
              >
                <FaYoutube />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-regal-red rounded-full border-[0.5px] border-white p-2 hover:border-regal-red"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="font-medium">
            <h4 className="text-white mb-4 md:text-2xl text-xl">
              Opening Hours
            </h4>
            <h6 className="text-gray-300">Monday - Friday:</h6>
            <p className="mb-4">09.00 AM - 09.00 PM</p>
            <h6 className="text-gray-300">Saturday - Sunday:</h6>
            <p>09.00 AM - 12.00 PM</p>
          </div>

          {/* Services Section */}
          <div className="font-medium">
            <h4 className="text-white mb-4 md:text-2xl text-xl font-medium">
              Services
            </h4>
            <ul>
              <li className="flex gap-[2px] items-center">
                <FaAngleRight size={20} />
                <Link
                  to="/diagnostic-test"
                  className="text-gray-300 hover:text-regal-red"
                >
                  Diagnostic Test
                </Link>
              </li>
              <li className="flex gap-[2px] items-center">
                <FaAngleRight size={20} />
                <Link
                  to="/engine-servicing"
                  className="text-gray-300 hover:text-regal-red"
                >
                  Engine Servicing
                </Link>
              </li>
              <li className="flex gap-[2px] items-center">
                <FaAngleRight size={20} />
                <Link
                  to="/tires-replacement"
                  className="text-gray-300 hover:text-regal-red"
                >
                  Tires Replacement
                </Link>
              </li>
              <li className="flex gap-[2px] items-center">
                <FaAngleRight size={20} />
                <Link
                  to="/oil-changing"
                  className="text-gray-300 hover:text-regal-red"
                >
                  Oil Changing
                </Link>
              </li>
              <li className="flex gap-[2px] items-center">
                <FaAngleRight size={20} />
                <Link
                  to="/vacuum-cleaning"
                  className="text-gray-300 hover:text-regal-red"
                >
                  Vacuum Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-white mb-4 md:text-2xl text-xl font-medium">
              Newsletter
            </h4>
            <p className="font-medium">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>
            <div className="relative mt-4">
              <input
                type="text"
                className="w-full py-3 pl-4 pr-16 text-gray-900 placeholder-gray-500 focus:outline-none rounded-lg"
                placeholder="Your email"
              />
              <button className="absolute right-0 top-1 mr-2 px-4 py-2 bg-regal-red hover:bg-red-600 text-white rounded-md font-semibold">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 py-7">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center font-medium">
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
          <div className="flex space-x-4 font-medium">
            <Link to="/" className="text-gray-300 hover:text-regal-red">
              Home
            </Link>
            <Link to="/cookies" className="text-gray-300 hover:text-regal-red">
              Cookies
            </Link>
            <Link to="/help" className="text-gray-300 hover:text-regal-red">
              Help
            </Link>
            <Link to="/faqs" className="text-gray-300 hover:text-regal-red">
              Hello
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
