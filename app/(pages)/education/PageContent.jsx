'use client'

import Card from "@/app/components/Cards/Card/Card";
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import useLangStore from '@/app/store/languageStore';

const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const contentPage = data?.sections;
    const listBlock = data?.sections?.main[2]?.content;

    const languages = {
        ru: 'Обучение',
        en: 'Training',
        ch: '教育'
    };

    return (
        <>
            <Breadcrumbs title={languages[lang]} />
            <h2 className={`title ${styles.title}`}>{contentPage?.main[0]?.content?.[lang]?.[0]}</h2>
            <div className={styles.description}
                dangerouslySetInnerHTML={{ __html: contentPage?.main[1]?.content?.[lang]?.[0] }}
            />

            <ul className={styles.list}>
                {data && listBlock[lang] && listBlock[lang].length > 0 ? (
                    listBlock[lang].map((item, index) => (
                        <li key={index}>
                            <Card
                                image={`${process.env.NEXT_PUBLIC_API_SERVER}${item.img}`}
                                description={item.text}
                                link={`education/${item.url}`}
                            />
                        </li>
                    ))
                ) : (
                    <p className="span-error-message">Ошибка в получении данных</p>
                )}
            </ul>
        </>
    )
}

export default PageContent