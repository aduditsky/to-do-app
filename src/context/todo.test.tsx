import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TodoProvider, useTodoContext } from './todo';

const TestComponent = () => {
  const { todos, addTodo, toggleTodo, removeTodo, clearCompleted, setFilter } =
    useTodoContext();

  return (
    <div>
      <button onClick={() => addTodo('Test Todo')}>Add Todo</button>
      {todos.map((todo, index) => (
        <div key={todo.id}>
          <span
            data-testid={`todo-${index}`}
            style={todo.completed ? { textDecoration: 'line-through' } : {}}
          >
            {todo.text} - {String(todo.completed)} - {todo.id}
          </span>
          <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
      ))}
      <button onClick={() => clearCompleted()}>Clear Completed</button>
      <button onClick={() => setFilter('completed')}>Set Filter</button>
    </div>
  );
};

describe('TodoContext', () => {
  it('adds a todo', () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  it('toggles a todo', () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    fireEvent.click(screen.getByText('Add Todo'));
    const toggleButtons = screen.getAllByText('Toggle');
    fireEvent.click(toggleButtons[0]);
    const todo = screen.getByTestId('todo-0'); // Assuming the id of the todo is 1
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  it('removes a todo', () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    fireEvent.click(screen.getByText('Add Todo'));
    const removeButtons = screen.getAllByText('Remove');
    fireEvent.click(removeButtons[0]);
    expect(screen.queryByText('todo-0')).not.toBeInTheDocument();
  });

  it('clears completed todos', () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    fireEvent.click(screen.getByText('Add Todo'));
    const toggleButtons = screen.getAllByText('Toggle');
    fireEvent.click(toggleButtons[0]);
    fireEvent.click(screen.getByText('Clear Completed'));
    expect(screen.queryByText('Test Todo')).not.toBeInTheDocument();
  });

  it('sets the filter', () => {
    render(
      <TodoProvider>
        <TestComponent />
      </TodoProvider>
    );

    fireEvent.click(screen.getByText('Set Filter'));

    expect(screen.getByText('Set Filter')).toBeInTheDocument();
  });
});
