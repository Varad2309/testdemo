// src/services/authService.js
export const dummyLogin = (email, password) => {
    // Simulate a successful login with hardcoded credentials
    const dummyEmail = "test@example.com";
    const dummyPassword = "password123";
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === dummyEmail && password === dummyPassword) {
          resolve({ token: "dummyToken123" });
        } else {
          reject(new Error("Invalid email or password"));
        }
      }, 1000); // Simulate network delay
    });
  };
  