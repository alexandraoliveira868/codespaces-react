import styles from './MyText.module.css';

export function MyText(){
    return (
        <div className={styles.container}>
        <div className={styles.div}>
            <h1 className={styles.title}>Meu primeiro React App</h1>
            <p className={styles.text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Non a similique id nihil, quaerat repellendus sapiente assumenda 
                velit blanditiis dolore. Commodi vitae tempora quas excepturi 
                inventore laboriosam consectetur at aut!
            </p>
        </div>
        </div>
    )
}