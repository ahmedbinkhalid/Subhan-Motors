export interface Message {
    subject: string;
    phoneNumber: string;
    email: string;
    onView: (row: Message) => void; 
    onDelete: (row: Message) => void;
}
