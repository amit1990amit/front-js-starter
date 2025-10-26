// src/features/users/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// GET /users
export function fetchUsersRequest() {
  return api.get('/users');
}
