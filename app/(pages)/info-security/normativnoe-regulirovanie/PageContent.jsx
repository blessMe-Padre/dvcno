"use client"
import Image from 'next/image';
import styles from '../info.module.css';
import { Breadcrumbs, DocumentComponent } from "@/app/components";

import useLangStore from '@/app/store/languageStore';
export default function Page({ data }) {
    const { lang } = useLangStore();

    const header = data?.sections?.main[0]?.content?.[lang][0];
    const list_links = data?.sections?.main[1]?.content?.[lang];
    const header2 = data?.sections?.main2[0]?.content?.[lang][0];
    const list_links2 = data?.sections?.main2[1]?.content?.[lang];

    const link1 = {
        ru: 'Информационная безопасность',
        en: 'Information security',
        ch: '資訊安全'
    };
    const link2 = {
        ru: 'Нормативное регулирование',
        en: 'Normative regulation',
        ch: '規範性規定'
    };

    return (
        <div className="container">
            <Breadcrumbs
                slug={link1[lang]}
                link={'info-security'}
                title={link2[lang]}
            />

            <div className={styles.title_wrapper}>
                <h2 className={`title ${styles.half_title}`}>{header ?? 'Нормативное регулирование'}</h2>
                <Image
                    src="/info-security/image-3.svg"
                    alt="Изображение"
                    width={125}
                    height={125}
                    className="dsv-image"
                />
            </div>

            <ul className={styles.link_list}>
                {list_links && list_links.length > 0 ?
                    (
                        list_links.map((link, index) => (
                            <li key={index}>
                                <a href={link.link} target="_blank" rel="noopener noreferrer">{link.title}</a>
                            </li>
                        ))
                    ) : (<p>Данные не загружены</p>)
                }
            </ul>

            <div className={styles.title_wrapper}>
                <h2 className={`title ${styles.half_title} ${styles.small_title}`}>{header2}</h2>
                <Image
                    src="/info-security/image-4.svg"
                    alt="Изображение"
                    width={125}
                    height={125}
                    className="dsv-image"
                />
            </div>

            <ul className={styles.link_list}>
                {list_links2 && list_links2.length > 0 ?
                    (
                        list_links2.map((link, index) => (
                            <li key={index}>
                                <a href={link.link} target="_blank" rel="noopener noreferrer">{link.title}</a>
                            </li>
                        ))
                    ) : (<p>Данные не загружены</p>)
                }
            </ul>
        </div>
    )
}