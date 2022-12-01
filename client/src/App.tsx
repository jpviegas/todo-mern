/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createTodo } from './api/createTodo';
import { deleteTodo } from './api/deleteTodo';
import { getTodos } from './api/getTodos';
import './App.css';

export interface ITodo {
  _id: string;
  todo: string;
  __v: number;
}

function App(): JSX.Element {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [todo, setTodo] = useState('');

  async function handleCreateTodo(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    const newTodo = await createTodo(todo);

    setTodos([...todos, newTodo]);
    setTodo('');
  }

  async function handleDeleteTodo(todoId: string): Promise<void> {
    await deleteTodo(todoId);

    setTodos(
      todos.filter((filteredTodo: ITodo) => filteredTodo._id !== todoId),
    );
  }

  useEffect(() => {
    async function fetchTodos(): Promise<void> {
      const newTodos = await getTodos();

      setTodos(newTodos);
    }

    void fetchTodos();
  }, []);

  return (
    <div className="App">
      <ul className="todos">
        {todos.map((singleTodo: ITodo) => (
          <li key={singleTodo._id}>
            <button onClick={async () => handleDeleteTodo(singleTodo._id)}>
              X
            </button>
            <Link to={`todos/${singleTodo._id}`}>{singleTodo.todo}</Link>
          </li>
        ))}
      </ul>

      <form onSubmit={handleCreateTodo}>
        <label>
          ToDo
          <input
            type="text"
            value={todo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTodo(e.target.value);
            }}
          />
        </label>
        <button>Create ToDo</button>
      </form>
    </div>
  );
}

export default App;
