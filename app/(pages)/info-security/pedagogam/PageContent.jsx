"use client"
import Image from 'next/image';
import styles from '../info.module.css';
import { Breadcrumbs, DocumentComponent } from "@/app/components";

import useLangStore from '@/app/store/languageStore';
export default function Page({ data }) {
    const { lang } = useLangStore();

    const banner = data?.sections?.banner[0]?.content?.[lang];
    const main1_header = data?.sections?.main[0]?.content?.[lang][0];
    const list_links = data?.sections?.main[1]?.content?.[lang];
    const main2_header = data?.sections?.main2[0]?.content?.[lang][0];
    const main2_format_text = data?.sections?.main2[1]?.content?.[lang][0];
    const main2_list_links = data?.sections?.main2[2]?.content?.[lang];
    const main3_header = data?.sections?.main3[0]?.content?.[lang][0];
    const main3_format_text = data?.sections?.main3[1]?.content?.[lang][0];
    const main3_list_links = data?.sections?.main3[2]?.content?.[lang];
    //console.log(banner);
    
    const link1 = {
        ru: 'Информационная безопасность',
        en: 'Information security',
        ch: '資訊安全'
    };
    const link2 = {
        ru: 'Педагогам',
        en: 'For teachers',
        ch: '對於教師'
    };

    return (
        <>
            <div className="container">
                <Breadcrumbs
                    slug={link1[lang]}
                    link={'info-security'}
                    title={link2[lang]}
                />

                <section className={`${styles.hero} section-dsv`}>
                    <h1 className={`title title-black`}>{banner.title}</h1>

                    <div className={styles.document_wrapper}>
                        <DocumentComponent title={banner.list_docs[0].title} />
                    </div>
                </section>

                <section className={styles.method}>
                    <div className={styles.title_wrapper}>
                        <h2 className={`title ${styles.half_title}`}>{main1_header}</h2>
                        <Image
                            src="/info-security/image-6.svg"
                            alt="Изображение"
                            width={121}
                            height={121}
                            className="dsv-image"
                        />
                    </div>

                    <ul className={styles.document_list}>
                        {list_links.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.link} />
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            <section className={styles.recommended}>
                <div className="container">
                    <div className={styles.title_wrapper}>
                        <h2 className={`title ${styles.half_title} title-black`}>{main2_header}</h2>
                        <Image
                            src="/info-security/image-7.svg"
                            alt="Изображение"
                            width={121}
                            height={121}
                            className="dsv-image"
                        />
                    </div>
                    <div className={styles.page_content}>
                        <p className="title-black">{main2_format_text}</p>
                    </div>

                    <ul className={styles.document_list}>
                        {main2_list_links.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.link} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <div className="container">
                <section>
                    <div className={styles.title_wrapper}>
                        <h2 className={`title ${styles.half_title}`}>{main3_header}</h2>
                        <Image
                            src="/info-security/image-8.svg"
                            alt="Изображение"
                            width={121}
                            height={121}
                            className="dsv-image"
                        />
                    </div>
                    <div className={styles.page_content}>
                        <p>{main3_format_text}</p>
                    </div>

                    <ul className={styles.help_list}>
                        <li className={styles.help_item}>
                            <div className={styles.help_count}>01</div>
                            <h3 className={styles.help_title}>{main3_list_links[0].title}</h3>
                            <div className={styles.help_content} dangerouslySetInnerHTML={{ __html: main3_list_links[0].description }}></div>
                        </li>
                        <li className={`${styles.help_item} ${styles.help_item_bg}`}>
                            <div className={`${styles.help_count} ${styles.help_count_green}`}>02</div>
                            <h3 className={styles.help_title}>{main3_list_links[1].title}</h3>
                            <div className={styles.help_content} dangerouslySetInnerHTML={{ __html: main3_list_links[1].description }}></div>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}