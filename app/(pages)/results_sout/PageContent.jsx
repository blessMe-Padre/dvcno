"use client"
import Image from 'next/image';
import styles from './style.module.css';
import { Breadcrumbs, DocumentComponent } from "@/app/components";
import Link from 'next/link';

import useLangStore from '@/app/store/languageStore';
export default function Page({ data }) {
    const { lang } = useLangStore();

    const header = data?.sections?.header[0]?.content?.[lang];
    const list_docs = data?.sections?.list_docs[0]?.content?.[lang]?.list;
    //console.log(banner);
    
    const link = {
        ru: 'Результаты СОУТ',
        en: 'Results of SOUT',
        ch: '工作條件專案評估結果'
    };

    const groupedStandards = list_docs.reduce((acc, item) => {
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
                        {list_docs && list_docs.length > 0 ? (
                            Object.entries(groupedStandards).map(([name, items]) => (
                                <li className={styles.item_object} key={name}>
                                    <p className={`${styles.item_name} ${items[0].background === 'yellow' ? styles.background_yellow : ''
                                        } ${items[0].background === 'light-blue' ? styles.background_light_blue : ''} ${items[0].background === 'green' ? styles.background_green : ''
                                        } ${items[0].background === 'violet' ? styles.background_violet : ''}`}>
                                        {name}
                                    </p>
                                    <ul className={styles.document_list}>
                                        {items.map((item, index) => (
                                            <DocumentComponent key={index} title={item.title} link={item.document} />
                                        ))}
                                    </ul>
                                </li>
                            ))
                        ) :
                            'данные не загружены'
                        }
                    </ul>

                </div>
            </section>
        </>
    )
}