import { useMemo } from 'react';

import { useTodoContext } from '@/context/todo';

import { Footer, List } from '@/styles/todo/list';

import TodoItem from '@/components/todo/item';
import TodoFilters from '@/components/todo/filter';
import TodoCounter from '@/components/todo/counter';
import ClearCompletedButton from '@/components/todo/clear-completed';

export default function TodoList() {
  const { todos, filter } = useTodoContext();

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === 'completed') return todo.completed;
      if (filter === 'active') return !todo.completed;
      return true;
    });
  }, [todos, filter]);

  return (
    <List>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <Footer>
        <TodoCounter />
        <ClearCompletedButton />
        <TodoFilters />
      </Footer>
    </List>
  );
}
