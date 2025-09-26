"use client"
import Image from 'next/image';
import styles from './style.module.css';
import { Breadcrumbs, DocumentComponent } from "@/app/components";
import Link from 'next/link';

import useLangStore from '@/app/store/languageStore';
export default function Page({ data }) {
    const { lang } = useLangStore();

    const header = data?.sections?.header[0]?.content?.[lang];
    const list_docs1 = data?.sections?.list_docs1[0]?.content?.[lang];
    const list_docs2 = data?.sections?.list_docs2[0]?.content?.[lang];
    const list_docs3 = data?.sections?.list_docs3[0]?.content?.[lang];
    const list_docs4 = data?.sections?.list_docs4[0]?.content?.[lang];
    const list_docs5 = data?.sections?.list_docs5[0]?.content?.[lang];
    const list_docs6 = data?.sections?.list_docs6[0]?.content?.[lang];
    const list_docs7 = data?.sections?.list_docs7[0]?.content?.[lang];

    const link = {
        ru: 'Результаты СОУТ',
        en: 'Results of SOUT',
        ch: '工作條件專案評估結果'
    };

    const groupedStandards = list_docs1.list.reduce((acc, item) => {
        acc[item.name] = acc[item.name] || [];
        acc[item.name].push(item);
        return acc;
    }, {});

    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs
                        title={link[lang]}
                    />

                    <h2 className={`title ${styles.title}`}>{header ?? "Результаты СОУТ"}</h2>

                    <ul>
                        {list_docs1 && list_docs1.list.length > 0 ? (
                            <li className={styles.item_object}>
                                <p className={`${styles.item_name} ${styles.background_yellow}`}>
                                    {list_docs1.title}
                                </p>
                                <ul className={styles.document_list}>
                                    {list_docs1.list.map((item, index) => (
                                        <DocumentComponent key={index} title={item.title} link={item.document} />
                                    ))}
                                </ul>
                            </li>
                        ) :
                            'данные не загружены'
                        }

                        {list_docs2 && list_docs2.list.length > 0 ? (

                            <li className={styles.item_object}>
                                <p className={`${styles.item_name} ${styles.background_light_blue}`}>
                                    {list_docs2.title}
                                </p>
                                <ul className={styles.document_list}>
                                    {list_docs2.list.map((item, index) => (
                                        <DocumentComponent key={index} title={item.title} link={item.document} />
                                    ))}
                                </ul>
                            </li>
                        ) :
                            'данные не загружены'
                        }

                        {list_docs3 && list_docs3.list.length > 0 ? (

                            <li className={styles.item_object}>
                                <p className={`${styles.item_name} ${styles.background_green}`}>
                                    {list_docs3.title}
                                </p>
                                <ul className={styles.document_list}>
                                    {list_docs3.list.map((item, index) => (
                                        <DocumentComponent key={index} title={item.title} link={item.document} />
                                    ))}
                                </ul>
                            </li>
                        ) :
                            'данные не загружены'
                        }

                        {list_docs4 && list_docs4.list.length > 0 ? (

                            <li className={styles.item_object}>
                                <p className={`${styles.item_name} ${styles.background_violet}`}>
                                    {list_docs4.title}
                                </p>
                                <ul className={styles.document_list}>
                                    {list_docs4.list.map((item, index) => (
                                        <DocumentComponent key={index} title={item.title} link={item.document} />
                                    ))}
                                </ul>
                            </li>
                        ) :
                            'данные не загружены'
                        }

                        {list_docs5 && list_docs5.list.length > 0 ? (

                            <li className={styles.item_object}>
                                <p className={`${styles.item_name} ${styles.background_yellow}`}>
                                    {list_docs5.title}
                                </p>
                                <ul className={styles.document_list}>
                                    {list_docs5.list.map((item, index) => (
                                        <DocumentComponent key={index} title={item.title} link={item.document} />
                                    ))}
                                </ul>
                            </li>
                        ) :
                            'данные не загружены'
                        }

                        {list_docs6 && list_docs6.list.length > 0 ? (

                            <li className={styles.item_object}>
                                <p className={`${styles.item_name} ${styles.background_light_blue}`}>
                                    {list_docs6.title}
                                </p>
                                <ul className={styles.document_list}>
                                    {list_docs6.list.map((item, index) => (
                                        <DocumentComponent key={index} title={item.title} link={item.document} />
                                    ))}
                                </ul>
                            </li>
                        ) :
                            'данные не загружены'
                        }

                        {list_docs7 && list_docs7.list.length > 0 ? (

                            <li className={styles.item_object}>
                                <p className={`${styles.item_name} ${styles.background_green}`}>
                                    {list_docs7.title}
                                </p>
                                <ul className={styles.document_list}>
                                    {list_docs7.list.map((item, index) => (
                                        <DocumentComponent key={index} title={item.title} link={item.document} />
                                    ))}
                                </ul>
                            </li>
                        ) :
                            'данные не загружены'
                        }

                    </ul>

                </div>
            </section>
        </>
    )
}