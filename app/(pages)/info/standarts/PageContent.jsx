'use client'

import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import { DocumentComponent } from "@/app/components";
import useLangStore from '@/app/store/languageStore';

const languages = {
    ru: 'Образовательные стандарты и требования',
    en: 'Educational standards.',
    ch: '教育標準和要求。'
};
const languages2 = {
    ru: 'Сведения об образовательной организации',
    en: 'Information about the educational organization',
    ch: '教育機構資訊'
};


const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const list = data?.sections?.list;
    const docsList = data?.sections?.programs?.[1]?.content?.[lang]?.list;

    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs
                        slug={languages2[lang]}
                        link={'info'}
                        title={languages[lang]}
                    />

                    <h2 className={`title ${styles.title}`}>{data?.sections?.main?.[0]?.content?.[lang] ?? 'Образовательные стандарты и требования.'}</h2>

                    <ul>
                        {list && list.length > 0 ?
                            (
                                list.map((item, index) => {
                                    const content = item?.content?.[lang];
                                    return (
                                        <li className={styles.item} key={index}>
                                            <p className={`${styles.item_name}`}>
                                                {content.title}
                                            </p>
                                            <ul className={styles.document_list}>
                                                {content?.list.map((item, index) => (
                                                    <DocumentComponent key={index} title={item.title} link={item.document} />
                                                ))}
                                            </ul>
                                        </li>
                                    )
                                })
                            ) : (<p>Данные не загружены</p>)
                        }
                    </ul>

                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <h2 className={`title ${styles.title}`}>{data?.sections?.programs?.[0]?.content?.[lang] ?? 'Федеральные образовательные программы'}</h2>


                    <ul className={styles.document_list}>
                        {docsList && docsList.length > 0 ?
                            (
                                docsList.map((item, index) => (
                                    <li key={index}>
                                        <DocumentComponent title={item.title} link={item.document} />
                                    </li>
                                ))
                            ) : (<p>Данные не загружены</p>)
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default PageContent