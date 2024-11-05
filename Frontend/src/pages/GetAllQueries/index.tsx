// GetAllQueries.tsx
import React, { useEffect, useState } from 'react';
import { TableLayout } from '../../components/organism/admin/TableLayout';
import { fetchQueries } from '../../components/apis/fetchQueries'; // Import the fetch function
import { Query } from './types'; // Import the Query interface
import { TableRow } from '../../components/organism/admin/TableLayout/types';

export const GetAllQueries: React.FC = () => {
    const columns = ['#', 'Title', 'Phone Number', 'Email', 'Actions', ''];
    const [data, setData] = useState<TableRow[]>([]); // Use TableRow type for data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state

    useEffect(() => {
        const loadQueries = async () => {
            try {
                const queries: Query[] = await fetchQueries(); // Fetch queries
                // Transform the queries to match TableRow structure
                const formattedData: TableRow[] = queries.map((query) => ({
                    title: query.title,
                    phoneNumber: query.phoneNumber,
                    email: query.email,
                    onView: () => handleView(query), // Define the view handler
                    onDelete: () => handleDelete(query), // Define the delete handler
                }));
                setData(formattedData); // Set formatted data to state
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError('Failed to fetch queries'); // Handle error
            } finally {
                setLoading(false); // Set loading to false
            }
        };

        loadQueries();
    }, []);

    const handleView = (query: Query) => {
        // Implement view logic
        console.log('Viewing query:', query);
    };

    const handleDelete = (query: Query) => {
        // Implement delete logic
        console.log('Deleting query:', query);
    };

    if (loading) return <div>Loading...</div>; // Loading message
    if (error) return <div>{error}</div>; // Error message

    return <TableLayout title="Get All Queries" columns={columns} data={data} />;
};
