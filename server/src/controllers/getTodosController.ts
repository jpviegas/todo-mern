import { Request, Response } from 'express';
import Todo from '../models/Todo';

export async function getTodosController(_req: Request, res: Response):Promise<void> {
  const todos = await Todo.find();
  res.json(todos);
}
