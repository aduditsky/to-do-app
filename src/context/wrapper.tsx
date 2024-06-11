import { ReactNode } from 'react';

// Contexts
import ThemeProvider from './theme';
import { TodoProvider } from './todo';

export default function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <TodoProvider>{children}</TodoProvider>
    </ThemeProvider>
  );
}
