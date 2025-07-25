import type { LoginCredentials, RegistrationData, User } from '../../contexts/AuthContext';
import apiClient from '../../services/apiClient';

interface LoginResponse {
  token: string;
  user: User;
}

export const loginUser = async (credentials: LoginCredentials) => {
  const response = await apiClient.post<LoginResponse>('/login', credentials);
  return response.data;
};

export const registerUser = async (userData: RegistrationData) => {
  const response = await apiClient.post('/register', userData);
  return response.data;
};