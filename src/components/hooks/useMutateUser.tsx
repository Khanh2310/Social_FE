import axios from 'axios';
import { RegistrationInput } from '../../schema/registration/type';

export const axiosUnAuthInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const registration = async (formData: RegistrationInput) => {
  const { data } = await axiosUnAuthInstance.post(
    `http://localhost:5000/api/users/sign-up`,
    formData
  );
  return data;
};
