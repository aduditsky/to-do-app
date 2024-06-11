import { Container, Title } from '@/styles/pages';
import TodoInput from './input';
import TodoList from './list';

export default function TodoComponent() {
  return (
    <Container>
      <Title>Todo List</Title>
      <TodoInput />
      <TodoList />
    </Container>
  );
}
