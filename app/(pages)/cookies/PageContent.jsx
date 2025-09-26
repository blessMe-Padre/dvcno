'use client'
import styles from './style.module.css';
import { Breadcrumbs, AnimateElement } from '@/app/components';
import useLangStore from '@/app/store/languageStore';
import { insertSafeContent } from '@/app/utils/insertSafeContent';

const languages = {
    ru: 'Куки',
    en: 'Cookies',
    ch: 'Cookies'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const content = data?.sections?.main?.[0]?.content?.[lang][0];

    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs
                        link={'/'}
                        title={languages[lang]}
                    />
                    <div className="api_content">
                        {insertSafeContent(content)}
                    </div>
                    <button className={`${styles.button} ${styles.button_reject}`}>Отклонить</button>

                </div>
            </section>
        </>
    )
}

export default PageContent