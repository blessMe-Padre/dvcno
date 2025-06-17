"use client"

import styles from './style.module.css';
import { Breadcrumbs, DocumentComponent } from '@/app/components';
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
    //console.log('ru ', data?.sections?.main[1]?.content?.['ru']);
    console.log(docs);

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
                    <h2 className={styles.title} style={{ textAlign: 'start' }}>{docsHeader}</h2>
                    <DocumentComponent
                        title={docs[0].title}
                        link={docs[0].url}

                        background_color={''}
                    />

                </div>
            </section>
        </>
    )
}