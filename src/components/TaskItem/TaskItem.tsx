import { messages } from '../../messages';
import { Task } from '../../types/task';
import { Checkbox } from '../Checkbox/Checkbox';
import { DeleteButton } from '../DeleteButton/DeleteButton';

import styles from './TaskItem.module.css';

interface TaskItemProps {
  onChangeIsDone: () => void;
  onDelete: () => void;
  task: Task;
}

export function TaskItem({ onChangeIsDone, onDelete, task }: TaskItemProps) {
  return (
    <li className={styles.container}>
      <Checkbox checked={task.isDone} onChange={onChangeIsDone} />

      <p className={styles.task}>
        {task.isDone ? <s>{task.text}</s> : task.text}
      </p>

      <DeleteButton
        onClick={onDelete}
        title={messages.taskList.content.list.delete.icon}
      />
    </li>
  );
}
