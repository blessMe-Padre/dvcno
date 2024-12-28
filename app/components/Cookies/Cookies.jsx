'use client'
import { useEffect, useState } from 'react';
import styles from './style.module.css';

export default function Cookies() {
    const [open, setOpen] = useState(false);

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

    const handleClick = () => {
        setOpen(false);
        cookiesStorage.setItem('site_consent', 'true');
    }

    return (
        <div className={`${styles.popup} ${open ? styles.popup_active : ''}`}>
            <span>Мы используем куки</span>

            <button
                className={styles.button}
                onClick={handleClick}
            >
                ок
            </button>
        </div>
    )
}
