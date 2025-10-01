"use client"
import Image from 'next/image';
import styles from '../info.module.css';
import { Breadcrumbs, DocumentComponent } from "@/app/components";
import useLangStore from '@/app/store/languageStore';
import { insertSafeContent } from '@/app/utils/insertSafeContent';

export default function Page({ data }) {
    const { lang } = useLangStore();

    const header = data?.sections?.main[0]?.content?.[lang]?.[0]?.title;
    const format_text = data?.sections?.main[1]?.content?.[lang];
    const list_links = data?.sections?.main[2]?.content?.[lang]?.list;

    const link1 = {
        ru: 'Информационная безопасность',
        en: 'Information security',
        ch: '資訊安全'
    };
    const link2 = {
        ru: 'Локальные акты',
        en: 'Local acts',
        ch: '當地行為'
    };

    return (
        <div className="container">

            <Breadcrumbs
                slug={link1[lang]}
                link={'info-security'}
                title={link2[lang]}
            />

            <div className={styles.title_wrapper}>
                <h2 className={`title ${styles.half_title}`}>{header ?? 'Локальные акты'}</h2>
                <Image
                    src="/info-security/image-2.svg"
                    alt="Изображение"
                    width={125}
                    height={125}
                    className="dsv-image"
                />
            </div>

            <div className={styles.page_content}>
                {insertSafeContent(format_text)}
            </div>

            <ul className={styles.document_list}>
                {list_links && list_links.length > 0 ?
                    (
                        list_links.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.document} />
                            </li>
                        ))
                    ) : (<p>Данные не загружены</p>)
                }
            </ul>
        </div>
    )
}