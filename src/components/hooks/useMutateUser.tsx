import axios, { AxiosError } from 'axios';
import { RegistrationInput } from '../../schema/registration/type';
import { User, userQueryKey } from '../../types/user/types';
import { UseMutationResult, useMutation, useQueryClient } from 'react-query';
import {
  removeUserFromLocalStorage,
  setUserToLocalStorage,
} from './useQueryUser';
import axiosInstance from '../../config/axiosInstance';
import { SignInput } from '../../schema/signin/type';
export const axiosUnAuthInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const login = async (formData: SignInput) => {
  const { data } = await axiosUnAuthInstance.post<User>(
    `/users/sign-in`,
    formData
  );
  return data;
};
export const useMutateLogin = (): UseMutationResult<
  User,
  AxiosError,
  SignInput,
  undefined
> => {
  const queryClient = useQueryClient();
  return useMutation(login, {
    onSuccess: (data) => {
      queryClient.removeQueries([]);
      setUserToLocalStorage(data);
      queryClient.setQueriesData(userQueryKey, data);
    },
  });
};

const registration = async (formData: RegistrationInput) => {
  const { data } = await axiosUnAuthInstance.post<User>(
    `/users/sign-up`,
    formData
  );
  return data;
};

export const useMutateRegistration = (): UseMutationResult<
  User,
  AxiosError,
  RegistrationInput,
  undefined
> => {
  return useMutation(registration, {
    onSuccess: (data) => {
      setUserToLocalStorage(data);
    },
  });
};

const logout = async () => {
  const { data } = await axiosInstance.post(`/users/logout`);
  return data;
};

export const useMutateLogout = (): UseMutationResult<User, AxiosError> => {
  const queryClient = useQueryClient();
  return useMutation(logout, {
    onMutate: () => {
      removeUserFromLocalStorage();
      queryClient.removeQueries([]);
    },
  });
};
