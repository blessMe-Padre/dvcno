"use client"

import styles from './style.module.css';
import { Breadcrumbs, DocumentComponent, AnimateElement } from '@/app/components';
import useLangStore from '@/app/store/languageStore';

import decor from '@/public/about_center/decor2.svg';
import Image from 'next/image';

import { AnimateItems } from '@/app/components';

export default function Page({ data }) {
    const { lang } = useLangStore();

    const title = data?.sections?.main[0]?.content?.[lang];
    const listBlocks = data?.sections?.main[1]?.content?.[lang];

    const docsHeader = data?.sections?.docs[0]?.content?.[lang];
    const docs = data?.sections?.docs[1]?.content?.[lang];

    const languages = {
        ru: 'История',
        en: 'History',
        ch: 'ANPOO "DVTSNO" 的历史'
    };
    const about_center = {
        ru: 'О центре',
        en: 'About center',
        ch: '关于中心'
    };

    return (
        <>
            <section>
                <div className='container'>
                    <Breadcrumbs
                        slug={about_center[lang]}
                        link={'pages/about_center'}
                        title={languages[lang]}
                    />
                    <div className={styles.title_wrapper}>
                        <h2 className={styles.title}>{title}</h2>

                        <Image
                            className={styles.decor}
                            src={decor}
                            width={300}
                            height={100}
                            alt=''
                        />
                    </div>
                </div>
            </section>

            <section className={styles.list}>
                <div className='container'>
                    <AnimateItems data={listBlocks} />
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <AnimateElement element="h2" className={`${styles.title} text-left`}>
                        {docsHeader}
                    </AnimateElement>

                    <ul className={styles.docs_list}>
                        {docs && docs.length > 0 ? docs.map((item, index) => (
                            <AnimateElement element="li" key={index}>
                                <DocumentComponent
                                    title={item.title}
                                    link={item.url}
                                    background_color={''}
                                />
                            </AnimateElement>
                        )) : <li className={styles.no_docs}>документы не найдены</li>}
                    </ul>
                </div>
            </section>
        </>
    )
}