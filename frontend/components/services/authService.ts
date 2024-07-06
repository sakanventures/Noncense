import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://127.0.0.1:1337'; // Replace with your Strapi backend URL

interface LoginResponse {
  jwt: string;
  user: any; // Define your user model interface
}

export const login = async (identifier: string, password: string): Promise<LoginResponse | null> => {
  try {
    const response = await axios.post(`${API_URL}/auth/local`, {
      identifier,
      password,
    });
    const { jwt, user } = response.data;
    Cookies.set('jwt', jwt, { expires: 7 }); // Store JWT token in cookie
    return { jwt, user };
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
};

export const logout = (): void => {
  Cookies.remove('jwt');
};
