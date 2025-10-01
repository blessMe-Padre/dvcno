"use client"
import Image from 'next/image';
import styles from '../info.module.css';
import { Breadcrumbs, DocumentComponent, InternetResources } from "@/app/components";

import useLangStore from '@/app/store/languageStore';
export default function Page({ data }) {
    const { lang } = useLangStore();

    const banner = data?.sections?.banner[0]?.content?.[lang];
    const header = data?.sections?.main[0]?.content?.[lang]?.title;
    const format_text = data?.sections?.main[2]?.content?.[lang][0];
    const list_links = data?.sections?.main[1]?.content?.[lang];
    const imagesList = data?.sections?.img?.[0]?.content?.[lang];

    const link1 = {
        ru: 'Информационная безопасность',
        en: 'Information security',
        ch: '資訊安全'
    };
    const link2 = {
        ru: 'Обучающимся',
        en: 'For students',
        ch: '對於學生'
    };

    return (
        <>
            <div className="container">
                <Breadcrumbs
                    slug={link1[lang]}
                    link={'info-security'}
                    title={link2[lang]}
                />

                <section className={`${styles.hero} ${styles.hero_parents} ${styles.hero_student} section-dsv`}>
                    <h1 className={`title title-white`}><div dangerouslySetInnerHTML={{ __html: banner.title ?? "Обучающимся" }} /></h1>

                    <div className={styles.document_wrapper}>
                        <ul>
                            {banner.documents?.list && banner.documents?.list.length > 0 ?
                                (
                                    banner.documents.list.map((item, index) => (
                                        <li key={index}>
                                            <DocumentComponent title={item.title} link={item.document} />
                                        </li>
                                    ))
                                ) : ("")
                            }
                        </ul>
                    </div>
                </section>
            </div>

            <section className={styles.recommended}>
                <div className="container">
                    <div className={styles.title_wrapper}>
                        <h2 className={`title ${styles.half_title} title-black`}>{header}</h2>
                        <Image
                            src="/info-security/image-7.svg"
                            alt="Изображение"
                            width={121}
                            height={121}
                            className="dsv-image"
                        />
                    </div>
                    <div className={styles.page_content}>
                        <p className="title-black">{format_text}</p>
                    </div>

                    <ul className={styles.document_list}>
                        {list_links && list_links.length > 0 ?
                            (
                                list_links.map((item, index) => (
                                    <li key={index}>
                                        <InternetResources title={item.title} link={item.link} />
                                    </li>
                                ))
                            ) : (<p>Данные не загружены</p>)
                        }
                    </ul>
                </div>
            </section>

            <div className="container">
                {
                    imagesList && imagesList.length > 0 ?
                        (
                            imagesList.map((img, index) => (
                                <div className={styles.image_wrapper} key={index}>
                                    <Image
                                        src={img.image ? process.env.NEXT_PUBLIC_API_SERVER + img.image : '/placeholder/placeholder.svg'}
                                        alt="Изображение"
                                        width={1442}
                                        height={1189}
                                        className="dsv-image"
                                        placeholder="blur"
                                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                                    />
                                </div>
                            ))
                        ) : (<p>Данные не загружены</p>)
                }
            </div>
        </>
    )
}