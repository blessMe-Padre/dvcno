'use client'

import Card from "@/app/components/Cards/Card/Card";
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import useLangStore from '@/app/store/languageStore';

const languages = {
    ru: 'Международное сотрудничество',
    en: 'International cooperation',
    ch: 'International cooperation'
};
const languages2 = {
    ru: 'Сведения об образовательной организации',
    en: 'Information about the educational organization',
    ch: '教育機構資訊'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const educationPages = data?.sections?.main?.[2]?.content?.[lang];

    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs
                        slug={languages2[lang]}
                        link={'info'}
                        title={languages[lang]}
                    />

                    <h2 className={`title ${styles.title}`}>{data?.sections?.main?.[0]?.content[lang]?.title ?? 'Международное сотрудничество.'}</h2>
                    <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: data?.sections?.main?.[1]?.content[lang] }}></div>

                    <ul className={styles.list}>
                        {educationPages && educationPages.length > 0 ? (
                            educationPages.map((item) => (
                                <li key={item.id}>
                                    <Card
                                        image={item.image}
                                        description={item.title}
                                        link={item.link}
                                    />
                                </li>
                            ))
                        ) : (
                            <p className="span-error-message">Данные отсутствуют.</p>
                        )}
                    </ul>

                </div>
            </section>

        </>
    )
}

export default PageContent