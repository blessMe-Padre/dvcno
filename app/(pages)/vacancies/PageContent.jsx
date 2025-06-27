"use client"
import Image from 'next/image';
import styles from './style.module.css';
import { Breadcrumbs, DocumentComponent } from "@/app/components";
import Link from 'next/link';
import decor2 from '@/public/vacancies/decor.svg';
import arrow from '@/public/vacancies/arrow.svg';

import useLangStore from '@/app/store/languageStore';
export default function Page({ data }) {
    const { lang } = useLangStore();

    const header = data?.sections?.header[0]?.content?.[lang];
    const list_links = data?.sections?.list_links[0]?.content?.[lang]?.list;
    //console.log(banner);
    
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
                                <div className="relative">
                                    <p className={styles.item_job}>{item.job}</p>
                                    <Image
                                        className={styles.decor2}
                                        src={decor2}
                                        width={50}
                                        height={50}
                                        alt="image"
                                    />
                                </div>

                                <div className={styles.vacancies_item_info}>
                                    <p className={styles.vacancies_item_info_name}>{item.title}</p>
                                    <p className={styles.vacancies_item_info_address}>{item.address}</p>
                                </div>

                                <div>
                                    <p className={styles.vacancies_item_info_price}>{item.price}</p>
                                </div>

                                <div className={styles.button_wrapper}>
                                    <button className={styles.button}>
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
        </section>
    )
}