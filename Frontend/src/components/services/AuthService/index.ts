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
  otpToken?: string; // Add otpToken here
}

interface ResetPasswordRequest {
  otpToken: string;
  otp: string;
  newpassword: string;
  confirmpassword: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "GET",
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

export const resetPassword = async (data: ResetPasswordRequest): Promise<ForgotPasswordResponse> => {
  try {
    const response = await fetch("http://localhost:5000/api/reset-password", {
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


// export const googleLogin = async (): Promise<LoginResponse> => {
//   try {
//     window.location.href = 'http://localhost:5000/api/auth/google';
//     const response = await fetch("http://localhost:5000/api/auth/google", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     // Check if the response is OK
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json();

//     // Store the token in local storage
//     if (data.token) {
//       localStorage.setItem('token', data.token);
//       return { token: data.token }; // Return the token
//     }

//     // If there's no token but we received a response, return the error
//     return { token: "", error: data.error || "Login failed." };
//   } catch (error) {
//     console.error("Error during Google login: ", error);
//     return { token: "", error: "An error occurred during Google login." };
//   }
// };


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
