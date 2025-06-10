'use client'
import { useState } from 'react';
import Image from "next/image";
import styles from "./style.module.css";

export default function Search() {
    const [value, setValue] = useState('');
    const [data, setData] = useState(null);

    console.log(data);


    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        setValue('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const url = `${process.env.NEXT_PUBLIC_API_SERVER}/api/ajax/live_search?value=${encodeURIComponent(value)}`;

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(`Ошибка HTTP live_search: ${response.status}`);
            }

            const result = await response.json();
            setData(result);

        } catch (error) {
            console.error('Ошибка загрузки Объектов:', error);
        }
    };

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

