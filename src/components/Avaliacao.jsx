import styles from "./Avaliacao.module.css";

export function Avaliacao() {
  return (
    <div className={styles.container}>
      <header className={styles.header} />
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>My Text 0</h2>
            <p>This is the first card.</p>
          </div>
          <div className={styles.card}>
            <h2>My Text 1</h2>
            <p>This is the second card.</p>
          </div>
          <div className={styles.card}>
            <h2>My text 2</h2>
            <p>This is the third card.</p>
          </div>
          <div className={styles.card}>
            <h2>My text 3</h2>
            <p>This is the third card.</p>
          </div>
          <div className={styles.card}>
            <h2>My text 4</h2>
            <p>This is the third card.</p>
          </div>
        </div>
      </main>
      <footer className={styles.footer} />
    </div>
  );
}