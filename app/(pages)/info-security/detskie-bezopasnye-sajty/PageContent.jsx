"use client"
import Image from 'next/image';
import styles from '../info.module.css';
import { Breadcrumbs, DocumentComponent } from "@/app/components";

import useLangStore from '@/app/store/languageStore';
export default function Page({ data }) {
    const { lang } = useLangStore();

    const header = data?.sections?.main[0]?.content?.[lang];
    const list_docs = data?.sections?.main[1]?.content?.[lang];

    const link1 = {
        ru: 'Информационная безопасность',
        en: 'Information security',
        ch: '資訊安全'
    };
    const link2 = {
        ru: 'Детские безопасные сайты',
        en: 'Children\'s Safe Sites',
        ch: '兒童安全網站'
    };

    return (
        <div className="container">
            <Breadcrumbs
                slug={link1[lang]}
                link={'info-security'}
                title={link2[lang]}
            />

            <div className={styles.title_wrapper}>
                <h2 className={`title ${styles.half_title}`}>{header ?? 'Детские безопасные сайты'}</h2>
                <Image
                    src="/info-security/image-5.svg"
                    alt="Изображение"
                    width={125}
                    height={125}
                    className="dsv-image"
                />
            </div>

            <ul className={styles.site_list}>
                {list_docs.map((item, index) => (
                    <li className={styles.site_item} key={index}>
                        <div className={styles.site_header}>
                            <Image
                                src="/info-security/wold-icon.svg"
                                alt="Изображение"
                                width={40}
                                height={40}
                                className="dsv-image"
                            />
                            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
                        </div>
                        <div className={styles.site_description} dangerouslySetInnerHTML={{ __html: item?.content }}></div>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}