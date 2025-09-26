'use client'
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import Link from 'next/link';
import useLangStore from '@/app/store/languageStore';
import fetchApiServerData from '@/app/utils/fetchApiServerData';
import { insertSafeContent } from '@/app/utils/insertSafeContent';

export default function Cookies() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null);
    const { lang } = useLangStore();

    const UTCDate = new Date(new Date().setMonth(new Date().getMonth() + 1)).toUTCString();
    const cookiesStorage = {
        getItem: (key) => {
            const cookies = document.cookie
                .split(';')
                .map(cookie => cookie.split('='))
                .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});

            return cookies[key];
        },
        setItem: (key, value) => {
            document.cookie = `${key}=${value};expires=${UTCDate}`;
        }
    }

    useEffect(() => {
        if (cookiesStorage.getItem('site_consent') === 'true') {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchApiServerData('settings/cookie');
            setData(data.data);
        }
        fetchData();
    }, []);

    const handleClick = () => {
        setOpen(false);
        cookiesStorage.setItem('site_consent', 'true');
    }

    return (
        <div className={`${styles.popup} ${open ? styles.popup_active : ''}`}>

            <div className={styles.cookie_message}>
                {insertSafeContent(data?.cookie_message?.[lang])}
            </div>

            <button
                className={styles.button}
                onClick={handleClick}
            >
                Принять
            </button>

            <button
                className={`${styles.button} ${styles.button_reject}`}
                onClick={handleClick}
            >
                Отклонить
            </button>
        </div>
    )
}
