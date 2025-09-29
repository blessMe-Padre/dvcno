'use client'
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import Link from 'next/link';
import useLangStore from '@/app/store/languageStore';
import fetchApiServerData from '@/app/utils/fetchApiServerData';
import { insertSafeContent } from '@/app/utils/insertSafeContent';
import { cookiesStorage } from '@/app/utils/cookiesStorage';

export default function Cookies() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null);
    const { lang } = useLangStore();

    useEffect(() => {
        if (cookiesStorage.getItem('site_consent') === 'true' || cookiesStorage.getItem('site_consent') === 'false') {
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

    const handleClickReject = () => {
        setOpen(false);
        cookiesStorage.setItem('site_consent', 'false');
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
                onClick={handleClickReject}
            >
                Отклонить
            </button>
        </div>
    )
}
