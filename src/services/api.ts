import axios from 'axios';
import { API_URL } from '../constants';
import { Post } from '../types';

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};