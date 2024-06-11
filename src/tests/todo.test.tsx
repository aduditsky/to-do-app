import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import TodoComponent from '@/components/todo';
import ContextProvider from '@/context/wrapper';

describe('TodoContext', () => {
  it('adds a todo', () => {
    render(
      <ContextProvider>
        <TodoComponent />
      </ContextProvider>
    );

    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'Test' },
    });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('toggles a todo', () => {
    render(
      <ContextProvider>
        <TodoComponent />
      </ContextProvider>
    );

    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'Test Todo' },
    });
    fireEvent.click(screen.getByText('Add'));

    const toggle = screen.getAllByText('Test Todo');
    fireEvent.click(toggle[0]);

    const todo = screen.getByText('Test Todo');
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  it('removes a todo', () => {
    render(
      <ContextProvider>
        <TodoComponent />
      </ContextProvider>
    );

    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'Test Todo' },
    });
    fireEvent.click(screen.getByText('Add'));

    const removeButtons = screen.getAllByText('Remove');
    removeButtons.forEach((btn) => fireEvent.click(btn));

    expect(screen.queryByText('Test Todo')).not.toBeInTheDocument();
  });

  it('clears completed todos', () => {
    render(
      <ContextProvider>
        <TodoComponent />
      </ContextProvider>
    );

    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'Test Todo' },
    });
    fireEvent.click(screen.getByText('Add'));

    const toggleTodo = screen.getAllByText('Test Todo');
    toggleTodo.forEach((btn) => fireEvent.click(btn));

    fireEvent.click(screen.getByText('Clear Completed'));
    expect(screen.queryByText('Test Todo')).not.toBeInTheDocument();
  });

  it('sets the filter', () => {
    render(
      <ContextProvider>
        <TodoComponent />
      </ContextProvider>
    );

    const toggleTodo = screen.getAllByText('Test Todo');
    toggleTodo.forEach((btn) => fireEvent.click(btn));

    fireEvent.click(screen.getByText('Active'));
    expect(screen.getByText('Test Todo')).not.toBeInTheDocument();
  });
});
