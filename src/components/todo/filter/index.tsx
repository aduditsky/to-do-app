import { useTodoContext } from '@/context/todo';
import { Button, Filters } from '@/styles/todo/filter';

export default function TodoFilters() {
  const { filter, setFilter } = useTodoContext();

  return (
    <Filters>
      <Button $active={filter === 'all'} onClick={() => setFilter('all')}>
        All
      </Button>
      <Button $active={filter === 'active'} onClick={() => setFilter('active')}>
        Active
      </Button>
      <Button
        $active={filter === 'completed'}
        onClick={() => setFilter('completed')}
      >
        Completed
      </Button>
    </Filters>
  );
}
