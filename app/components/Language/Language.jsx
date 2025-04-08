'use client';

import { useState, useEffect } from "react";
import styles from "./language.module.css";
import { getAvailableLanguages, getDefaultLanguage } from '@/app/utils/translations';
import { useRouter } from 'next/navigation';

export default function Language() {
    const [lang, setLang] = useState(getDefaultLanguage());
    const availableLanguages = getAvailableLanguages();
    const router = useRouter();

    useEffect(() => {
        // Получаем текущий язык из cookie при монтировании компонента
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        };
        
        const currentLang = getCookie('language') || getDefaultLanguage();
        setLang(currentLang);
    }, []);

    const handleChange = async (evt) => {
        const newLang = evt.target.value;
        setLang(newLang);
        
        // Устанавливаем cookie
        document.cookie = `language=${newLang}; path=/; max-age=31536000`; // cookie на 1 год
        
        // Обновляем страницу для применения нового языка
        router.refresh();
    };

    return (
        <select onChange={handleChange} className={styles.select} value={lang}>
            {availableLanguages.map(lang => (
                <option key={lang} value={lang}>
                    {lang === 'ru' ? 'Русский' : lang === 'en' ? 'English' : '中文'}
                </option>
            ))}
        </select>
    );
}
