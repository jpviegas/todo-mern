import { ITodo } from '../App';
import { API_URL } from './config';

export async function getTodoById(todoId: string): Promise<ITodo> {
  const response = await fetch(`${API_URL}/${todoId}`);

  return response.json();
}
