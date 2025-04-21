'use client';

import styles from "./style.module.css";
import Link from "next/link";
import useTranslationsStore from '@/app/store/translationsStore';

const HOME_TRANSLATIONS = {
    ru: 'Главная',
    en: 'Home',
    ch: '主页'
};

export default function Breadcrumbs({ slug, link, title }) {
    const { currentLang } = useTranslationsStore();

    console.log('slug', slug);
    console.log('link', link);
    console.log('title', title);

    return (
        <nav className={styles.nav}>
            <Link href="/">
                {HOME_TRANSLATIONS[currentLang] || HOME_TRANSLATIONS.ru}
            </Link>
            <span className={styles.separator}></span>
            {slug && (
                <>
                    <Link href={`/${link}/`}>
                        {slug}
                    </Link>
                    <span className={styles.separator}></span>
                </>
            )}
            <span className={styles.text}>{title}</span>
        </nav>
    );
}