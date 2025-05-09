import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const http = { 
  get: async <T>(endpoint: string, params?: Record<string, any>) => {
    const { data } = await api.get<T>(endpoint, { params });
    return data;
  },

  post: async <T>(endpoint: string, data: any) => {
    const { data: response } = await api.post<T>(endpoint, data);
    return response;
  },

  put: async <T>(endpoint: string, data: any) => {
    const { data: response } = await api.put<T>(endpoint, data);
    return response;
  },

  delete: async <T>(endpoint: string) => {
    const { data } = await api.delete<T>(endpoint);
    return data;
  },
};