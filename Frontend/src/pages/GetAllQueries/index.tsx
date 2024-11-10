/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/admin/GetAllQueries.tsx
import React, { useEffect, useState } from 'react';
import { TableLayout } from '../../components/organism/admin/TableLayout';
import { fetchQueries } from '../../components/apis/fetchQueries'; // Import the fetch function
import { Query } from './types'; // Import the Query interface
import { TableRow } from '../../components/organism/admin/TableLayout/types';
import { useNavigate } from 'react-router-dom';

export const GetAllQueries: React.FC = () => {
    const columns = ['#', 'Title', 'Phone Number', 'Email', 'Actions', ''];
    const [data, setData] = useState<TableRow[]>([]); // State to hold fetched data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state
    const navigate = useNavigate();

    useEffect(() => {
        const loadQueries = async () => {
            try {
                const queries: Query[] = await fetchQueries(); 
                const formattedData: TableRow[] = queries.map((query: Query) => ({
                    id: query._id,  // Assuming the API response has an `_id` field
                    title: query.title,
                    phoneNumber: query.phoneNumber,
                    email: query.email,
                    onView: () => {
                        // Implement the view functionality
                        navigate(`/detailedQuery/${query._id}`);
                    },
                    onDelete: () => {
                        // Implement the delete functionality
                        console.log("Deleting query:", query);
                    },
                }));
                
                setData(formattedData); // Set fetched data to state
            } catch (err) {
                setError('Failed to fetch queries'); // Handle error
            } finally {
                setLoading(false); // Set loading to false
            }
        };

        loadQueries();
    }, [navigate]); // Empty array so it runs only once

    if (loading) return <div>Loading...</div>; // Loading message
    if (error) return <div>{error}</div>; // Error message

    return <TableLayout title="Get All Queries" columns={columns} data={data} />;
};
