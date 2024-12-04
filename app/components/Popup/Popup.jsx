import React from "react";
import styles from './style.module.css';
import { Form } from "../Form/Form";



export default function Popup({ active, setActive }) {


    // const [opened, setOpened] = useState();

    return (
        <div className={`${styles.popup} ${active ? styles.popupActive : styles.popupNone}`} onClick={() => { setActive(false) }}>
            <div className={styles.popup__body}>

                <div className={styles.popup__content} onClick={e => e.stopPropagation()}>

                    <button
                        className={styles.popup__close}
                        onClick={() => { setActive(false) }}
                    >
                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="18.4463" width="21.8033" height="0.726776" rx="0.363388" transform="rotate(-45 3 18.4463)" fill="white" />
                            <rect x="4.21094" y="3" width="21.8033" height="0.726776" rx="0.363388" transform="rotate(45 4.21094 3)" fill="white" />
                        </svg>
                    </button>

                    <Form />
                </div>
            </div>
        </div>
    )
}