interface SignUpResponse {
    error?: string;
  }

  export const signup = async (fullname: string, email: string, password: string): Promise<SignUpResponse> => {
    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: fullname, email, password, confirmpassword: password, role: "User" }),
      });
  
      return await response.json();
    } catch (error) {
      console.error("Error during signup: ", error);
      return { error: "An error occurred during signup." };
    }
  };
  
  