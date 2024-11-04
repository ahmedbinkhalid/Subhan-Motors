export interface AddCarFormData {
    image: File | null;
  }
  
  export interface AddCarFormProps {
    onSubmit: (data: AddCarFormData) => void;
  }