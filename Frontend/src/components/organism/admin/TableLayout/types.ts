export interface TableRow {
  title?: string;
  subject?: string;
  phoneNumber: string;
  email: string;
  onView: (row: TableRow) => void;
  onDelete: (row: TableRow) => void;
}

export interface TableLayoutProps {
  title: string;
  columns: string[];
  data: TableRow[];
}
