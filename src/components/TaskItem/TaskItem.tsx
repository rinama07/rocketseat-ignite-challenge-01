import { messages } from '../../messages';
import { Task } from '../../types/task';

import styles from './TaskItem.module.css';

interface TaskItemProps {
  onChangeIsDone: () => void;
  onDelete: () => void;
  task: Task;
}

export function TaskItem({ onChangeIsDone, onDelete, task }: TaskItemProps) {
  return (
    <li className={styles.container}>
      <input type="checkbox" checked={task.isDone} onChange={onChangeIsDone} />

      <p className={styles.task}>
        {task.isDone ? <s>{task.text}</s> : task.text}
      </p>

      <button
        onClick={onDelete}
        title={messages.taskList.content.list.delete.icon}
      >
        {messages.taskList.content.list.delete.icon}
      </button>
    </li>
  );
}
