export interface newsLetterFormData {
    title: string;
    description: string;
  }
  
  export interface newsLetterFormProps {
    onSubmit: (data: newsLetterFormData) => void;
  }