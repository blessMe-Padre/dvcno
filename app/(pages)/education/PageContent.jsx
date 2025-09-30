'use client'

import Card from "@/app/components/Cards/Card/Card";
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import useLangStore from '@/app/store/languageStore';
import { AnimateElement } from '@/app/components';

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
        <div className="container">
            <Breadcrumbs title={languages[lang]} />
            <AnimateElement element="h2" className={`title ${styles.title}`}>
                {contentPage?.main[0]?.content?.[lang]?.[0]}
            </AnimateElement>
            <AnimateElement element="div" className={styles.description}>
                <div
                    dangerouslySetInnerHTML={{ __html: contentPage?.main[1]?.content?.[lang]?.[0] }}
                />
            </AnimateElement>

            <ul className={styles.list}>
                {data && listBlock[lang] && listBlock[lang].length > 0 ? (
                    listBlock[lang].map((item, index) => (
                        <AnimateElement element="li" key={index} animationName='fadeLeft' animationDelay={index * 50}>
                            <Card
                                image={item.image}
                                description={item.title}
                                link={`${item.link}`}
                            />
                        </AnimateElement>
                    ))
                ) : (
                    <p className="span-error-message">Ошибка в получении данных</p>
                )}
            </ul>
        </div>
    )
}

export default PageContent