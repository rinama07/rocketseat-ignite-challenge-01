import { user } from './mock/user';

import { Header } from './components/Header/Header';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.app}>
      <Header userName={user.name} />
    </div>
  );
}
