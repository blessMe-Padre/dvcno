'use client';

import { useEffect } from "react";
import { useEffect } from "react";
import styles from "./language.module.css";
import useTranslationsStore from '@/app/store/translationsStore';
import { useRouter } from 'next/navigation';

const AVAILABLE_LANGUAGES = ['ru', 'en', 'ch'];
import useTranslationsStore from '@/app/store/translationsStore';
import { useRouter } from 'next/navigation';

const AVAILABLE_LANGUAGES = ['ru', 'en', 'ch'];

export default function Language() {
    const { currentLang, setLanguage } = useTranslationsStore();
    const router = useRouter();
    const { currentLang, setLanguage } = useTranslationsStore();
    const router = useRouter();

    const handleChange = (evt) => {
        const newLang = evt.target.value;
        setLanguage(newLang);
        router.refresh();
        const newLang = evt.target.value;
        setLanguage(newLang);
        router.refresh();
    };

    return (
        <select disabled onChange={handleChange} className={styles.select} value={currentLang}>
            {AVAILABLE_LANGUAGES.map(lang => (
                <option key={lang} value={lang}>
                    {lang === 'ru' ? 'Русский' : lang === 'en' ? 'English' : '中文'}
                </option>
            ))}
        </select>
    );
}
