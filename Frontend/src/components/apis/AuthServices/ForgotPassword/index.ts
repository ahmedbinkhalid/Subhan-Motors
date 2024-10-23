interface ForgotPasswordResponse {
    message?: string;
    error?: string;
    otpToken?: string; // Add otpToken here
  }

  export const forgotPassword = async (email: string): Promise<ForgotPasswordResponse> => {
    try {
      const response = await fetch("http://localhost:5000/api/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      
      // Check for a successful response
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error during forgot password: ", error);
      return { error: "An error occurred during forgot password." };
    }
  };
  