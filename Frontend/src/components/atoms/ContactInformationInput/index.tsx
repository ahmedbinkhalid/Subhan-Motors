import { ContactInformationInputProps } from "./types";

export const ContactInformationInput: React.FC<ContactInformationInputProps> = ({ label, type, placeholder, id, onChange }) => { // Add onChange here
  return (
      <div className={`flex items-center mb-4 gap-4 max-w-xl mx-auto ${label.includes("Name") ? "pl-6 max-xs:pl-0" : ""}`}>
          <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">{label}</label>
          <input
              type={type}
              id={id}
              className="flex-1 p-2 border border-gray-300 rounded-md outline-none"
              placeholder={placeholder}
              onChange={onChange} // Add onChange here
          />
      </div>
  );
};
