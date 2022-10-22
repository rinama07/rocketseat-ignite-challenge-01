import clsx from 'clsx';

import styles from './HeaderTaskCounter.module.css';

interface HeaderTaskCounterProps {
  count: number;
  labelColor?: 'blue' | 'purple';
  labelText: string;
}

export function HeaderTaskCounter({
  count = 0,
  labelColor = 'purple',
  labelText,
}: HeaderTaskCounterProps) {
  return (
    <div>
      <label className={clsx(styles.label, styles[labelColor])}>
        {labelText}
      </label>

      <span className={styles.counter}>{count}</span>
    </div>
  );
}
