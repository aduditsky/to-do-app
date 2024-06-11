import Head from 'next/head';
// import Image from 'next/image';

// Components
import ThemeButton from '@/components/buttons/Theme';
import { Container, Title } from '@/styles/pages';
import TodoInput from '@/components/todo/input';
import TodoList from '@/components/todo/list';
import TodoComponent from '@/components/todo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple TODO App</title>
        <meta name='description' content='Made by A. Duditskii' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <ThemeButton />
        <TodoComponent />
      </main>
    </>
  );
}
