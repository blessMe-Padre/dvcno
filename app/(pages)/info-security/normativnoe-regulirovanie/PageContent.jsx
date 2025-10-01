"use client"
import Image from 'next/image';
import styles from '../info.module.css';
import { Breadcrumbs, DocumentComponent } from "@/app/components";
import { insertSafeContent } from "@/app/utils/insertSafeContent";

import useLangStore from '@/app/store/languageStore';
export default function Page({ data }) {
    const { lang } = useLangStore();

    const header = data?.sections?.main[0]?.content?.[lang]?.title;
    const content = data?.sections?.main[1]?.content?.[lang];
    const header2 = data?.sections?.main2[0]?.content?.[lang]?.title;
    const content2 = data?.sections?.main2[1]?.content?.[lang];

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

            <div className={`${styles.link_list} api_content`}>
                {content && content.length > 0 ?
                    (
                        insertSafeContent(content)
                    ) : (<p>Данные не загружены</p>)
                }
            </div>

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

            <div className={`${styles.link_list} api_content`}>
                {content2 && content2.length > 0 ?
                    (
                        insertSafeContent(content2)
                    ) : (<p>Данные не загружены</p>)
                }
            </div>
        </div>
    )
}