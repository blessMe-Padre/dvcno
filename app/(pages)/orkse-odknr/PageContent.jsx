"use client"
import Image from 'next/image';
import styles from './style.module.css';
import { Breadcrumbs, DocumentComponent } from "@/app/components";
import icon from '@/public/ege/icon.svg';
import Link from 'next/link';
import { insertSafeContent } from "@/app/utils/insertSafeContent";

import useLangStore from '@/app/store/languageStore';
export default function Page({ data }) {
    const { lang } = useLangStore();
    const banner = data?.sections?.banner[0]?.content?.[lang];
    const link = {
        ru: 'ОРКСЭ/ОДКНР',
        en: 'ORKSE/ODKNR',
        ch: 'ORKSE/ODKNR'
    };

    console.log('banner', banner);

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

                        <div className={`${styles.document_list} api_content`}>
                            {banner?.content ? (
                                insertSafeContent(banner?.content)
                            ) : (<p>данные не загружены</p>)
                            }
                        </div>

                        <ul className={styles.document_list}>
                            {banner.documents && banner.documents.length > 0 ? (
                                banner.documents.map((item, index) => (
                                    <li key={index}>
                                        <DocumentComponent title={item.title} link={item.document} />
                                    </li>
                                ))
                            ) :
                                ''
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}