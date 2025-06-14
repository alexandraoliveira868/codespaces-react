import styles from "./Main.module.css";
import { useState, useEffect } from "react";


export function Main() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 1000); // número aleatório
    setImageUrl(`https://picsum.photos/200/300?random=${randomNumber}`);
  }, []);
  return (
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src={imageUrl} alt="Imagem aleatória" style={{ borderRadius: "3rem" }} />
            <h2>My Text 0</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt
               ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem 
               ullam corporis suscipit laboriosam. </p>
          </div>
          <div className={styles.card}>
            <img src={imageUrl} alt="Imagem aleatória" style={{ borderRadius: "3rem" }} />
            <h2>My Text 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt
               ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem 
               ullam corporis suscipit laboriosam.</p>
          </div>
          <div className={styles.card}>
            <img src={imageUrl} alt="Imagem aleatória" style={{ borderRadius: "3rem" }} />
            <h2>My text 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt
               ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem 
               ullam corporis suscipit laboriosam.</p>
          </div>
          <div className={styles.card}>
            <img src={imageUrl} alt="Imagem aleatória" style={{ borderRadius: "3rem" }} />
            <h2>My text 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt
               ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem 
               ullam corporis suscipit laboriosam.</p>
          </div>
          <div className={styles.card}>
            <img src={imageUrl} alt="Imagem aleatória" style={{ borderRadius: "3rem" }} />
            <h2>My text 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt
               ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem 
               ullam corporis suscipit laboriosam.</p>
          </div>
        </div>
      </main>
  );
}