import styles from "./Main.module.css";

export function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.header} >
        <h1 className={styles.title}>Foco, Força, Fé</h1>
      </div>
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
      <div className={styles.footer} >
        <p className={styles.footerText}>IFRN - Campus Macau
          <br/>
          Curso Técnico em Informática
          <br/>
          Programação para Internet 2025
        </p>
        <h2 className={styles.footerTitle}>Alexandra Oliveira</h2>
      </div>
    </div>
  );
}