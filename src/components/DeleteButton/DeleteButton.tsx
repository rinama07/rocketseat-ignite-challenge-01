import { Trash } from 'phosphor-react';
import { ButtonHTMLAttributes } from 'react';

import styles from './DeleteButton.module.css';

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function DeleteButton(props: DeleteButtonProps) {
  return (
    <button {...props} className={styles.button}>
      <Trash />
    </button>
  );
}
