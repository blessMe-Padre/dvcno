'use client'
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import styles from "./style.module.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Search() {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const timerRef = useRef(null);

    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname();    
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const handleChange = (e) => {
        setValue(e.target.value);

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            handleSubmit(value);
        }, 500);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        setValue('');
    }

    const handleSubmit = async (e) => {

        //e.preventDefault();

        try {
            const url = `${process.env.NEXT_PUBLIC_API_TEST_SERVER}/api/ajax/live_search?value=${encodeURIComponent(value)}`;

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
            console.log(result);

            

        } catch (error) {
            console.error('Ошибка загрузки Объектов:', error);
        }
    };

    return (
        <>
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

            {data?.length > 0 && isOpen && (
                <div className={styles.search_res}>
                {data?.map((item, index) => (
                    <Link href={item.url} onclick={() => setIsOpen(false)}>{item.title}</Link>
                    ))}
                </div>
            )}
        </>
    )
}

