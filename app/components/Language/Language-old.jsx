'use client';

import { useEffect } from "react";
import styles from "./language.module.css";
import useLangStore from '@/app/store/languageStore';
import { useRouter } from 'next/navigation';

/**
 * TODO: добавить получение языков по api
 * http://134.0.118.139/api/v1/languages/
 */

// const AVAILABLE_LANGUAGES = ['ru', 'en', 'ch'];
const AVAILABLE_LANGUAGES = ['ru', 'en'];

export default function Language() {
    const { lang, setLang } = useLangStore();
    const handleChange = (evt) => {
        const newLang = evt.target.value;
        setLang(newLang);
    };

    return (
        <select onChange={handleChange} className={styles.select} value={lang}>
            {AVAILABLE_LANGUAGES.map(lang => (
                <option key={lang} value={lang}>
                    {lang === 'ru' ? 'Русский' : lang === 'en' ? 'English' : '中文'}
                </option>
            ))}
        </select>
    );
}
