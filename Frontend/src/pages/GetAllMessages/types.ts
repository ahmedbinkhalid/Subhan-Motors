export interface Message {
    _id : string;
    subject: string;
    phoneNumber: string;
    email: string;
    onView: (row: Message) => void; 
    onDelete: (row: Message) => void;
}
