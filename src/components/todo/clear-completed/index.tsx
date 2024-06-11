import { useTodoContext } from '@/context/todo';
import { Button } from '@/styles/todo/clear-completed';

export default function ClearCompletedButton() {
  const { clearCompleted, todos } = useTodoContext();

  const hasCompleted = todos.some((todo) => todo.completed);

  if (!hasCompleted) return null;
  return <Button onClick={clearCompleted}>Clear Completed</Button>;
}
