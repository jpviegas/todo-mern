import { API_URL } from './config';

export async function deleteTodo(todoId: string): Promise<void> {
  await fetch(`${API_URL}/${todoId}`, {
    method: 'DELETE',
  });
}
