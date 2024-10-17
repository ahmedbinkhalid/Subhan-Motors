export interface formCreation {
    mainHeading : string;
    mainData : string;
    lastText : string;
    btnText : string;
    openModal: (formType: "login" | "signup" | "forgotPassword" | "newPassword") => void; 
} 
