import { useEffect, useState } from 'react';

import { Header } from './components/Header/Header';
import { NewTaskForm } from './components/NewTaskForm/NewTaskForm';
import { tasks } from './mock/tasks';
import { Task } from './types/task';

export function App() {
  const [userTasks, setUserTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTimeout(() => setUserTasks(tasks), 2000);
    console.log(userTasks);
  }, []);

  return (
    <>
      <Header />

      <main>
        <NewTaskForm />
      </main>
    </>
  );
}
