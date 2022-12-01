import { API_URL } from './config';

export async function createTodo(todo: string): Promise<any> {
  const response = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify({
      todo,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.json();
}
