import { useTodoContext } from '@/context/todo';
import { Counter } from '@/styles/todo/counter';
import { useMemo } from 'react';

export default function TodoCounter() {
  const { todos } = useTodoContext();

  const remainingTodos = useMemo(() => {
    return todos.filter((todo) => !todo.completed).length;
  }, [todos]);

  return <Counter>{remainingTodos} items left</Counter>;
}
