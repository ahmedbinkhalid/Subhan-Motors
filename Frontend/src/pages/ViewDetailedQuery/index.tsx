/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/ViewDetailedQuery.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaCar, FaTachometerAlt, FaCogs, FaTag, FaPaintBrush, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';
import { ViewDetailedQueryProps } from './types';
import { GetQueryById } from '../../components/apis/GetQueryById';
import { DetailItem } from '../../components/atoms/DetailItem';

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
    <section className="max-w-4xl mx-auto p-8 my-10 bg-slate-100 shadow-lg hover:border-t-4 border-y-2 hover:border-t-regal-red">
      <h2 className="text-3xl font-bold text-center text-regal-red mb-10">Message Details</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 text-charcoal-gray">
        <DetailItem icon={<FaTag />} label="Title" value={message.title} />
        <DetailItem icon={<FaPhone />} label="Phone Number" value={message.phoneNumber} />
        <DetailItem icon={<FaEnvelope />} label="Email" value={message.email} />
        <DetailItem icon={<FaCar />} label="Make" value={message.make} />
        <DetailItem icon={<FaCar />} label="Model" value={message.model} />
        <DetailItem icon={<FaTachometerAlt />} label="Engine Capacity" value={message.enginecapacity} />
        <DetailItem icon={<FaCogs />} label="Transmission" value={message.transmission} />
        <DetailItem icon={<FaPaintBrush />} label="Color" value={message.color} />
        <DetailItem icon={<FaDollarSign />} label="Price Range" value={`${message.minPrice} - ${message.maxPrice}`} />
        <DetailItem icon={<FaCalendarAlt />} label="Year Range" value={`${message.fromYear} - ${message.toYear}`} />
      </div>

      {/* Content */}
      <div className="mt-10">
        <h3 className="text-2xl font-semibold text-regal-red mb-2">Content</h3>
        <p className="text-base text-charcoal-gray bg-blue-50 p-4 rounded-md shadow-inner whitespace-pre-line">{message.content}</p>
      </div>
    </section>
  );
};
