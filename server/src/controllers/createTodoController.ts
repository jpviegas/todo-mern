import { Request, Response } from 'express';
import Todo from '../models/Todo';

export async function createTodoController(req: Request, res: Response): Promise<void> {
  const newTodo = new Todo({
    todo: req.body.todo,
  });

  const createdTodo = await newTodo.save();
  res.json(createdTodo);
}
