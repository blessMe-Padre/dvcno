import styles from './style.module.css';
import decor from '@/public/processing-of-personal-data/decor.svg';
import Image from 'next/image';
import icon from '@/public/processing-of-personal-data/icon.svg';

export const metadata = {
    title: "ДВЦНО | Политика обработки персональных данных",
    description: "Дальневосточный центр непрерывного образования",
}

import { Breadcrumbs } from '@/app/components';

import { DocumentComponent } from '@/app/components';

export default function page() {

    const data_documents = [
        {
            'title': 'Политика обработки персональных данных в АНПОО ДВЦНО_ЭЦП',
            'link': '',
        },
        {
            'title': 'Положение об обработке персональных данных обучающихся и третьих лиц',
            'link': '',
        },
        {
            'title': 'Положение об обработке персональных данных обучающихся и третьих лиц подпись.',
            'link': '',
        },
    ]

    const data_video = [
        {
            'title': 'Презентация для детей 9-11 лет для использования на уроке',
            'link': '',
            'img': '/processing-of-personal-data/years_1.png',
        },
        {
            'title': 'Презентация для детей 12-14 лет для использования на уроке',
            'link': '',
            'img': '/processing-of-personal-data/years_2.png',
        }
    ]
    const data_lessons = [
        {
            'title': 'Урок 1',
            'link': '',
        },
        {
            'title': 'Урок 2',
            'link': '',
        },
        {
            'title': 'Урок 3',
            'link': '',
        },
        {
            'title': 'Урок 4',
            'link': '',
        }
    ]

    return (
        <>

            <section className={styles.section}>
                <div className="container">

                    <Breadcrumbs title={"Обработка персональных данных"} />


                    <div className={styles.title_wrapper}>
                        <h2 className={styles.title}>
                            ДОКУМЕНТЫ
                        </h2>

                        <Image
                            src={decor}
                            width={100}
                            height={100}
                            alt="image"
                        />
                    </div>

                    <p className={styles.subtitle}>о защите, хранении, обработке и передаче персональных данных работников АНПОО "ДВЦНО"</p>


                    <div className={styles.document_wrapper}>
                        <ul className={styles.document_list}>
                            {data_documents.map((item, index) => (
                                <li key={index}>
                                    <DocumentComponent title={item.title} link={item.link} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>


            <section className={styles.section}>
                <div className="container">

                    <h2 className={styles.title}>
                        Полезная информация
                    </h2>


                    <div className={styles.usefull}>

                        <p className={styles.text}>Видео-материалы для проведения уроков по вопросам защиты персональных данных</p>

                        <Image
                            src={icon}
                            width={50}
                            height={50}
                            alt="image"
                        />

                    </div>

                    <div className={styles.document_wrapper}>
                        <ul className={styles.document_list}>
                            {data_video.map((item, index) => (
                                <li className='relative' key={index}>

                                    <DocumentComponent
                                        video={true}
                                        background={'white'}
                                        title={item.title}
                                        link={item.link}
                                    />

                                    <Image
                                        className={styles.img_year}
                                        src={item.img}
                                        width={120}
                                        height={40}
                                        objectFit='contain'
                                        alt=''
                                    />

                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.bg_violet}>
                        <div className={styles.lessons_school}>
                            <h2 className={styles.title}>Урок для школьников </h2>
                            <p className={styles.lessons_info}>
                                по вопросам защиты персональных данных:
                            </p>

                            <ul className={styles.document_list_custom}>
                                {data_lessons.map((item, index) => (
                                    <li key={index}>
                                        <DocumentComponent
                                            video={true}
                                            background={'white'}
                                            title={item.title}
                                            link={item.link}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}