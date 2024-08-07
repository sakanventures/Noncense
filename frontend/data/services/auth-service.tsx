import { getStrapiURL } from "@/lib/utils";

interface RegisterUserProps{
    firstname: string;
    lastname: string;
    dob: Date;
    username: string;
    email: string;
    password: string;
}

interface LoginUserProps {
    identifier: string;
    password: string;
}

// const baseUrl = "http://localhost:1337";

export async function registerUserService(userData: RegisterUserProps) {
    const url = new URL("http://127.0.0.1:1337/api/auth/local/register");
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
        cache: "no-cache",
      });
  
      return response.json();
    } catch (error) {
      console.error("Registration Service Error:", error);
    }
  }

  export async function loginUserService(userData: LoginUserProps) {
    const { identifier, password } = userData;
    const url = new URL("http://127.0.0.1:1337/api/auth/local/");
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
        cache: "no-cache",
      });
  
      return response.json();
    } catch (error) {
      console.error("Login Service Error:", error);
      throw error;
    }
  }