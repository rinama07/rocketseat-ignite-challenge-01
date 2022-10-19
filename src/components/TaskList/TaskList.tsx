import { messages } from '../../messages';
import { Task } from '../../types/task';

import styles from './TaskList.module.css';

interface TaskListProps {
  onToggleTaskIsDone: (taskId: number) => void;
  tasks: Task[];
}

interface HeaderTaskIndicatorProps {
  className?: string;
  indicator: number;
  label: string;
}

function HeaderTaskIndicator({
  className = '',
  indicator = 0,
  label,
}: HeaderTaskIndicatorProps) {
  return (
    <div className={className}>
      <label>{label}</label>
      <span className={styles.headerIndicator}>{indicator}</span>
    </div>
  );
}

export function TaskList({ onToggleTaskIsDone, tasks = [] }: TaskListProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isDone).length;

  return (
    <div className={styles.container}>
      <header>
        <HeaderTaskIndicator
          className={styles.headerTotalIndicator}
          label={messages.taskList.header.createdLabel}
          indicator={totalTasks}
        />

        <HeaderTaskIndicator
          className={styles.headerDoneIndicator}
          label={messages.taskList.header.doneLabel}
          indicator={completedTasks}
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
