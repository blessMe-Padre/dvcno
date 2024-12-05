'use client'
import { useState } from 'react';
import Image from "next/image";
import styles from "./style.module.css";

export default function Search() {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        setValue('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Поиск по сайту"
                className={styles.input}
                value={value}
                onChange={handleChange}
            />

            <button
                className={styles.delete}
                onClick={handleDelete}
            >
                <Image
                    src="/icons/close-black.svg"
                    alt="Удалить запрос"
                    width={20}
                    height={20}
                />
            </button>

            <button className={styles.submit} type="submit">
                Найти
            </button>
        </form>
    )
}

