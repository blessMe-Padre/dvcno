'use client';

import { useState, useEffect } from "react";
import styles from "./language.module.css";

export default function Language() {
    const [lang, setLang] = useState('ru');

    useEffect(() => {
        const storedLang = localStorage.getItem('language');
        if (storedLang) {
            setLang(storedLang);
        }
    }, []);

    const handleChange = (evt) => {
        const newLang = evt.target.value;
        setLang(newLang);
        localStorage.setItem('language', newLang);
    };

    return (
        <select onChange={handleChange} className={styles.select} value={lang}>
            <option value="ru">Ru</option>
            <option value="en">En</option>
            <option value="ch">Ch</option>
        </select>
    );
}
