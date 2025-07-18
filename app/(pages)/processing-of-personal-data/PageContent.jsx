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

    const documents_header = data?.sections?.documents?.[0]?.content?.[lang];
    const documents_subtitle = data?.sections?.documents?.[1]?.content?.[lang];
    const documents_list = data?.sections?.documents?.[2]?.content?.[lang]?.list;
    const information_header = data?.sections?.information?.[0]?.content?.[lang];
    const information_subtitle = data?.sections?.information?.[1]?.content?.[lang];
    const information_list = data?.sections?.information?.[2]?.content?.[lang]?.list;
    const lessons = data?.sections?.lessons?.[0]?.content?.[lang];

    return (
        <>
            <section className={styles.section}>
                <div className="container">

                    <Breadcrumbs title={languages[lang]} />


                    <div className={styles.title_wrapper}>
                        <h2 className={styles.title}>
                            {documents_header ?? 'ДОКУМЕНТЫ'}
                        </h2>

                        <Image
                            src={decor}
                            width={100}
                            height={100}
                            alt="image"
                        />
                    </div>

                    <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: documents_subtitle ?? 'о защите, хранении, обработке и передаче персональных данных работников АНПОО "ДВЦНО"' }}></div>

                    <div className={styles.document_wrapper}>
                        <ul className={styles.document_list}>

                            {documents_list && documents_list.length > 0 ?
                                (
                                    documents_list.map((item, index) => (
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
                        {information_header ?? 'Полезная информация'}
                    </h2>

                    <div className={styles.usefull}>
                        <div className={styles.text} dangerouslySetInnerHTML={{ __html: information_subtitle ?? 'Видео-материалы для проведения уроков по вопросам защиты персональных данных' }}></div>
                        <Image
                            src={icon}
                            width={50}
                            height={50}
                            alt="image"
                        />
                    </div>

                    <div className={styles.document_wrapper}>
                        <ul className={styles.document_list}>
                            {information_list && information_list.length > 0 ?
                                (
                                    information_list.map((item, index) => (
                                        <li className='relative' key={index}>

                                            <VideoComponent
                                                background={'white'}
                                                title={item.title}
                                                mp4={item.video_mp4}
                                                webm={item.video_webm}
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
                                {lessons.title ?? 'Урок для школьников'}
                            </h2>

                            <div className={styles.lessons_info} dangerouslySetInnerHTML={{ __html: lessons.content ?? 'по вопросам защиты персональных данных:' }}></div>

                            <ul className={styles.document_list_custom}>
                                {lessons.videos && lessons.videos.length > 0 ?
                                    (
                                        lessons.videos.map((item, index) => (
                                            <li key={index}>
                                                <VideoComponent
                                                    background={'white'}
                                                    title={item.title}
                                                    mp4={item.video_mp4}
                                                    webm={item.video_webm}
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