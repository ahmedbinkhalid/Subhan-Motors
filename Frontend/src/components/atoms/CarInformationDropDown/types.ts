export interface CarInformationDropDownProps {
    label: string;
    name: string;
    options: string[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  