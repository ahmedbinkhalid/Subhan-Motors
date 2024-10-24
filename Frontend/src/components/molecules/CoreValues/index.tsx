import React from 'react';
import { FaRegCheckCircle, FaUserShield, FaLightbulb } from 'react-icons/fa';
import { CoreValueCard } from '../../atoms/CoreValueCard';

export const CoreValues : React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 rounded-lg">
    <div className="container mx-auto px-4 rounded-lg">
      {/* New Section: Our Values */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Value 1 */}

          <CoreValueCard
          ValueIcon={FaRegCheckCircle}
          valueTitle="Integrity"
          valueDescription=" We believe in honesty and transparency in all our interactions with customers and partners."
          />

          {/* Value 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <FaUserShield className="mx-auto mb-4 w-16 h-16 text-blue-variant" />
            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do. We strive to exceed their expectations.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <FaLightbulb className="mx-auto mb-4 w-16 h-16 text-blue-variant" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We constantly seek out new ways to improve our services and products to better serve our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
