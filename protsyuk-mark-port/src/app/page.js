import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.FName}>
          <p>Mark</p>
        </div>
        <div className={styles.LName}>
          <p>Protsyuk</p>
        </div>
      </main>
    </div>
  );
}
