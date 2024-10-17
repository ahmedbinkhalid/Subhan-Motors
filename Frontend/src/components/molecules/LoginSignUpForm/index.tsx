// import React from "react";
// import { formCreation } from "./types";
// import { continueWithData } from "../../atoms/ContinueWithButton/constants";
// import { ContinueWithButton } from "../../atoms/ContinueWithButton";
// import { FormSubmissionButton } from "../../atoms/FormSubmissionButton";
// import { PasswordInput } from "../../atoms/PasswordInput";
// import { SignInEmailInput } from "../../atoms/SignInEmailInput";
// import { FullnameInput } from "../../atoms/FullnameInput";
// import { forgotPassword, OTP } from "../../../assets/icons";
// import OTPInput from "../../atoms/OTPInput";

// export const LoginSignUpForm: React.FC<formCreation> = ({
//   modalOpen,
//   mainData,
//   lastText,
//   btnText,
//   openModal,
// }) => {
//   const pageLinkingHandler = (lastText: string) => {
//     openModal(`${lastText.includes("Login") ? "login" : lastText.includes("Sign Up") ? "signup" : lastText.includes("newPassword") ? "newPassword" : "forgotPassword"}`);
//     console.log("Button is Clicked");
//   };


//   return (
//     <form
//       action=""
//       className="relative flex flex-col justify-between items-center bg-transparent shadow-gray-900 rounded-xl w-full max-w-md 2xl:p-4 p-2 2xl:gap-5 gap-3 lg:px-16 text-base font-semibold font-sans text-gray-900"
//     >
     
//      {
//        modalOpen === "SignUp" || modalOpen === "Login" ? 
//        (
//         <>
//         <h1 className="text-3xl self-center font-bold">{modalOpen}</h1>
//         <p className="opacity-75 self-center text-2xl font-medium">{mainData}</p>
//         </>
        
//        ) : ""
//      }

//       {modalOpen === "SignUp" ? (
//         <React.Fragment>
//           <FullnameInput />
//           <SignInEmailInput />
//           <PasswordInput placeholder="Password" />
//           <PasswordInput placeholder="Confirm Password" />
//           <FormSubmissionButton 
//             data={btnText} 
//             pageLinkingHandler={pageLinkingHandler}
//           />
//           <legend className="opacity-75"> OR </legend>
//         </React.Fragment>
//       ) : modalOpen === "Login" ? (
//         <React.Fragment>
//           <SignInEmailInput />
//           <PasswordInput placeholder="Password" />
//           <FormSubmissionButton 
//             data={btnText} 
//             pageLinkingHandler={pageLinkingHandler}
//           />
//           <button 
//             className="text-red-500 cursor-pointer"
//             onClick={() => pageLinkingHandler("forgotPassword")}>
//             Forgot Password?
//           </button>
//           <legend className="opacity-75"> OR </legend>
//         </React.Fragment>
//       ) : modalOpen === "Forgot Password" ? (
//         <React.Fragment>
//           <img
//           src={forgotPassword}
//           alt="forgotPassword"
//           className="object-cover h-64"
//           />
// <h1 className="text-2xl self-center font-bold leading-none my-4">{modalOpen}</h1>
// {/* <p className="opacity-75 self-center text-lg font-medium leading-none">{mainData}</p> */}
//           <SignInEmailInput placeholder="Type your Registered email !..." />
//           <FormSubmissionButton 
//             data={btnText} 
//             pageLinkingHandler={pageLinkingHandler}
//           />
//         </React.Fragment>
//       ) : (
//       )}

//       {(modalOpen === "SignUp" || modalOpen === "Login") &&
//         continueWithData.map((objData, index) => (
//           <ContinueWithButton
//             icon={objData.icon}
//             btnLabel={objData.btnLabel}
//             key={index}
//           />
//         ))}

//       {(modalOpen === "SignUp" || modalOpen === "Login") && (
//         <button
//           className="hover:underline py-1 cursor-pointer font-bold"
//           onClick={() => pageLinkingHandler(lastText)}
//         >
//           {lastText}
//         </button>
//       )}
//     </form>
//   );
// };

// src/components/forms/LoginSignUpForm.tsx

import React from "react";
import LoginForm from "../Forms/LoginForm";
import SignUpForm from "../Forms/SignUpForm";
import { useModal } from "../../organism/AllPagesLayout/ModalContext";
import { OtpForm } from "../Forms/OtpForm";
import { ForgotPasswordForm } from "../Forms/ForgotPasswordForm";

export const LoginSignUpForm: React.FC = () => {
  const { modalOpen} = useModal();

  return (
    <div className="relative flex flex-col bg-transparent shadow-gray-900 rounded-xl w-full max-w-md 2xl:p-4 p-2 2xl:gap-5 gap-4 lg:px-16 text-base font-semibold font-sans text-charcoal-gray">
      {modalOpen === "login" && <LoginForm />}
      {modalOpen === "signup" && <SignUpForm />}
      {modalOpen === "forgotPassword" && <ForgotPasswordForm/>}
      {modalOpen === "newPassword" && <OtpForm/>}

    </div>
  );
};

