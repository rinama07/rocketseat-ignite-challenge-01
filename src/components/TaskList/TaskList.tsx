import { messages } from '../../messages';
import { Task } from '../../types/task';

import { HeaderTaskCounter } from './HeaderTaskCounter';
import styles from './TaskList.module.css';

interface TaskListProps {
  onToggleTaskIsDone: (taskId: number) => void;
  tasks: Task[];
}

export function TaskList({ onToggleTaskIsDone, tasks = [] }: TaskListProps) {
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

      <ul className={styles.list}>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={() => onToggleTaskIsDone(task.id)}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
