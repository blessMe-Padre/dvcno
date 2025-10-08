'use client'
import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import styles from "./style.module.css";
import Link from 'next/link';
import useLangStore from '@/app/store/languageStore';


import { useRouter } from 'next/navigation';

//   const url = `${process.env.NEXT_PUBLIC_API_SERVER}/api/ajax/live_search?value=${encodeURIComponent(inputValue)}`;

export default function Search() {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [dataList, setData] = useState([]);
    const [isFocused, setIsFocused] = useState(false);

    const { lang } = useLangStore();

    const router = useRouter();
    const debounceTimeout = useRef(null);

    const handleDelete = (e) => {
        e.preventDefault();
        setInputValue('');
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;
        // Редирект
        router.push(`/search?query=${encodeURIComponent(inputValue.trim())}`);
        setIsFocused(false);
    };

    const handleKeyUp = (e) => {
        e.preventDefault();

        if (e.key === "Enter") {
            // Редирект
            router.push(`/search?query=${encodeURIComponent(inputValue.trim())}`);
            setIsFocused(false);
        }
    }

    const highlightText = (text, highlight) => {
        if (!highlight) return text;

        const regex = new RegExp(`(${highlight})`, 'i');
        const match = text.match(regex);

        if (!match) return text;

        const parts = text.split(regex);
        return (
            <>
                {parts[0]}
                <mark>{parts[1]}</mark>
                {parts[2]}
            </>
        );
    };

    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current)
        }

        if (inputValue.trim() === '') {
            setData([])
            return
        }

        setLoading(true)
        debounceTimeout.current = setTimeout(async () => {
            try {
                const url = `${process.env.NEXT_PUBLIC_API_SERVER}/api/ajax/live_search?value=${encodeURIComponent(inputValue)}&lang=${lang}`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
                if (response === 'error') {
                    throw new Error(`Ошибка HTTP live_search: ${response.status}`);
                }

                const result = await response.json();

                setData(result?.data);
                setLoading(false);
            } catch (error) {
                console.error('Ошибка загрузки Объектов:', error)
                setLoading(false);
            }
        }, 1000)

        return () => clearTimeout(debounceTimeout.current)
    }, [inputValue])

    const placeholder = lang === 'ru' ? 'Поиск' : 'Search';
    const buttonText = lang === 'ru' ? 'Найти' : 'Search';
    const continueText = lang === 'ru' ? 'Начните печатать' : 'Continue typing';

    return (
        <>
            <div className={styles.wrapper}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={() => setIsFocused(true)}
                    onKeyUp={handleKeyUp}
                    onBlur={() => setTimeout(() => setIsFocused(false), 1000)} // задержка, чтобы кликнуть по элементу
                    className={styles.input}
                    placeholder={placeholder}
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

                <button className={styles.submit} type="submit" onClick={handleSearchSubmit}>
                    {buttonText}
                </button>
            </div>
            {
                isFocused && (
                    <ul className={styles.list}>
                        {inputValue.trim() === '' && <li>{continueText}</li>}
                        {loading && <span className="loader loader-search"></span>}
                        {!loading && dataList.length === 0 && inputValue.trim() !== '' && (
                            <li>Ничего не найдено</li>
                        )}

                        {
                            !loading &&
                            dataList.map((item, index) => {
                                return (
                                    <li key={index} className={styles.item}>
                                        <Link href={item.url}
                                            className={styles.item_link}
                                        >
                                            {highlightText(item?.title, inputValue)}
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                )
            }

        </>
    )
}

