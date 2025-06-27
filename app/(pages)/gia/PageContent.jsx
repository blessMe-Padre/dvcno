"use client"
import Image from 'next/image';
import styles from './style.module.css';
import { Breadcrumbs, DocumentComponent } from "@/app/components";

import useLangStore from '@/app/store/languageStore';
export default function Page({ data }) {
    const { lang } = useLangStore();

    const header = data?.sections?.banner[0]?.content?.[lang][0];
    const list_links = data?.sections?.banner[1]?.content?.[lang];
    const banner = data?.sections?.banner[2]?.content?.[lang][0];
     const main1_header = data?.sections?.main1[0]?.content?.[lang][0];
    const main1_list_docs = data?.sections?.main1[1]?.content?.[lang]?.list;
    const main2_header = data?.sections?.main2[0]?.content?.[lang][0];
    const main2_list_docs = data?.sections?.main2[1]?.content?.[lang]?.list;
    //console.log(banner);
    
    const link1 = {
        ru: 'ГИА',
        en: 'GIA',
        ch: '美國寶石研究院'
    };

    return (
        <div className="container">
            <Breadcrumbs
                title={link1[lang]}
            />

            <h1 className={`title ${styles.half_title}`}>{header ?? "ГИА"}</h1>

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

            <section className={`${styles.hero} section-dsv`}>
                <div className={styles.title_wrapper}>
                    <h2 className={`title ${styles.half_title} title-white`}>{banner.title}</h2>
                    <Image
                        src="/gia/image-1.svg"
                        alt="Изображение"
                        width={125}
                        height={125}
                        className={`${styles.title_img} dsv-image`}
                    />
                </div>

                <div className={styles.subtitle}>
                    <p>{banner.content}</p>
                </div>

                <div className={styles.page_content} dangerouslySetInnerHTML={{ __html: banner.description }}></div>
            </section>

            <section className={styles.method}>
                <div className={styles.title_wrapper}>
                    <h2 className={`title ${styles.half_title}`}>{main1_header}</h2>
                    <Image
                        src="/gia/image-2.svg"
                        alt="Изображение"
                        width={227}
                        height={122}
                        className="dsv-image"
                    />
                </div>

                <ul className={styles.document_list}>
                    {main1_list_docs && main1_list_docs.length > 0 ? (
                        main1_list_docs.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.document} />
                            </li>
                        ))
                    ) :
                        'данные не загружены'
                    }
                </ul>
            </section>

            <section className={styles.use_info}>
                <h2 className={`title ${styles.half_title} title-white`}>{main2_header}</h2>
                <svg width="302" height="18" viewBox="0 0 302 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 14.1279C49.5326 16.1054 146.926 17.0941 167.297 14.1279C191.215 10.6452 119.677 5.51891 159.148 3.00441C199.891 0.408926 247.617 3.00441 300 8.93693" stroke="#433C8C" strokeWidth="3" strokeLinecap="round" />
                </svg>
            </section>

            <ul className={styles.document_list}>
                {main2_list_docs && main2_list_docs.length > 0 ? (
                    main2_list_docs.map((item, index) => (
                        <li key={index}>
                            <DocumentComponent title={item.title} link={item.document} />
                        </li>
                    ))
                ) :
                    'данные не загружены'
                }
            </ul>

        </div>
    )
}