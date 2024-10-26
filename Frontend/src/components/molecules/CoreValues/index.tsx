import React from "react";
import { FaRegCheckCircle, FaUserShield, FaLightbulb } from "react-icons/fa";
import { CoreValueCard } from "../../atoms/CoreValueCard";

export const CoreValues: React.FC = () => {
  return (
    <div className="bg-gray-50 md:px-12 md:py-16 p-4 rounded-lg">
      <div className="container mx-auto px-4 rounded-lg">
        <div>
          <h2 className="md:text-3xl text-2xl font-bold text-center text-charcoal-gray md:mb-10 mb-6">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <CoreValueCard
              ValueIcon={FaRegCheckCircle}
              valueTitle="Integrity"
              valueDescription=" We believe in honesty and transparency in all our interactions with customers and partners."
            />

            <CoreValueCard
              ValueIcon={FaUserShield}
              valueTitle="Customer First"
              valueDescription="Our customers are at the heart of everything we do. We strive to exceed their expectations."
            />

            <CoreValueCard
              ValueIcon={FaLightbulb}
              valueTitle="Innovation"
              valueDescription="We constantly seek out new ways to improve our services and products to better serve our customers."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
