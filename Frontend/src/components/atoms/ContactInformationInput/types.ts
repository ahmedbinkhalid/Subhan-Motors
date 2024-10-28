// types.ts (or wherever your types are defined)
export interface ContactInformationInputProps {
    label: string;
    type: string;
    placeholder: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Add this line
}
