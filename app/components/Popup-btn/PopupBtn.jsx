import React from "react";
import styles from './style.module.css';



export default function PopupBtn({ title, children }) {
    
    const popupID = 1;
    
    const handleClick = (id) => {

    }


    return (
        <button
            id={popupID}
            onClick={() => handleClick(popupID)}
            className={styles.popup_btn}
            type="button"
        >
            {title}
        </button>
    )
}