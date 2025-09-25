'use client'

import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import useLangStore from '@/app/store/languageStore';

import Image from 'next/image';

const languages = {
    ru: 'Сведения об образовательной организации',
    en: 'Information about the educational organization',
    ch: '教育機構資訊'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();

    const imgSrc = data?.sections?.hero?.[1]?.content[lang].images?.big;

    return (
        <section className={styles.section}>
            <div className='container'>
                <Breadcrumbs title={languages[lang]} />
                <h2 className={styles.title}>{data?.sections?.hero?.[0]?.content[lang] ?? 'Сведения об образовательной организации'}</h2>

                {/* <section className={styles.hero_section}>
                    <SlideMain item={data?.sections?.hero?.[1]?.content[lang]} />
                </section> */}

                <div className={styles.wrapper_content}>

                    <Image
                        aria-hidden
                        src={process.env.NEXT_PUBLIC_API_SERVER + imgSrc}
                        alt="Подготовительный класс"
                        className={`${styles.image} dsv-image`}
                        fill
                    />

                    <p className={styles.subtitle}>{data?.sections?.hero?.[1]?.content[lang]?.title}</p>
                    <div className={styles.desc} dangerouslySetInnerHTML={{ __html: data?.sections?.hero?.[1]?.content[lang]?.content }}></div>

                    <div className={styles.wrapper_lang}>
                        <p className={styles.list_title}>Языки обучения:</p>

                        <ul className={styles.list_language}>
                            <div className={`${styles.item} ${styles.bg_yellow}`}>русский</div>
                            <div className={`${styles.item} ${styles.bg_green}`}>английский</div>
                            <div className={`${styles.item} ${styles.bg_blue}`}>китайский</div>
                            <div className={`${styles.item} ${styles.bg_white}`}>корейский</div>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PageContent