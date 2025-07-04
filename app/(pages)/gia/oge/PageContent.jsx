"use client"
import Image from 'next/image';
import styles from '../style.module.css';
import { Breadcrumbs, DocumentComponent } from "@/app/components";

import useLangStore from '@/app/store/languageStore';
export default function Page({ data }) {
    const { lang } = useLangStore();

    const banner = data?.sections?.banner[0]?.content?.[lang];
    const info_header = data?.sections?.info[0]?.content?.[lang][0];
    const info_list_docs = data?.sections?.info[1]?.content?.[lang]?.list;
    const total_header = data?.sections?.total[0]?.content?.[lang]?.title;
    const total_list_docs = data?.sections?.total[0]?.content?.[lang]?.documents;
    const materials_header = data?.sections?.materials[0]?.content?.[lang][0];
    const materials_list_docs = data?.sections?.materials[1]?.content?.[lang]?.list;
    //console.log(total_list_docs);
    
    const link1 = {
        ru: 'ГИА',
        en: 'GIA',
        ch: '美國寶石研究院'
    };
    const link2 = {
        ru: 'ОГЭ',
        en: 'OGE',
        ch: '奧格'
    };

    return (
        <div className="container">
            <Breadcrumbs
                slug={link1[lang]}
                link={'gia'}
                title={link2[lang]}
            />

            <section className={`${styles.hero} ${styles.hero_oge} section-dsv`}>
                <div className={styles.title_wrapper}>
                    <h2 className={`title ${styles.half_title}`}>{banner.title ?? "ОГЭ"}</h2>
                    <Image
                        src="/gia/image-3.svg"
                        alt="Изображение"
                        width={125}
                        height={125}
                        className={`${styles.title_img} dsv-image`}
                    />
                </div>

                <ul className={styles.hero_list}>
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
            </section>

            <section className={styles.method}>
                <div className={styles.title_wrapper_between}>
                    <h2 className={`title ${styles.half_title}`}>{info_header}</h2>
                    <Image
                        src="/gia/image-4.svg"
                        alt="Изображение"
                        width={146}
                        height={78}
                        className="dsv-image"
                    />
                </div>

                <ul className={styles.document_list}>
                    {info_list_docs && info_list_docs.length > 0 ? (
                        info_list_docs.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.document} />
                            </li>
                        ))
                    ) :
                        'данные не загружены'
                    }
                </ul>
            </section>

            <div className={styles.image_wrapper}>
                <Image
                    src="/gia/image-5.jpg"
                    alt="Изображение"
                    width={1442}
                    height={960}
                    className="dsv-image"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                />
            </div>

            <section className={`${styles.hero} ${styles.hero_total} section-dsv`}>
                <div className={styles.title_wrapper}>
                    <h2 className={`title ${styles.half_title} title-white`}>{total_header}</h2>
                    <Image
                        src="/gia/image-5.svg"
                        alt="Изображение"
                        width={125}
                        height={125}
                        className={`${styles.title_img} dsv-image`}
                    />
                </div>

                <ul className={styles.hero_list}>
                    {total_list_docs && total_list_docs.length > 0 ? (
                        total_list_docs.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.document} />
                            </li>
                        ))
                    ) :
                        'данные не загружены'
                    }
                </ul>
            </section>

            <section className={styles.method}>
                <div className={styles.title_wrapper_between}>
                    <h2 className={`title ${styles.half_title}`}>{materials_header}</h2>
                    <Image
                        src="/gia/image-4.svg"
                        alt="Изображение"
                        width={146}
                        height={78}
                        className="dsv-image"
                    />
                </div>

                <ul className={styles.document_list}>
                    {materials_list_docs && materials_list_docs.length > 0 ? (
                        materials_list_docs.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.document} />
                            </li>
                        ))
                    ) :
                        'данные не загружены'
                    }
                </ul>
            </section>

        </div>
    )
}