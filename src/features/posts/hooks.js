// src/features/posts/hooks.js
import { useQuery } from '@tanstack/react-query';
import { fetchPostsRequest } from './api';

export function usePostsQuery({ limit = 10, userId } = {}) {
  return useQuery({
    queryKey: ['posts', { limit, userId }],
    queryFn: async () => {
      const res = await fetchPostsRequest({
        _limit: limit,
        ...(userId ? { userId } : {}),
      });
      return res.data;
    },
  });
}
