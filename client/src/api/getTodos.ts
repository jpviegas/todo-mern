import { ITodo } from '../App';
import { API_URL } from './config';

export async function getTodos(): Promise<ITodo[]> {
  const response = await fetch(`${API_URL}`);

  return response.json();
}
