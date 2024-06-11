import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

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

  it('sets the filter', async () => {
    render(
      <ContextProvider>
        <TodoComponent />
      </ContextProvider>
    );

    await waitFor(() => {
      fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
        target: { value: 'Test Todo' },
      });
      fireEvent.click(screen.getByText('Add'));

      fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
        target: { value: 'Hidden Todo' },
      });
      fireEvent.click(screen.getByText('Add'));

      const toggleTodo = screen.getAllByText('Hidden Todo');
      toggleTodo.forEach((btn) => fireEvent.click(btn));
    });

    await waitFor(() => {
      fireEvent.click(screen.getByText('Active'));
    });
    await waitFor(() => {
      expect(screen.queryByText('Hidden Todo')).not.toBeInTheDocument();
    });
  });
});
