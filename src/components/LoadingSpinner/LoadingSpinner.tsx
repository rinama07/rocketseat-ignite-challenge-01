import { Spinner } from 'phosphor-react';

import styles from './LoadingSpinner.module.css';

export function LoadingSpinner() {
  return <Spinner size="56" className={styles.loading} />;
}
