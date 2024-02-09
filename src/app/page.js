import styles from './page.module.css';
import Notes from './components/Notes';

export default function Home() {
  return (
    <main className={styles.main}>
      <Notes></Notes>
    </main>
  );
}
