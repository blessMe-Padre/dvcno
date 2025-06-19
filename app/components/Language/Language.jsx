'use client';

import { useEffect } from "react";
import styles from "./language.module.css";
import useTranslationsStore from '@/app/store/translationsStore';
import useLangStore from '@/app/store/languageStore';
import { useRouter } from 'next/navigation';

// const AVAILABLE_LANGUAGES = ['ru', 'en', 'ch'];
const AVAILABLE_LANGUAGES = ['ru', 'en'];

export default function Language() {
    const { lang, setLang } = useLangStore();

    const handleChange = (evt) => {
        const newLang = evt.target.value;
        setLang(newLang);
    };

    return (
        <>
            <label htmlFor="language-select" className="visually-hidden">
                Выбор языка
            </label>
            <select onChange={handleChange} className={styles.select} value={lang} id="language-select">
                {AVAILABLE_LANGUAGES.map(lang => (
                    <option key={lang} value={lang}>
                        {lang === 'ru' ? 'Русский' : lang === 'en' ? 'English' : '中文'}
                    </option>
                ))}
            </select>
        </>
    );
}
