import { messages } from '../../messages';
import { Task } from '../../types/task';
import { TaskItem } from '../TaskItem/TaskItem';
import { EmptyTaskList } from './EmptyTaskList';

import { HeaderTaskCounter } from './HeaderTaskCounter';
import styles from './TaskList.module.css';

interface TaskListProps {
  onDeleteTask: (taskId: number) => void;
  onToggleTaskIsDone: (taskId: number) => void;
  tasks: Task[];
}

export function TaskList({
  onDeleteTask,
  onToggleTaskIsDone,
  tasks = [],
}: TaskListProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isDone).length;

  return (
    <div className={styles.container}>
      <header>
        <HeaderTaskCounter
          labelColor="blue"
          labelText={messages.taskList.header.total}
          count={totalTasks}
        />

        <HeaderTaskCounter
          labelText={messages.taskList.header.done}
          count={completedTasks}
        />
      </header>

      {tasks.length === 0 ? (
        <EmptyTaskList />
      ) : (
        <ul className={styles.list}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              onChangeIsDone={() => onToggleTaskIsDone(task.id)}
              onDelete={() => onDeleteTask(task.id)}
              task={task}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
