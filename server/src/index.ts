/* eslint-disable @typescript-eslint/no-misused-promises */
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { createTodoController } from './controllers/createTodoController';
import { deleteTodoController } from './controllers/deleteTodoController';
import { getTodosController } from './controllers/getTodosController';

config();

const MONGO_URL = process.env.MONGO_URL;
const port = 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('todo mern')
})

app.post('/todos', createTodoController);

app.get('/todos', getTodosController);

app.delete('/todos/:todoId', deleteTodoController);

void mongoose.connect(MONGO_URL ?? '',
).then(() => {
  console.log(`on port ${port}`);
  app.listen(process.env.PORT ?? port);
});
