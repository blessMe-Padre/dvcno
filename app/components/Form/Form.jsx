import styles from './style.module.css';

export const Form = () => {

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    return (
        <form
            className={styles.form}
            action=""
            onSubmit={handleChange}
        >

            <div>
                <p className={styles.form__title}>У вас есть вопросы?</p>
                <p className={styles.form__subtitle}>Задайте их нашим специалистам</p>
            </div>

            <div className={styles.wrapper__rows}>
                <div>
                    <label className={styles.form__label}>ФИО</label>
                    <input className={styles.form__input} type='text' placeholder='' />
                </div>
                <div>
                    <label className={styles.form__label}>Электронная почта / номер телефона</label>
                    <input className={styles.form__input} type='text' placeholder='' />
                </div>
                <div>
                    <label className={styles.form__label}>Ваш запрос</label>
                    <textarea className={styles.form__input} type='text' placeholder='' />
                </div>
                <div>
                    <button className={styles.form__btn__submit}>
                        <p>Задать вопрос</p>

                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" stroke="#191830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </button>
                </div>

                <div className={styles.form__policy}>
                    <input type="checkbox" />
                    <p>Пользуясь нашими услугами, вы подтверждаете, что прочитали
                        и полностью согласны с этим документом: Пользовательское Соглашение</p>
                </div >
            </div>
        </form>
    )
}