import styles from "./page.module.css";
import { ArrowDown } from "lucide-react";

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
        <div className={styles.icon}>
          <ArrowDown />
        </div>
      </main>
    </div>
  );
}
