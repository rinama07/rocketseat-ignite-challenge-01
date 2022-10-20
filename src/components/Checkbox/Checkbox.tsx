import { Check } from 'phosphor-react';
import { InputHTMLAttributes } from 'react';

import styles from './Checkbox.module.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <label className={styles.container}>
      <input type="checkbox" {...props} />
      <span className={styles.checkmark}>{props.checked && <Check />}</span>
    </label>
  );
}
