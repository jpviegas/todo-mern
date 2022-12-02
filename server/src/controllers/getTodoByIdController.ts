import { Request, Response } from 'express';
import Todo from '../models/Todo';

export async function getTodoByIdController(req: Request, res: Response): Promise<void> {
  const { todoId } = req.params

  const todo = await Todo.findById(todoId);
  res.json(todo);
}

export async function editTodoByIdController(req: Request, res: Response): Promise<void> {
  const { todoId } = req.params
  const { newTodo } = req.body

  const todo = await Todo.findByIdAndUpdate(todoId, { todo: newTodo });
  res.json(todo);
}
