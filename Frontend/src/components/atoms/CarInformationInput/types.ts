export interface CarInformationInputProps {
    id_name : string;
    label : string;
    value: string;
    placeHolder : string; 
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void;
  }