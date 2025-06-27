'use client'

import styles from './style.module.css';
import decor from '@/public/processing-of-personal-data/decor.svg';
import Image from 'next/image';
import icon from '@/public/processing-of-personal-data/icon.svg';

import { Breadcrumbs } from '@/app/components';
import { VideoComponent, DocumentComponent } from '@/app/components';
import useLangStore from '@/app/store/languageStore';

const languages = {
    ru: 'Обработка персональных данных',
    en: 'Processing of personal data',
    ch: '個人資料處理'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();

    const data_documents = data?.sections?.documents?.[2]?.content?.[lang]?.list;
    const data_video = data?.sections?.information?.[2]?.content?.[lang];
    const data_lessons = data?.sections?.lessons?.[2]?.content?.[lang];

    return (
        <>
            <section className={styles.section}>
                <div className="container">

                    <Breadcrumbs title={languages[lang]} />


                    <div className={styles.title_wrapper}>
                        <h2 className={styles.title}>
                            {data?.sections?.documents?.[0]?.content?.[lang] ?? 'ДОКУМЕНТЫ'}
                        </h2>

                        <Image
                            src={decor}
                            width={100}
                            height={100}
                            alt="image"
                        />
                    </div>

                    <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: data?.sections?.documents?.[1]?.content?.[lang] ?? 'о защите, хранении, обработке и передаче персональных данных работников АНПОО "ДВЦНО"' }}></div>

                    <div className={styles.document_wrapper}>
                        <ul className={styles.document_list}>

                            {data_documents && data_documents.length > 0 ?
                                (
                                    data_documents.map((item, index) => (
                                        <li key={index}>
                                            <DocumentComponent title={item.title} link={item.document} />
                                        </li>
                                    ))
                                ) : (<p>Данные не загруженны</p>)
                            }
                        </ul>
                    </div>
                </div>
            </section>


            <section className={styles.section}>
                <div className="container">

                    <h2 className={styles.title}>
                        {data?.sections?.information?.[0]?.content?.[lang] ?? 'Полезная информация'}
                    </h2>

                    <div className={styles.usefull}>
                        <div className={styles.text} dangerouslySetInnerHTML={{ __html: data?.sections?.information?.[1]?.content?.[lang] ?? 'Видео-материалы для проведения уроков по вопросам защиты персональных данных' }}></div>
                        <Image
                            src={icon}
                            width={50}
                            height={50}
                            alt="image"
                        />
                    </div>

                    <div className={styles.document_wrapper}>
                        <ul className={styles.document_list}>
                            {data_video && data_video.length > 0 ?
                                (
                                    data_video.map((item, index) => (
                                        <li className='relative' key={index}>

                                            <VideoComponent
                                                video={true}
                                                background={'white'}
                                                title={item.title}
                                                link={item.link}
                                            />

                                            <Image
                                                className={styles.img_year}
                                                src={process.env.NEXT_PUBLIC_API_SERVER + item.image}
                                                width={120}
                                                height={40}
                                                objectFit='contain'
                                                alt=''
                                            />

                                        </li>
                                    ))
                                ) : (<p>Данные не загружены</p>)

                            }
                        </ul>
                    </div>

                    <div className={styles.bg_violet}>
                        <div className={styles.lessons_school}>
                            <h2 className={styles.title}>
                                {data?.sections?.lessons?.[0]?.content?.[lang] ?? 'Урок для школьников'}
                            </h2>

                            <div className={styles.lessons_info} dangerouslySetInnerHTML={{ __html: data?.sections?.lessons?.[1]?.content?.[lang] ?? 'по вопросам защиты персональных данных:' }}></div>


                            <ul className={styles.document_list_custom}>
                                {data_lessons && data_lessons.length > 0 ?
                                    (
                                        data_lessons.map((item, index) => (
                                            <li key={index}>
                                                <VideoComponent
                                                    background={'white'}
                                                    title={item.title}
                                                    link={item.link}
                                                />
                                            </li>
                                        ))
                                    ) : (<p>Данные не загружены</p>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageContent