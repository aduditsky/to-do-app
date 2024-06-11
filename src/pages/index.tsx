import Head from 'next/head';

// Components
import ThemeButton from '@/components/buttons/Theme';
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
