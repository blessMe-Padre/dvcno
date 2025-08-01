
"use client"
import React from "react"
import { Breadcrumbs, SlideMain, Accordion } from '@/app/components';

import useLangStore from '@/app/store/languageStore';

import Image from 'next/image';
import styles from '../education.module.css';
import { Division } from '@/app/sections';

export default function Page({ data }) {
    const { lang } = useLangStore();

    const hero = data?.sections?.main[0]?.content?.[lang];
    const desc = data?.sections?.desc[0]?.content?.[lang];
    const structure = data?.sections?.structure;

    const link1 = {
        ru: 'Обучение',
        en: 'Training',
        ch: '培训课程'
    };
    const link2 = {
        ru: 'Среднее общее образование в ДВЦНО',
        en: 'Secondary general education in DVTSNO',
        ch: 'DVTSNO的中學普通教育'
    };
    const learn_more = {
        ru: 'Узнать подробнее',
        en: 'Learn more',
        ch: '了解更多'
    };

    return (
        <>
            <div className='container'>
                <Breadcrumbs
                    slug={link1[lang]}
                    link={'education'}
                    title={link2[lang]}
                />
                <section className={styles.hero_section}>
                    <SlideMain item={hero} learn_more={learn_more[lang]} />
                </section>

                <section className={`${styles.section} section-dsv`}>
                    <div className='container'>
                        <div className={styles.row}>
                            <div>
                                <h2 className={`${styles.title} ${styles.text_white}`}>{desc?.[0]?.title}
                                    <span className={`${styles.sticker} ${styles.sticker_new}`}>{desc?.[0]?.subtitle}</span>
                                </h2>
                                <div className={styles.text} dangerouslySetInnerHTML={{ __html: desc?.[0]?.content }}></div>

                            </div>
                            <div className={styles.image_wrapper}>
                                <Image
                                    aria-hidden
                                    src="/education/image-11.jpg"
                                    alt="Дошкольные группы"
                                    width={671}
                                    height={619}
                                    className={`${styles.image} dsv-image`}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <Division divisionData={structure} lang={lang} />
            </div>
        </>
    )
}
