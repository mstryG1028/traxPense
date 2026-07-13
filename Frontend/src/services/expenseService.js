import axios from "axios";

const API_URL = "http://localhost:7000/api/expenses";

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
