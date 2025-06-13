import styles from "./Footer.module.css";
export function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>
        IFRN - Campus Macau
        <br />
        Curso Técnico em Informática
        <br />
        Programação para Internet 2025
      </p>
      <h2 className={styles.footerTitle}>Alexandra Oliveira</h2>
    </div>
  );
}