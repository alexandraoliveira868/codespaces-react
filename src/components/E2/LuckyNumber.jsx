import { useState } from 'react';
import styles from './LuckyNumber.module.css';

export function LuckyNumber() {
 const [luckyNumber, setLuckyNumber ] = useState(0);
 const [array, setArray] = useState([]);
 const [history, setHistory] = useState([]);
 const [warning, setWarning] = useState("");

 function handleClick() {
        setLuckyNumber(Math.floor(Math.random() * 40) + 1);

        if ([...array].includes(luckyNumber)) {
            alert(`Já foi sorteado esse número! ${luckyNumber}`);}
            else {
            setArray([...array, luckyNumber]);
            }
        const drawnNumber = Math.floor(Math.random() * 40) + 1;
        if (history.includes(drawnNumber)) {
            setWarning("Já foi sorteado esse número!");
            setLuckyNumber(drawnNumber);
            return; }
        setHistory([...history, drawnNumber]);
        setLuckyNumber(drawnNumber);
        setWarning("");
    }
    return (
        <div className={styles.container}>
            {luckyNumber === 0 ? (
                 <h1>Lucky Number 🎲</h1>
     ) : (
                <h1>Lucky Number = {luckyNumber}</h1>
    )
            }
           
            
            <button className={styles.button} onClick={handleClick}>
                I'm Feeling Lucky Today!
                </button>

            {warning && <p className={styles.warning}>{warning}</p>}
            {history.length > 0 && (
                <>
                <h2 className={styles.subtitle}>Números Sorteados: </h2>
                <ul className={styles.list}>
                    {history.map((num) => (
        <li key={num}>
            {num}
        </li>
    ))}
</ul>
                </>
            )}
        </div>
    );
}