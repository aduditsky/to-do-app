import { Todo, useTodoContext } from '@/context/todo';
import { Item, RemoveButton, Text } from '@/styles/todo/item';

export default function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, removeTodo } = useTodoContext();

  return (
    <Item>
      <Text $completed={todo.completed} onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </Text>
      <RemoveButton onClick={() => removeTodo(todo.id)}>Remove</RemoveButton>
    </Item>
  );
}
