// src/pages/admin/types.ts
export interface TableRow {
  id: string; // Ensure each row has a unique `id`
  title?: string;
  subject?: string;
  phoneNumber: string;
  email: string;
  onView: (row: TableRow) => void;
  onDelete: (row: TableRow) => void;
}

export interface Message {
  _id: string; // Assuming this field comes from the API response
  subject: string;
  phoneNumber: string;
  email: string;
}

export interface TableLayoutProps {
  title: string;
  columns: string[];
  data: TableRow[];
  onDeleteSuccess?: (id: string) => void; // Optional callback function after delete
}
