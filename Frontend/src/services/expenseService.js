import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getExpenses = () => {
  return axios.get(API_URL);
};

export const getExpense = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const addExpense = (expenseData) => {
  return axios.post(API_URL, expenseData);
};

export const deleteExpense = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
