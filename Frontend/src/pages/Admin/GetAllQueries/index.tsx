/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/admin/GetAllQueries.tsx
import React, { useEffect, useState } from "react";
import { TableLayout } from "../../../components/organism/admin/TableLayout";
import { fetchQueries } from "../../../components/apis/fetchQueries"; // Import the fetch function
import { Query } from "./types";
import { TableRow } from "../../../components/organism/admin/TableLayout/types";
import { useNavigate } from "react-router-dom";

export const GetAllQueries: React.FC = () => {
  const columns = ["#", "Title", "Phone Number", "Email", "Actions", ""];
  const [data, setData] = useState<TableRow[]>([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const navigate = useNavigate();

  useEffect(() => {
    const loadQueries = async () => {
      try {
        const queries: Query[] = await fetchQueries();
        const formattedData: TableRow[] = queries.map((query: Query) => ({
          id: query._id,
          title: query.title,
          phoneNumber: query.phoneNumber,
          email: query.email,
          onView: () => {
            navigate(`/detailedQuery/${query._id}`);
          },
          onDelete: () => {
            console.log("Deleting query:", query);
          },
        }));

        setData(formattedData);
      } catch (err) {
        setError("Failed to fetch queries");
      } finally {
        setLoading(false);
      }
    };

    loadQueries();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    data.length > 0 ? (
      <TableLayout title="Get All Queries" columns={columns} data={data} />
    ) : (
      <div className="h-3/4 flex justify-center items-center w-full">
        <h1 className="text-center xl:text-xl text-lg text-red-500 font-semibold"> No Query Found </h1>
      </div>
    )
  )
};
