import { Todo, useTodoContext } from '@/context/todo';
import { Item, RemoveButton, Text } from '@/styles/todo/item';

type TodoItenProp = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItenProp) {
  const { toggleTodo, removeTodo } = useTodoContext();

  const handleToggleTodo = () => {
    toggleTodo(todo.id);
  };

  return (
    <Item>
      <Text $completed={todo.completed} onClick={handleToggleTodo}>
        {todo.text}
      </Text>
      <RemoveButton onClick={() => removeTodo(todo.id)}>Remove</RemoveButton>
    </Item>
  );
}
