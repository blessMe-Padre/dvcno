
import { useState } from "react";

import Image from "next/image";
import styles from "./style.module.css";

export default function CatalogButton({ onClick, opened, text }) {

    return (
        <button
            aria-label={opened ? 'Закрыть меню' : 'Открыть меню'}
            className={`${styles.button} ${opened ? styles.active : ''}`}
            onClick={onClick}
        >
            <div id="nav-icon1"
                className={`${styles.nav_icon1} ${opened ? styles.open : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span>{text}</span>
        </button>
    )
}
