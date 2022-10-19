import { Header } from './components/Header/Header';
import { NewTaskForm } from './components/NewTaskForm/NewTaskForm';

export function App() {
  return (
    <>
      <Header />

      <main>
        <NewTaskForm />
      </main>
    </>
  );
}
