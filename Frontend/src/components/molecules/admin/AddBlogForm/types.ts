export interface BlogFormData {
    image: File[];
    title: string;
    description: string;
  }
  
  export interface BlogFormProps {
    onSubmit: (data: BlogFormData) => void;
  }