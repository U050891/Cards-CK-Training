import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import { Post } from '../types';

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts()
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, []);

  return posts;
};