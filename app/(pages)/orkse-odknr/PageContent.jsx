"use client"
import Image from 'next/image';
import styles from './style.module.css';
import { Breadcrumbs, DocumentComponent } from "@/app/components";
import icon from '@/public/ege/icon.svg';
import Link from 'next/link';

import useLangStore from '@/app/store/languageStore';
export default function Page({ data }) {
    const { lang } = useLangStore();

    const banner = data?.sections?.banner[0]?.content?.[lang];
    //console.log(banner);
    
    const link = {
        ru: 'ОРКСЭ/ОДКНР',
        en: 'ORKSE/ODKNR',
        ch: 'ORKSE/ODKNR'
    };

    return (
        <>
            <section>
                <div className="container">
                    <Breadcrumbs title={link[lang]} />

                    <div className={styles.bg_wrapper}>
                        <div className={styles.title_wrapper}>

                            <h2 className={styles.title}>{banner.title ?? "ОРКСЭ/ОДКНР"}</h2>

                            <Image 
                                className={styles.icon}
                                src={icon}
                                width={150}
                                height={100}
                                alt=''
                            />
                        </div>

                        <ul className={styles.document_link}>
                            {banner.links && banner.links.length > 0 ? (
                                banner.links.map((item, index) => (
                                    <li className={styles.link} key={index}>
                                        <Link href={item.document}>{item.title}</Link>
                                    </li>
                                ))
                            ) :
                                'данные не загружены'
                            }
                        </ul>

                         <ul className={styles.document_list}>
                            {banner.documents && banner.documents.length > 0 ? (
                                banner.documents.map((item, index) => (
                                    <li key={index}>
                                        <DocumentComponent title={item.title} link={item.document} />
                                    </li>
                                ))
                            ) :
                                'данные не загружены'
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}