import { ClipboardText } from 'phosphor-react';

import { messages } from '../../messages';

import styles from './EmptyTaskList.module.css';

export function EmptyTaskList() {
  return (
    <div className={styles.container}>
      <ClipboardText size="56" />

      <span>
        <p className={styles.bold}>{messages.taskList.content.empty.title}</p>

        <p>{messages.taskList.content.empty.subtitle}</p>
      </span>
    </div>
  );
}
