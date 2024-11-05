// src/pages/admin/GetAllMessages.tsx
import React, { useEffect, useState } from 'react';
import { TableLayout } from '../../components/organism/admin/TableLayout';
import { getMessages } from '../../components/apis/GetMessages'; // Import the new fetch function
import { Message } from './types'; // Import the Message type
import { TableRow } from '../../components/organism/admin/TableLayout/types';

export const GetAllMessages: React.FC = () => {
    const columns = ['#', 'Message Subject', 'Phone Number', 'Email', 'Actions', ''];
    const [data, setData] = useState<TableRow[]>([]); // State to hold fetched data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state

    useEffect(() => {
        const loadMessages = async () => {
            try {
                const messages: Message[] = await getMessages(); // Fetch messages from the API
                const formattedData: TableRow[] = messages.map((message: Message) => ({
                    subject: message.subject,
                    phoneNumber: message.phoneNumber,
                    email: message.email,
                    onView: () => {
                        // Implement the view functionality
                        console.log("Viewing message:", message);
                    },
                    onDelete: () => {
                        // Implement the delete functionality
                        console.log("Deleting message:", message);
                    },
                }));
                setData(formattedData); // Set fetched data to state
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError('Failed to fetch messages'); // Handle error
            } finally {
                setLoading(false); // Set loading to false
            }
        };

        loadMessages();
    }, []); // Empty array so it runs only once

    if (loading) return <div>Loading...</div>; // Loading message
    if (error) return <div>{error}</div>; // Error message

    return <TableLayout title="Get All Messages" columns={columns} data={data} />;
};
