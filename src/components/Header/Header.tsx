import logoSrc from '../../assets/logo.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logoSrc} alt="ToDo App Logo" />

      <div className={styles.appName}>
        <span>to</span>
        <span>do</span>
      </div>
    </header>
  );
}
