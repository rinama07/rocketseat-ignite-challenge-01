import styles from './Header.module.css';

interface HeaderProps {
  userName: string;
}

export function Header({ userName }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1>This is just a simple template for ReactJS projects!</h1>

      <p>Hello, {userName}</p>
    </header>
  );
}
