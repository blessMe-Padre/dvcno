import React from "react";
import styles from './style.module.css';



export default function Popup({ active, setActive }) {
    

    // const [opened, setOpened] = useState();

    return (
        <div className={`${styles.popup} ${active ? styles.popupActive : styles.popupNone}`} onClick={() => {setActive(false)}}>
            <div className={styles.popup__body}>
                <div className={styles.popup__content} onClick={e => e.stopPropagation()}>
                    <p>У вас есть вопросы?</p>
                    <p>
                        Задайте их нашим специалистам
                    </p>
                    <div>
                        <label>ФИО</label>
                        <input type='text' placeholder='' />
                    </div>
                    <div>
                        <label>Электронная почта / номер телефона</label>
                        <input type='text' placeholder='' />
                    </div>
                    <div>
                        <label>Ваш запрос</label>
                        <textarea type='text' placeholder='' />
                    </div>
                </div>
            </div>
        </div>
    )
}