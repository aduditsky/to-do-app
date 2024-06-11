import { Todo, useTodoContext } from '@/context/todo';
import { Button, Form, Input } from '@/styles/todo/input';
import { useState } from 'react';

export default function TodoInput() {
  const { addTodo } = useTodoContext();
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add a new todo'
      />
      <Button type='submit'>Add</Button>
    </Form>
  );
}
