'use client'
import styles from './style.module.css';
import { Breadcrumbs, AnimateElement } from '@/app/components';
import useLangStore from '@/app/store/languageStore';
import { insertSafeContent } from '@/app/utils/insertSafeContent';
import { cookiesStorage } from '@/app/utils/cookiesStorage';
import { useState, useEffect } from 'react';

const languages = {
    ru: 'Куки',
    en: 'Cookies',
    ch: 'Cookies'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const content = data?.sections?.main?.[0]?.content?.[lang][0];
    const [consent, setConsent] = useState(null);

    useEffect(() => {
        // Только на клиенте
        const value = cookiesStorage.getItem('site_consent');
        setConsent(value);
    }, []);

    const handleClickReject = () => {
        cookiesStorage.setItem('site_consent', 'false');
        window.location.reload();
    }

    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs
                        link={'/'}
                        title={languages[lang]}
                    />

                    <div className="api_content" dangerouslySetInnerHTML={{ __html: content }} />

                    <button
                        className={`${styles.button} ${styles.button_reject}`}
                        onClick={handleClickReject}
                        disabled={consent === 'false'}
                    // 
                    >Отклонить</button>
                </div>
            </section>
        </>
    )
}

export default PageContent