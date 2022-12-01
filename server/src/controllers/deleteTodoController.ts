import { Request, Response } from 'express';
import Todo from '../models/Todo';

export async function deleteTodoController(req: Request, res: Response): Promise<void> {
  const { todoId } = req.params;

  const deletedTodo = await Todo.findByIdAndDelete(todoId);
  res.json(deletedTodo);
}
