/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/ViewDetailedQuery.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaCar, FaTachometerAlt, FaCogs, FaTag, FaPaintBrush, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';
import { ViewDetailedQueryProps } from './types';
import { GetQueryById } from '../../components/apis/GetQueryById';

export const ViewDetailedQuery: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState<ViewDetailedQueryProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMessage = async () => {
      try {
        const fetchedMessage = await GetQueryById(id as string);
        setMessage(fetchedMessage);
      } catch (err) {
        setError('Failed to fetch message details');
      } finally {
        setLoading(false);
      }
    };
    loadMessage();
  }, [id]);

  if (loading) return <div className="text-center text-blue-700">Loading...</div>;
  if (error) return <div className="text-center text-regal-red">{error}</div>;
  if (!message) return <div className="text-center text-gray-500">No message details available</div>;

  return (
    <section className="max-w-4xl mx-auto p-8 my-10 bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-lg border-t-4 border-regal-red">
      <h2 className="text-3xl font-bold text-center text-regal-red mb-10">Message Details</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 text-charcoal-gray">
        
        {/* Title */}
        <div className="flex items-center space-x-4">
          <FaTag className="text-blue-700 text-xl" />
          <div>
            <span className="block text-sm font-medium">Title</span>
            <span className="text-lg font-semibold text-charcoal-gray">{message.title}</span>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center space-x-4">
          <FaPhone className="text-blue-700 text-xl" />
          <div>
            <span className="block text-sm font-medium">Phone Number</span>
            <span className="text-lg font-semibold text-charcoal-gray">{message.phoneNumber}</span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-blue-700 text-xl" />
          <div>
            <span className="block text-sm font-medium">Email</span>
            <span className="text-lg font-semibold text-charcoal-gray">{message.email}</span>
          </div>
        </div>

        {/* Make */}
        <div className="flex items-center space-x-4">
          <FaCar className="text-blue-700 text-xl" />
          <div>
            <span className="block text-sm font-medium">Make</span>
            <span className="text-lg font-semibold text-charcoal-gray">{message.make}</span>
          </div>
        </div>

        {/* Model */}
        <div className="flex items-center space-x-4">
          <FaCar className="text-blue-700 text-xl" />
          <div>
            <span className="block text-sm font-medium">Model</span>
            <span className="text-lg font-semibold text-charcoal-gray">{message.model}</span>
          </div>
        </div>

        {/* Engine Capacity */}
        <div className="flex items-center space-x-4">
          <FaTachometerAlt className="text-blue-700 text-xl" />
          <div>
            <span className="block text-sm font-medium">Engine Capacity</span>
            <span className="text-lg font-semibold text-charcoal-gray">{message.enginecapacity}</span>
          </div>
        </div>

        {/* Transmission */}
        <div className="flex items-center space-x-4">
          <FaCogs className="text-blue-700 text-xl" />
          <div>
            <span className="block text-sm font-medium">Transmission</span>
            <span className="text-lg font-semibold text-charcoal-gray">{message.transmission}</span>
          </div>
        </div>

        {/* Color */}
        <div className="flex items-center space-x-4">
          <FaPaintBrush className="text-blue-700 text-xl" />
          <div>
            <span className="block text-sm font-medium">Color</span>
            <span className="text-lg font-semibold text-charcoal-gray">{message.color}</span>
          </div>
        </div>

        {/* Price Range */}
        <div className="flex items-center space-x-4">
          <FaDollarSign className="text-blue-700 text-xl" />
          <div>
            <span className="block text-sm font-medium">Price Range</span>
            <span className="text-lg font-semibold text-charcoal-gray">{message.minPrice} - {message.maxPrice}</span>
          </div>
        </div>

        {/* Year Range */}
        <div className="flex items-center space-x-4">
          <FaCalendarAlt className="text-blue-700 text-xl" />
          <div>
            <span className="block text-sm font-medium">Year Range</span>
            <span className="text-lg font-semibold text-charcoal-gray">{message.fromYear} - {message.toYear}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-regal-red mb-2">Content</h3>
        <p className="text-base text-charcoal-gray bg-blue-50 p-4 rounded-md shadow-inner whitespace-pre-line">{message.content}</p>
      </div>
    </section>
  );
};
