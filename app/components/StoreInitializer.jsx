'use client';

import { useEffect } from 'react';
import useTranslationsStore from '@/app/store/translationsStore';

export function StoreInitializer({ lang, children }) {
    const setLanguage = useTranslationsStore(state => state.setLanguage);
    const fetchTranslations = useTranslationsStore(state => state.fetchTranslations);
    
    useEffect(() => {
        setLanguage(lang);
        fetchTranslations();
    }, [lang, setLanguage, fetchTranslations]);
    
    return children;
} 