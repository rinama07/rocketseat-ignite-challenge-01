import { useEffect, useState } from 'react';

import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { NewTaskForm } from './components/NewTaskForm/NewTaskForm';
import { tasks } from './mock/tasks';
import { Task } from './types/task';

export function App() {
  const [userTasks, setUserTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTimeout(() => setUserTasks(tasks), 1000);
    console.log(userTasks);
  }, []);

  function addTask(taskText: string): void {
    const lastTaskId = userTasks[userTasks.length - 1].id ?? 0;

    const newTask = {
      id: lastTaskId + 1,
      text: taskText,
    };

    setUserTasks((userTasks) => userTasks.concat(newTask));
  }

  return (
    <>
      <Header />

      <main className={styles.main}>
        <NewTaskForm onAddTask={addTask} />
      </main>
    </>
  );
}
