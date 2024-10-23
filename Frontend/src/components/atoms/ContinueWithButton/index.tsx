// import React from "react";
// import { ContinueWithProps } from "./types";
// import { googleLogin } from "../../services/AuthService"; // Import the googleLogin function

// export const ContinueWithButton: React.FC<ContinueWithProps> = ({
//   icon,
//   btnLabel,
// }) => {
//   const handleGoogleLogin = async () => {
//     const response = await googleLogin();
//     if (response.token) {
//       // Redirect to the home page after successful login
//       window.location.href = "http://localhost:5000/api/auth/google"; // Change this to your actual home page route
//     } else {
//       // Handle error (show notification or alert)
//       console.error(response.error);
//       console.log("error 1");
//     }
//   };

//   return (
//     <button
//       className={`mx-0 flex p-2 ${
//         btnLabel.includes("Facebook") ? "bg-[#4267B2] text-white" : "bg-white"
//       } border-[0.5px] border-[#37474F] rounded-lg w-full h-full items-center justify-center gap-6`}
//       onClick={handleGoogleLogin} // Trigger Google login
//     >
//       {icon}
//       <p className="text-base font-sans font-semibold"> {btnLabel}</p>
//     </button>
//   );
// };import React from "react";
import { ContinueWithProps } from "./types";
import { googleLogin } from "../../apis/AuthServices/GoogleLogin";

export const ContinueWithButton: React.FC<ContinueWithProps> = ({
  icon,
  btnLabel,
}) => {
  const handleGoogleLogin = async () => {
    try {
      const response = await googleLogin();
      console.log(response); // Log the response to the console
    } catch (error) {
      console.error("Login error: ", error); // Log any errors to the console
    }
  };

  return (
    <button
      className={`mx-0 flex p-2 ${
        btnLabel.includes("Facebook") ? "bg-[#4267B2] text-white" : "bg-white"
      } border-[0.5px] border-[#37474F] rounded-lg w-full h-full items-center justify-center gap-6`}
      onClick={handleGoogleLogin}
    >
      {icon}
      <p className="text-base font-sans font-semibold"> {btnLabel}</p>
    </button>
  );
};