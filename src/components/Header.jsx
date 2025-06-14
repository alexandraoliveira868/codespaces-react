import styles from "./Header.module.css";
import { AlarmClock} from "lucide-react";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <AlarmClock size = {80}/>
        <h1 className={styles.title}>Foco, Força, Fé</h1>  
      </header>
      
    </>
   
  );
}
