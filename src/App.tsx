import { useEffect, useState } from 'react';

import { tasks } from './mock/tasks';
import { Task } from './types/task';
import { getListWithItemUpdated } from './utils/list';

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

  function toggleTaskIsDone(taskId: number) {
    const taskIndex = userTasks.findIndex((task) => task.id === taskId);

    const selectedTask = userTasks[taskIndex];
    const updatedTask: Task = {
      ...selectedTask,
      isDone: !selectedTask.isDone,
    };

    const updatedUserTasks = getListWithItemUpdated<Task>(
      userTasks,
      taskIndex,
      updatedTask
    );

    setUserTasks(updatedUserTasks);
  }

  function deleteTask(taskId: number) {
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
