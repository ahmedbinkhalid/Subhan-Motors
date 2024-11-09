/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/ViewDetailedMessages.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMessageById } from '../../components/apis/getMessageById';
import { ViewDetailedMessages } from './types';
import { FaUser, FaPhone, FaEnvelope, FaTag, FaComment } from 'react-icons/fa';

export const MessagesDetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState<ViewDetailedMessages | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMessage = async () => {
      try {
        const fetchedMessage = await getMessageById(id as string);
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
        
        {/* Name */}
        <div className="flex items-center space-x-4">
          <FaUser className="text-blue-700 text-xl" />
          <div>
            <span className="block text-sm font-medium">Name</span>
            <span className="text-lg font-semibold text-charcoal-gray">{message.name}</span>
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

        {/* Subject */}
        <div className="flex items-center space-x-4">
          <FaTag className="text-blue-700 text-xl" />
          <div>
            <span className="block text-sm font-medium">Subject</span>
            <span className="text-lg font-semibold text-charcoal-gray">{message.subject}</span>
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="mt-10">
        <div className="flex items-start space-x-4">
          <FaComment className="text-blue-700 text-2xl mt-1" />
          <div>
            <h3 className="text-2xl font-semibold text-regal-red mb-2">Message</h3>
            <p className="text-base text-charcoal-gray bg-blue-50 p-4 rounded-md shadow-inner whitespace-pre-line">{message.message}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
