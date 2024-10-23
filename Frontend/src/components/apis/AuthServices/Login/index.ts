interface LoginResponse {
    token: string;
    error?: string;
  }

  export const login = async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Read the response body once and store it
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error during login: ", error);
      return { token: "", error: "An error occurred during login." };
    }
  };
