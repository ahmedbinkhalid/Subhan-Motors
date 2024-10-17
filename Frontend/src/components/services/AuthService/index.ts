// src/services/authService.ts

interface LoginResponse {
  token: string;
  error?: string;
}

interface SignUpResponse {
  error?: string;
}

interface ForgotPasswordResponse {
  message?: string;
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

    return await response.json();
  } catch (error) {
    console.error("Error during login: ", error);
    return { token: "", error: "An error occurred during login." };
  }
};

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

// Add the forgotPassword function
export const forgotPassword = async (email: string): Promise<ForgotPasswordResponse> => {
  try {
    const response = await fetch("http://localhost:5000/api/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    return await response.json();
  } catch (error) {
    console.error("Error during forgot password: ", error);
    return { error: "An error occurred during forgot password." };
  }
};
