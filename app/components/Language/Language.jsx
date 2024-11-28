'use client';

import { useState } from "react";
import styles from "./language.module.css";

export default function Language() {
    const [lang, setLang] = useState(localStorage.getItem('language') || 'ru');

    const handleChange = (evt) => {
        setLang(evt.target.value);
        localStorage.setItem('language', evt.target.value);
    };

    return (
        <select onChange={handleChange} className={styles.select} value={lang}>
            <option value="ru">ru</option>
            <option value="en">en</option>
        </select>
    );
}
