/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EditTodoById } from '../../api/editTodoById';
import { getTodoById } from '../../api/getTodoById';
import { ITodo } from '../../App';

function EditTodo(): JSX.Element {
  const { todoId } = useParams();
  const [data, setData] = useState('');
  const [todo, setTodo] = useState<ITodo>({});

  useEffect(() => {
    async function functiongettodo(id: string): Promise<void> {
      const getTodo = await getTodoById(id);
      setTodo(getTodo);
    }
    void functiongettodo(todoId ?? '');
  }, []);

  async function updateTodo(id: string, d: string): Promise<void> {
    await EditTodoById(id, d);
    await getTodoById(id);
  }

  return (
    <>
      <h1>{todo.todo}</h1>
      <label>
        edit
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </label>
      <button onClick={async () => updateTodo(todoId ?? '', data)}>Edit Todo</button>
    </>
  );
}

export default EditTodo;
