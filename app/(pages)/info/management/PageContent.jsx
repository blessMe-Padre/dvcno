'use client'
import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';
import Image from 'next/image';

import decor2 from '@/public/info/structura/decor2.svg';
import decor3 from '@/public/info/structura/decor3.svg';

import arrow from '@/public/info/education/arrow.svg';

import useLangStore from '@/app/store/languageStore';

const languages = {
    ru: 'Руководство',
    en: 'Management',
    ch: '管理'
};
const languages2 = {
    ru: 'Сведения об образовательной организации',
    en: 'Information about the educational organization',
    ch: '教育機構資訊'
};

const PageContent = ({ data, dictionary }) => {
    const { lang } = useLangStore();
    const data_director = data?.sections?.personal?.[1]?.content[lang];
    const data_division = data?.sections?.structure?.[1]?.content[lang];
    return (
        <section className={styles.section}>
            <div className='container'>
                <Breadcrumbs
                    slug={languages2[lang]}
                    link={'info'}
                    title={languages[lang]}
                />

                <h2 className={styles.title}>{data?.sections?.main?.[0]?.content[lang]?.title ?? 'Руководство'}</h2>

                <div>
                    <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: data?.sections?.personal?.[0]?.content[lang] ?? 'АНПОО «ДВЦНО»' }}></div>
                    <ul className={styles.list}>

                        {data_director && data_director.length > 0 ? (
                            data_director.map((item, index) => (
                                <li className={`${styles.item} anim_hover_card`} key={index}>
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

                                    <a href={`mailto:${item.link}`} className={styles.link}>
                                        <p style={{ color: '#fff' }}>{dictionary?.buttons_pages?.write_to[lang]}</p>
                                        <Image src={arrow} width={15} height={15} alt='' />
                                    </a>

                                </li>
                            ))
                        ) : (
                            <p>Данные не загружены</p>
                        )
                        }
                    </ul>
                </div>

                <div>
                    <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: data?.sections?.structure?.[0]?.content[lang] ?? 'Cтруктурные подразделения' }}></div>

                    <ul className={styles.list}>
                        {data_division && data_division.length > 0 ? (
                            data_division.map((item, index) => (
                                <li className={`${styles.item} anim_hover_card`} key={index}>
                                    <div className={styles.item_title_wrapper}>
                                        {item.thumbnail && (
                                            <Image
                                                className={`dsv-image`}
                                                src={item.thumbnail ? process.env.NEXT_PUBLIC_API_SERVER + item.thumbnail : '/placeholder/placeholder.svg'}
                                                width={index === 2 ? 120 : 80}
                                                height={80}
                                                loading='lazy'
                                                alt='decor'
                                            />
                                        )}

                                        {item.title}

                                        <Image
                                            className={`${styles.decor3} dsv-image`}
                                            src={decor3}
                                            width={50}
                                            height={50}
                                            alt={'decor3'}
                                        />
                                    </div>

                                    {
                                        item.management_positions && item.management_positions.length > 0 && item.management_positions.map((item, index) => (
                                            <div key={index} style={{ marginBottom: '10px' }}>
                                                <p><strong>{item.position}:</strong></p>
                                                <p>{item.name}:</p>
                                            </div>
                                        ))
                                    }

                                    <p><strong>{dictionary?.headers_pages?.address[lang]}:</strong></p>
                                    <p><div className={styles.info} dangerouslySetInnerHTML={{ __html: item?.address }}></div></p>
                                    <p><strong>{dictionary?.headers_pages?.phones[lang]}:</strong></p>
                                    <p><div className={styles.info} dangerouslySetInnerHTML={{ __html: item?.phones }}></div></p>
                                    <p><strong>{dictionary?.headers_pages?.emails[lang]}:</strong></p>
                                    <p><div className={styles.info} dangerouslySetInnerHTML={{ __html: item?.emails }}></div></p>
                                    <p><strong>{dictionary?.headers_pages?.site[lang]}:</strong></p>
                                    <p><div className={styles.info} dangerouslySetInnerHTML={{ __html: item?.site }}></div></p>

                                    <a href={item.site} className={styles.link}>
                                        <p style={{ color: '#fff' }}>{dictionary?.buttons_pages?.go_to_website[lang]}</p>
                                        <Image src={arrow} width={15} height={15} alt='' />
                                    </a>
                                </li>
                            ))
                        ) : (
                            <p>Данные не получены</p>
                        )
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PageContent