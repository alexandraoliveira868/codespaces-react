import styles from "./Footer.module.css";
import { Github, Instagram, MessageCircle} from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p className={styles.footer}>IFRN - Campus Macau
            <br />
            Curso Técnico em Informática
            <br />
            Programação para Internet 2025
        </p>
        <h2 className={styles.title}>Alexandra de Oliveira Silva</h2>  
        <div className={styles.card}>
           <Github size={20} />
           <Instagram size={20} />
           <MessageCircle size={20} />
          </div>
      </footer>
    </>
   
  );
}