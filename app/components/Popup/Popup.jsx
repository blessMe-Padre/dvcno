import React from "react";
import styles from './style.module.css';
import { Form } from "../Form/Form";



export default function Popup({ active, setActive }) {
    

    // const [opened, setOpened] = useState();

    return (
        <div className={`${styles.popup} ${active ? styles.popupActive : styles.popupNone}`} onClick={() => {setActive(false)}}>
            <div className={styles.popup__body}>
                
                <div className={styles.popup__content} onClick={e => e.stopPropagation()}>

                    <button 
                        className={styles.popup__close} 
                        onClick={() => { setActive(false) }}
                        >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2.80078" y="12.8408" width="14.1721" height="0.472405" rx="0.236202" transform="rotate(-45 2.80078 12.8408)" fill="white"/>
                            <rect x="3.58789" y="2.80078" width="14.1721" height="0.472405" rx="0.236202" transform="rotate(45 3.58789 2.80078)" fill="white"/>
                        </svg>
                    </button>
                    
                    <Form />
                </div>
            </div>
        </div>
    )
}