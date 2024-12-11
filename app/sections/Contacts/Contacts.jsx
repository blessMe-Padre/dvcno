import styles from './style.module.css';


export const Contacts = () => {
    return (
        <section className={styles.section}>
            <div className='container'>
                <ul className={styles.tabs_wrapper}>
                    <li className={styles.tabs_btn}>АНПОО «ДВЦНО</li>
                    <li className={styles.tabs_btn}>НШДС «КЕП»</li>
                    <li className={styles.tabs_btn}>НОШДС «ВШ»</li>
                    <li className={styles.tabs_btn}>МЛШ</li>
                    <li className={styles.tabs_btn}>ШОД</li>
                    <li className={styles.tabs_btn}>АК</li>
                    <li className={styles.tabs_btn}>ФОК «Лига спорта»</li>
                </ul>
            </div>
        </section>
    )
}