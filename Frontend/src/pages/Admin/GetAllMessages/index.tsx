// src/pages/admin/GetAllMessages.tsx
import React, { useEffect, useState } from "react";
import { TableLayout } from "../../../components/organism/admin/TableLayout";
import { getMessages } from "../../../components/apis/GetMessages";
import { Message } from "./types";
import { TableRow } from "../../../components/organism/admin/TableLayout/types";
import { useNavigate } from "react-router-dom";

export const GetAllMessages: React.FC = () => {
  const columns = [
    "#",
    "Message Subject",
    "Phone Number",
    "Email",
    "Actions",
    "",
  ];
  const [data, setData] = useState<TableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const messages: Message[] = await getMessages();
        const formattedData: TableRow[] = messages.map((message: Message) => ({
          id: message._id,
          subject: message.subject,
          phoneNumber: message.phoneNumber,
          email: message.email,
          onView: () => {
            navigate(`/detailedMessages/${message._id}`);
          },
          onDelete: () => {
            console.log("Deleting message:", message);
          },
        }));

        setData(formattedData);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Failed to fetch messages");
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, [navigate]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return <TableLayout title="Get All Messages" columns={columns} data={data} />;
};
