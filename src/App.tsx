import { useEffect, useState } from 'react';

import { tasks } from './mock/tasks';
import { Task } from './types/task';

import { Header } from './components/Header/Header';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { NewTaskForm } from './components/NewTaskForm/NewTaskForm';
import { TaskList } from './components/TaskList/TaskList';

import styles from './App.module.css';

export function App() {
  const [isLoadingTasks, setIsLoadingTasks] = useState<boolean>(false);
  const [userTasks, setUserTasks] = useState<Task[]>([]);

  useEffect(() => {
    setIsLoadingTasks(true);

    setTimeout(() => {
      setUserTasks(tasks);
      setIsLoadingTasks(false);
    }, 1000);
  }, []);

  function addTask(taskText: string): void {
    const newTask = {
      id: String(new Date().getTime()),
      text: taskText,
    };

    setUserTasks((userTasks) => [...userTasks, newTask]);
  }

  function toggleTaskIsDone(taskId: string): void {
    setUserTasks((userTasks) => {
      return userTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone: !task.isDone };
        }

        return task;
      });
    });
  }

  function deleteTask(taskId: string): void {
    setUserTasks((userTasks) => {
      return userTasks.filter((task) => task.id !== taskId);
    });
  }

  return (
    <>
      <Header />

      <main className={styles.main}>
        <NewTaskForm onAddTask={addTask} />

        {isLoadingTasks ? (
          <LoadingSpinner />
        ) : (
          <TaskList
            onDeleteTask={deleteTask}
            onToggleTaskIsDone={toggleTaskIsDone}
            tasks={userTasks}
          />
        )}
      </main>
    </>
  );
}
