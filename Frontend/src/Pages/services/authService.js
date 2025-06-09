// src/services/authService.js
import axios from 'axios';

const API_BASE = 'http://localhost:5000'; // Backend base URL

export const register = async (userData) => {
  const response = await axios.post(`${API_BASE}/api/register`, userData);
  return response.data;
};

export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE}/api/auth/login`, credentials);
    return response.data; // Expecting { token, user, ... }
  } catch (error) {
    console.error('Login error:', error?.response?.data || error.message);
    throw error;
  }
};
