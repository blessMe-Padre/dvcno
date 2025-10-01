'use client'
import styles from './style.module.css';
import { Breadcrumbs, AnimateElement } from '@/app/components';
import { ComponentMap, ContactsList } from '@/app/components';
import useLangStore from '@/app/store/languageStore';

const languages = {
    ru: 'Контакты',
    en: 'Contacts',
    ch: '聯絡方式'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const data_contacts = data?.sections?.header?.[1]?.content[lang];

    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs
                        link={'/'}
                        title={languages[lang]}
                    />
                    <AnimateElement element="h2" className={styles.title}>
                        {data?.sections?.header?.[0]?.content[lang]?.title ?? 'Контакты'}
                    </AnimateElement>
                    <ContactsList data={data_contacts} />
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.title}>Схема проезда</h2>
                    <ComponentMap />
                </div>
            </section>
        </>
    )
}

export default PageContent