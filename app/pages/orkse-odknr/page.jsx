import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';
import { DocumentComponent } from '@/app/components';

import Image from 'next/image';

import icon from '@/public/ege/icon.svg';

import Link from 'next/link';


export const metadata = {
    title: "ДВЦНО | ОРКСЭ/ОДКНР",
    description: "Дальневосточный центр непрерывного образования",
};
export default function page() {

    const data_link = [
        {
            'title': 'Письмо Минобрнауки РФ № 08-461 от 31.03.2015 года «Регламент выбора в образовательной организации родителями (законными представителями) обучающихся одного измодулей комплексного учебного курса «Основы религиозных культур и светскойэтики» ',
            'link': '/'
        },

        {
            'title': 'Письмо Минобрнауки РФ № 08-96 от 19.01.2018 года «Методические рекомендации для органов исполнительной власти субъектов Российской Федерации по совершенствованию процесса комплексного учебного курса «Основы религиозных культур и светской этики» и предметной области «Основыдуховно-нравственной культуры народов России»',
            'link': '/'
        },

        {
            'title': 'Письмо Минобрнауки РФ от 25 мая 2015 года № 08-761 Об изучении предметных областей: "Основы религиозных культур и светской этики" и "Основы духовно-нравственной культуры народов России"',
            'link': '/'
        },
    ]

    const data_docs = [
        {
            'title': 'Презентация «Выбор модуля курса ОРКСЭ»',
            'link': '/'
        },

        {
            'title': 'Бланк заявления родителей',
            'link': '/'
        },
    ]

    return (
        <>
            <section>
                <div className="container">
                    <Breadcrumbs title={'ОРКСЭ/ОДКНР'} />
                    <div className={styles.bg_wrapper}>
                        <div className={styles.title_wrapper}>

                            <h2 className={styles.title}>ОРКСЭ/ОДКНР</h2>

                            <Image 
                                className={styles.icon}
                                src={icon}
                                width={150}
                                height={100}
                                alt=''
                            />
                        </div>


                        <ul className={styles.document_link}>
                            {data_link.map((item, index) => (
                                <li className={styles.link} key={index}>
                                    <Link href={item.link}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>

                         <ul className={styles.document_list}>
                            {data_docs.map((item, index) => (
                                <li key={index}>
                                    <DocumentComponent title={item.title} link={item.link} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}