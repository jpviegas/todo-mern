import { ITodo } from '../App';
import { API_URL } from './config';

export async function EditTodoById(todoId: string, data: string): Promise<ITodo[]> {
  const response = await fetch(`${API_URL}/${todoId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ newTodo: data }),
  });

  return response.json();
}
