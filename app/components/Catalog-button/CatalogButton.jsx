
import { useState } from "react";

import Image from "next/image";
import styles from "./style.module.css";

export default function CatalogButton() {
    const [opened, setOpened] = useState(false);

    const handleClick = () => {
        setOpened(!opened);
    }

    return (
        <button
            aria-label={opened ? 'Закрыть меню' : 'Открыть меню'}
            className={`${styles.button} ${opened ? styles.active : ''}`}
            onClick={handleClick}
        >
            <Image
                aria-hidden
                src={`${opened ? '/icons/close.svg' : '/icons/burger.svg'}`}
                alt="пин"
                width={20}
                height={17}
            />
            <span>Меню</span>
        </button>
    )
}
