"use client"
import Image from 'next/image';
import styles from './info.module.css';
import { Breadcrumbs } from '@/app/components';

import useLangStore from '@/app/store/languageStore';

export default function Page({ data }) {
    const { lang } = useLangStore();

    //const sanitizedContent = pageTextData || '';

    const header = data?.sections?.main[0]?.content?.[lang][0];
    const list_links = data?.sections?.main[1]?.content?.[lang];
    const format_text = data?.sections?.main[2]?.content?.[lang];
    //console.log(list_links);

    const link = {
        ru: 'Информационная безопасность',
        en: 'Information security',
        ch: '資訊安全'
    };

    return (
        <div className="container">
            <Breadcrumbs
                    link={'main'}
                    title={link[lang]}
                />

            <div className={styles.title_wrapper}>
                <h2 className={`title ${styles.half_title}`}>{header}</h2>
                <Image
                    src="/info-security/image-1.svg"
                    alt="Изображение"
                    width={125}
                    height={125}
                    className="dsv-image"
                />
            </div>

            <ul className={styles.link_wrapper}>
                {list_links && list_links?.map((link, index) => (
                    <li key={index}>
                        <a href={link.link} className={styles.link}>
                            <span>{link.title}</span>
                            <Image
                                src="/info-security/arrow-icon.svg"
                                alt="Изображение"
                                width={22}
                                height={22}
                                className="dsv-image"
                            />
                        </a>
                    </li>
                ))}
            </ul>

            <div className={styles.page_content} dangerouslySetInnerHTML={{ __html: format_text }}></div>
        </div>
    );
}