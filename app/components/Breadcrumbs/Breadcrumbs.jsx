'use client';

import styles from "./style.module.css";
import Link from "next/link";
import useLangStore from '@/app/store/languageStore';

const HOME_TRANSLATIONS = {
    ru: 'Главная',
    en: 'Home',
    ch: '主页'
};

export default function Breadcrumbs({ slug, link, title }) {
    const { lang } = useLangStore();

    return (
        <nav className={styles.nav}>
            <Link href="/">
                {HOME_TRANSLATIONS[lang] || HOME_TRANSLATIONS.ru}
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