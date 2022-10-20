import { PlusCircle } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';

import { messages } from '../../../messages';

import styles from './CreateButton.module.css';

interface CreateButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function CreateButton(props: CreateButtonProps) {
  return (
    <button {...props} className={styles.button}>
      {messages.newTask.button.label}
      <PlusCircle size={16} />
    </button>
  );
}
