export interface ButtonProps {
    btnTitle: string;
    onClick?: () => void;
    bgColor: string;
    hoverBgColor?: string;
    type?: "submit" | "reset" | "button"; // Specify the allowed types here
  }
  