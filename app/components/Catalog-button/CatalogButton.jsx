
import { useState } from "react";

import Image from "next/image";
import styles from "./style.module.css";

export default function CatalogButton({ onClick, opened }) {

    return (
        <button
            aria-label={opened ? 'Закрыть меню' : 'Открыть меню'}
            className={`${styles.button} ${opened ? styles.active : ''}`}
            onClick={onClick}
        >
            {/* <Image
                aria-hidden
                src={`${opened ? '/icons/close.svg' : '/icons/burger.svg'}`}
                alt="пин"
                width={20}
                height={17}
            /> */}
            <div id="nav-icon1"
                className={`${styles.nav_icon1} ${opened ? styles.open : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span>Меню</span>
        </button>
    )
}
