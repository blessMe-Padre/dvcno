'use client';

import { useEffect } from 'react';
import useLangStore from '@/app/store/languageStore';

export default function ClientLangInitializer({ children }) {
    const setLang = useLangStore((state) => state.setLang);

    useEffect(() => {
        const match = document.cookie.match(/language=([^;]+)/);
        const lang = match ? match[1] : 'ru';
        setLang(lang);
    }, []);

    return children;
}
