'use client'

import Card from "@/app/components/Cards/Card/Card";
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import { DocumentComponent } from "@/app/components";

import useLangStore from '@/app/store/languageStore';

const languages = {
    ru: 'Организация питания в образовательной организации',
    en: 'Organization of catering in an educational institution',
    ch: '教育機構餐飲組織'
};
const languages2 = {
    ru: 'Сведения об образовательной организации',
    en: 'Information about the educational organization',
    ch: '教育機構資訊'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const educationPages = data?.sections?.main?.[1]?.content[lang];
    // const data_documents = data?.sections?.docs?.[1]?.content[lang]?.list;

    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs
                        slug={languages2[lang]}
                        link={'info'}
                        title={languages[lang]}
                    />
                    <h2 className={`title ${styles.title}`}>
                        {data?.sections?.main?.[0]?.content[lang]?.title ?? 'Организация питания в образовательной организации.'}
                    </h2>

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

            {/* <section className={styles.section}>
                <div className="container">
                    <h2 className={`title ${styles.title}`}>{data?.sections?.docs?.[0]?.content[lang]?.title ?? 'Документы'}</h2>


                    <ul className={styles.document_list}>
                        {data_documents.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.document} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section> */}
        </>
    )
}

export default PageContent