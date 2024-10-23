interface LoginResponse {
    token: string;
    error?: string;
  }

export const googleLogin = async (): Promise<LoginResponse> => {
    try {
      window.location.href = 'http://localhost:5000/api/auth/google';
      const response = await fetch("http://localhost:5000/api/auth/google", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      if (response.ok) {
        return data;
      }
  
      // Store the token in localStorage
      // if (data.token) {
      //   localStorage.setItem('token', data.token);  // Save token to localStorage
      //   return { token: data.token };
      // }
  
      // If there's no token, handle the error
      return { token: "", error: data.error || "Login failed." };
    } catch (error) {
      console.error("Error during Google login: ", error);
      return { token: "", error: "An error occurred during Google login." };
    }
  };