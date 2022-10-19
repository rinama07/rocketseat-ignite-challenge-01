import { InputHTMLAttributes } from 'react';

import styles from './InputText.module.css';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputText(props: InputTextProps) {
  return <input {...props} className={styles.input} type="text" />;
}
