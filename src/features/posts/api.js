import axios from 'axios';

const postsApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// You can now pass params, e.g. { _limit: 5, userId: 1 }
export function fetchPostsRequest(params = {}) {
  return postsApi.get('/posts', { params });
}
