"use client"
import { useState } from "react";
import Image from 'next/image';
import styles from './style.module.css';
import { Breadcrumbs } from "@/app/components";
import decor2 from '@/public/vacancies/decor.svg';
import arrow from '@/public/vacancies/arrow.svg';
import { Popup } from "@/app/components";

import useLangStore from '@/app/store/languageStore';
export default function Page({ data }) {
    const { lang } = useLangStore();
    const [popupActive, setPopupActive] = useState(false);

    const header = data?.sections?.header[0]?.content?.[lang]?.title;
    const list_links = data?.sections?.vacancies[0]?.content?.[lang];

    const link = {
        ru: 'Вакансии',
        en: 'Vacancies',
        ch: '職位空缺'
    };

    return (

        <section className={styles.section}>
            <div className="container">

                <Breadcrumbs title={link[lang]} />

                <h2 className={`title ${styles.title}`}>{header ?? "Вакансии"}</h2>

                <ul className={styles.vacancies_list}>
                    {list_links && list_links.length > 0 ? (
                        list_links.map((item, index) => (
                            <li key={index} className={styles.vacancies_item}>
                                <div>
                                    <div className="relative">
                                        <p className={styles.item_job}>{item.title}</p>
                                        <Image
                                            className={styles.decor2}
                                            src={decor2}
                                            width={50}
                                            height={50}
                                            alt="image"
                                        />
                                    </div>
                                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: item.content }}></div>
                                </div>

                                <div className={styles.button_wrapper}>
                                    <button className={styles.button} onClick={() => setPopupActive(true)}>
                                        <p>Откликнуться</p>
                                        <Image
                                            src={arrow}
                                            width={25}
                                            height={25}
                                            alt="image"
                                        />
                                    </button>
                                </div>
                            </li>
                        ))
                    ) :
                        'данные не загружены'
                    }
                </ul>

            </div>
            <Popup active={popupActive} setActive={setPopupActive} />
        </section>
    )
}