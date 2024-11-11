interface ForgotPasswordResponse {
    message?: string;
    error?: string;
    otpToken?: string; // Add otpToken here
  }

  
interface ResetPasswordRequest {
    otpToken: string;
    otp: string;
    newpassword: string;
    confirmpassword: string;
  }

  export const resetPassword = async (data: ResetPasswordRequest): Promise<ForgotPasswordResponse> => {
    try {
      const response = await fetch("https://test-backend-1xtc.onrender.com/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      // Check for a successful response
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error during reset password: ", error);
      return { error: "An error occurred during reset password." };
    }
  };
  