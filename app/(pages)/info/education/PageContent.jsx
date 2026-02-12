'use client'

import useLangStore from '@/app/store/languageStore';

import styles from './style.module.css';

import Image from 'next/image';
import decor from '@/public/info/education/decor_5.png';
import decor_icon from '@/public/info/education/decor_icon.svg';

import { Breadcrumbs, DocumentLinkComponent, DocumentComponent } from '@/app/components';
import date from '@/public/info/education/date.png';

const languages = {
    ru: 'Образование',
    en: 'Education',
    ch: '教育'
};
const languages2 = {
    ru: 'Сведения об образовательной организации',
    en: 'Information about the educational organization',
    ch: '教育機構資訊'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const data_education = data?.sections?.education?.[1]?.content[lang];
    const data_programs = data?.sections?.programs?.[1]?.content[lang];
    const data_calendars = data?.sections?.graph?.[1]?.content[lang];
    const data_amount = data?.sections?.count?.[2]?.content[lang]?.list;

    console.log(data_programs);

    return (
        <>
            <section className={styles.section}>
                <div className='container'>
                    <Breadcrumbs
                        slug={languages2[lang]}
                        link={'info'}
                        title={languages[lang]}
                    />
                    <h2 className={styles.title}>{data?.title[lang]?.title ?? 'Образование'}</h2>

                    <ul className={styles.education_list}>
                        {data_education && data_education.length > 0 ? (
                            data_education.map((item, index) => (
                                <li
                                    className={`${styles.item}`}
                                    key={index}
                                >
                                    <div className={styles.item_title}>
                                        <h3>{item.title}</h3>
                                        <Image
                                            className={styles.decor}
                                            src='/info/education/decor_13.svg'
                                            width={50}
                                            height={50}
                                            alt='decor'
                                        />
                                    </div>

                                    <div style={{ position: 'relative', zIndex: 1 }} dangerouslySetInnerHTML={{ __html: item.content }}>
                                    </div>
                                </li>
                            ))
                        ) :
                            (<p>данные не загружены</p>)
                        }
                    </ul>
                </div>
            </section>

            <section className={`${styles.section} ${styles.section_custom}`}>
                <div className="container">
                    <div className={styles.title_wrapper}>
                        <h2 className={styles.title}> {data?.sections?.programs?.[0]?.content[lang]?.title ?? 'Образовательные программы АНПОО «ДВЦНО»'}
                        </h2>

                        <Image
                            className={styles.decor2}
                            src={decor}
                            width={300}
                            height={100}
                            alt=''
                        />
                    </div>

                    <ul className={styles.list_programs}>
                        {data_programs && data_programs.length > 0 ? (
                            data_programs.map((item, index) => (
                                <li key={index} className={`${styles.item_program} anim_hover_card`}>
                                    <div>
                                        <Image
                                            className='dsv-image'
                                            src={item.image ? process.env.NEXT_PUBLIC_API_SERVER + item.image : '/placeholder/placeholder.svg'}
                                            width={280}
                                            height={220}
                                            alt=''
                                        />
                                    </div>

                                    <div className={styles.item_info} >
                                        <Image
                                            src={decor_icon}
                                            className={styles.decor_icon}
                                            width={25}
                                            height={25}
                                            alt=''
                                        />
                                        <h3 className={styles.item_title_program}>{item.title}</h3>
                                        <div dangerouslySetInnerHTML={{ __html: item?.content }} />
                                    </div>
                                </li>
                            ))
                        ) :
                            (<p>Данные не загружены</p>)
                        }
                    </ul>
                </div>
            </section>

            <section className={`${styles.section} ${styles.back_gray}`}>
                <div className="container">
                    <div className={styles.title_wrapper}>
                        <h2 className={styles.title}>{data?.sections?.graph?.[0]?.content[lang]?.title ?? 'Календарные учебные графики 2023-2024'}
                        </h2>

                        <Image
                            className={styles.decor2}
                            src={decor}
                            width={300}
                            height={100}
                            alt=''
                        />
                    </div>

                    <div className={styles.documents_list}>
                        {data_calendars && data_calendars.length > 0 ? (
                            data_calendars.map((item, index) => (
                                <DocumentLinkComponent key={index} link={item.link} title={item.title} background={'white'} />
                            ))
                        ) :
                            (<p>Ошибка при получении данных</p>)
                        }
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <div className={styles.title_wrapper}>
                        <h2 className={styles.title}>{data?.sections?.count?.[0]?.content[lang]?.title ?? 'Численность обучающихся по программам'}
                            {data?.sections?.count?.[0]?.content[lang]?.subtitle && data?.sections?.count?.[0]?.content[lang]?.subtitle != '' ? (
                                <span className={`${styles.sticker} ${styles.text_white}`}>
                                    {data?.sections?.count?.[0]?.content[lang]?.subtitle}
                                </span>
                            ) : ('')}
                        </h2>

                        <Image
                            className={styles.decor2}
                            src={decor}
                            width={300}
                            height={100}
                            alt=''
                        />
                    </div>


                    <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: data?.sections?.count?.[1]?.content[lang] ?? 'В том числе численность обучающихся, являющихся иностранными гражданами' }} />
                    <div className={styles.documents_list}>
                        {data_amount.map((item, index) => (
                            <DocumentComponent key={index} link={item.document} title={item.title} background={'gray'} />
                        ))}
                    </div>
                </div>
            </section >
        </>
    )
}

export default PageContent