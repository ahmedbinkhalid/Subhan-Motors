export interface BlogFormData {
    image: File | null;
    title: string;
    description: string;
  }
  
  export interface BlogFormProps {
    onSubmit: (data: BlogFormData) => void;
  }