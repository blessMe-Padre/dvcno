'use client'

import styles from './style.module.css';
import Image from 'next/image';
import decor from '@/public/info/structura/decor.svg';
import decor2 from '@/public/info/structura/decor2.svg';
import decor3 from '@/public/info/structura/decor3.svg';
import doc from '@/public/info/structura/doc.svg';
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import useLangStore from '@/app/store/languageStore';

const languages = {
    ru: 'Структура и органы управления образовательной организацией',
    en: 'Structure and governing bodies of the educational organization',
    ch: '教育組織的結構與管理機構'
};
const languages2 = {
    ru: 'Сведения об образовательной организации',
    en: 'Information about the educational organization',
    ch: '教育機構資訊'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();

    const data_director = data?.sections?.manager?.[1]?.content[lang];
    const data_division = data?.sections?.structure?.[1]?.content[lang];
    const data_manager = data?.sections?.departments?.[1]?.content[lang];

    return (
        <section className={styles.section}>
            <div className='container relative'>
                <Breadcrumbs
                    slug={languages2[lang]}
                    link={'info'}
                    title={languages[lang]}
                />

                <h2 className={styles.title}>{data?.sections?.main?.[0]?.content[lang] ?? 'Структура и органы управления образовательной организацией'}
                </h2>

                <Image
                    className={styles.decor}
                    src={decor}
                    width={200}
                    height={200}
                    alt=''
                />

                <div className={styles.list_director}>
                    <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: data?.sections?.manager?.[0]?.content[lang] ?? 'Дирекция' }}></div>
                    <ul className={styles.list}>
                        {data_director.map((item, index) => (
                            <li className={styles.item} key={index}>
                                <div className={styles.item_title_wrapper}>
                                    {item.title}
                                    <Image
                                        className={`${styles.decor2} dsv-image`}
                                        src={decor2}
                                        width={25}
                                        height={25}
                                        alt={'decor2'}
                                    />

                                    <Image
                                        className={`${styles.decor3} dsv-image`}
                                        src={decor3}
                                        width={50}
                                        height={50}
                                        alt={'decor3'}
                                    />
                                </div>

                                <div className={styles.info} dangerouslySetInnerHTML={{ __html: item?.content }}></div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.list_division}>
                    <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: data?.sections?.structure?.[0]?.content[lang] ?? 'Cтруктурные подразделения' }}></div>
                    <ul className={styles.list}>
                        {data_division.map((item, index) => (
                            <li className={styles.item} key={index}>
                                <div className={styles.item_title_wrapper}>
                                    <Image
                                        className={`dsv-image`}
                                        src={process.env.NEXT_PUBLIC_API_SERVER + item.image}
                                        width={120}
                                        height={90}
                                        alt='decor'
                                    />

                                    {item.title}

                                    <Image
                                        className={`${styles.decor3} dsv-image`}
                                        src={decor3}
                                        width={50}
                                        height={50}
                                        alt={'decor3'}
                                    />
                                </div>

                                <div className={styles.info} dangerouslySetInnerHTML={{ __html: item?.content }}></div>

                                <a href={process.env.NEXT_PUBLIC_API_SERVER + item.link} className={styles.doc} download="filename">
                                    <Image src={doc} width={50} height={50} alt='image' />
                                    Положения
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.list_division}>
                    <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: data?.sections?.departments?.[0]?.content[lang] ?? 'Органы управления' }}></div>

                    <ul className={styles.list}>
                        {data_manager.map((item, index) => (
                            <li className={styles.item} key={index}>
                                <div className={styles.item_title_wrapper}>
                                    {item.title}
                                    <Image
                                        className={`${styles.decor2} dsv-image`}
                                        src={decor2}
                                        width={25}
                                        height={25}
                                        alt={'decor2'}
                                    />

                                    <Image
                                        className={`${styles.decor3} dsv-image`}
                                        src={decor3}
                                        width={50}
                                        height={50}
                                        alt={'decor3'}
                                    />
                                </div>

                                <div className={styles.info} dangerouslySetInnerHTML={{ __html: item?.content }}></div>

                                <a href={process.env.NEXT_PUBLIC_API_SERVER + item.link} className={styles.doc} download="filename">
                                    <Image src={doc} width={50} height={50} alt='image' />
                                    Положения
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default PageContent