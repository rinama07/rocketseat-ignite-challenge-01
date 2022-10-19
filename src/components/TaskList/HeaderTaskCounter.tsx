import styles from './HeaderTaskCounter.module.css';

interface HeaderTaskCounterProps {
  className?: string;
  count: number;
  label: string;
}

export function HeaderTaskCounter({
  className = '',
  count = 0,
  label,
}: HeaderTaskCounterProps) {
  return (
    <div className={className}>
      <label className={styles.label}>{label}</label>
      <span className={styles.counter}>{count}</span>
    </div>
  );
}
