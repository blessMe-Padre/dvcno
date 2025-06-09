import { Breadcrumbs } from "@/app/components";
import styles from './style.module.css';
import Image from "next/image";
import decor1 from '@/public/info/doc/decor1.svg';
import decor2 from '@/public/info/doc/decor2.svg';
import decor3 from '@/public/info/doc/decor3.svg';
import decor4 from '@/public/info/doc/decor4.svg';
import decor5 from '@/public/info/doc/decor5.svg';

import { DocumentComponent } from "@/app/components";


export const metadata = {
    title: "ДВЦНО | Документы",
    description: "Дальневосточный центр непрерывного образования",
};


export default function page() {

    const data_docs = [
        {
            'title': 'Устав ДВЦНО',
            'link': '/'
        },

        {
            'title': 'Свидетельств о государственной аккредитации АНПОО ДВЦНО',
            'link': '/'
        },

        {
            'title': 'Свидетельство о постановке на налоговый учет',
            'link': '/'
        },

        {
            'title': 'Правила внутреннего распорядка обучающихся',
            'link': '/'
        },

        {
            'title': 'Правила внутреннего трудового распорядка',
            'link': '/'
        },

        {
            'title': 'Лицензия АНПОО ДВЦНО_Выписка из реестра лицензий',
            'link': '/'
        },
    ]


    const data_results = [
        {
            'title': 'Сводный отчет самообследование АНПОО ДВЦНО 2022',
            'link': '/'
        },

        {
            'title': 'Отчет о самообследовании ДВЦНО_2020',
            'link': '/'
        },

        {
            'title': 'Сводный отчет самообследование АНПОО ДВЦНО 2022',
            'link': '/'
        },

        {
            'title': 'Отчет о самообследовании ДВЦНО_2020',
            'link': '/'
        },
    ];

    const data_acts = [
        {
            'title': 'Положение об отделе образовательных программ и проектов_ЭЦП',
            'link': '/'
        },

        {
            'title': 'Порядок возникновения, приостановления и прекращения отношений между АНПОО «ДВЦНО» и обучающимися и (или) родителями (законными представителями) несовершеннолетних обучающихся подпись',
            'link': '/'
        },

        {
            'title': 'Положение о психолого-педагог консилиуме',
            'link': '/'
        },

        {
            'title': 'Положение о сетевом взаимодействии ДВЦНО',
            'link': '/'
        },

        {
            'title': 'Положение об официальном сайте АНПОО ДВЦНО',
            'link': '/'
        },

        {
            'title': 'Положения об ограничении доступа обучающихся к информации',
            'link': '/'
        },

        {
            'title': 'Правила использования сети Интернет',
            'link': '/'
        },

        {
            'title': 'Положение о дистанционном обучении',
            'link': '/'
        },

        {
            'title': 'Формы заявлений о языке (языках) обучения и воспитания',
            'link': '/'
        },

        {
            'title': 'Положение об индивидуальном учебном плане',
            'link': '/'
        },

        {
            'title': 'Положение об организации и осуществлении образ. деятельности по ДОП АНПОО ДВЦНО_ЭЦП',
            'link': '/'
        },

        {
            'title': 'Положение о комиссии по урегулированию споров между участниками образовательных отношений',
            'link': '/'
        },

        {
            'title': 'Положение о внутр системе оценки качества образования в СП АНПОО ДВЦНО_ЭЦП',
            'link': '/'
        },

        {
            'title': 'Положение о рабочих программах в АНПОО ДВЦНО_ЭЦП',
            'link': '/'
        },

        {
            'title': 'Положение о языках образования и изучения в АНПОО ДВЦНО_ЭЦП',
            'link': '/'
        },

        {
            'title': 'Порядок обучения по инд учебному плану в том числе при ускор обучении_ЭЦП',
            'link': '/'
        },

        {
            'title': 'Положение о формах периодичности и порядке текущего контроля успеваемости и промежут аттестации обучающихся по осн общеобр прогр_ЭЦП',
            'link': '/'
        },

        {
            'title': 'Положение об ЭИОС ДВЦНО',
            'link': '/'
        },

        {
            'title': 'Порядок возникновения, приостановления и прекращения отношений между АНПОО «ДВЦНО» и обучающимися и (или) родителями (законными представителями) несовершеннолетних обучающихся',
            'link': '/'
        },

        {
            'title': 'Правила приема на обучение в структурные подразделения АНПОО ДВЦНО',
            'link': '/'
        },

        {
            'title': 'Правила приема в структурные подразделения АНПОО ДВЦНО подпись',
            'link': '/'
        },

        {
            'title': 'Положение о психолого-педагог консилиуме подпись',
            'link': '/'
        },

        {
            'title': 'Положение о сетевом взаимодействии ДВЦНО подпись',
            'link': '/'
        },

        {
            'title': 'Положение об официальном сайте АНПОО ДВЦНО подпись',
            'link': '/'
        },

        {
            'title': 'Положения об ограничении доступа обучающихся к информации подпись',
            'link': '/'
        },

        {
            'title': 'Правила использования сети Интернет подпись',
            'link': '/'
        },

        {
            'title': 'О порядке самообследования',
            'link': '/'
        },

        {
            'title': 'Положение об официальном сайте и об информациооной открытости АНПОО ДВЦНО',
            'link': '/'
        },

        {
            'title': 'Положение о порядке перевода обучающихся между',
            'link': '/'
        },

        {
            'title': 'Положение о формах обучения в АНПОО ДВЦНО',
            'link': '/'
        },

        {
            'title': 'Положение о нормах профессиональной этике педагогических работников',
            'link': '/'
        },

        {
            'title': 'Положение об оказании платных образовательных услуг',
            'link': '/'
        },

        {
            'title': 'Режим занятий обучающихся в структурных подразделениях АНПОО ДВЦНО',
            'link': '/'
        },

        {
            'title': 'Положение о проектной деятельности обучающихся в АНПОО ДВЦНО_ЭЦП',
            'link': '/'
        },

        {
            'title': 'Положение об организации внеурочной деятельности_ЭЦП',
            'link': '/'
        },
    ]


    const data_proccess = [
        {
            'title': 'Графики оценочных процедур АК',
            'link': '/'
        },

        {
            'title': 'Графики оценочных процедур ВШ',
            'link': '/'
        },

        {
            'title': 'Графики оценочных процедур ШОД',
            'link': '/'
        },

        {
            'title': 'Графики оценочных процедур КЕП',
            'link': '/'
        },

        {
            'title': 'Графики оценочных процедур МЛШ',
            'link': '/'
        }
    ]


    const data_predpicaniya = [
        {
            'title': 'Предписание сентябрь 2021',
            'link': '/'
        },

        {
            'title': 'План-график устранения нарушений',
            'link': '/'
        }
    ]

    return (
        <>
            <section>
                <div className="container">
                    <Breadcrumbs title={"Документы"} link={'info'} slug={"Сведения об образовательной организации"} />
                    <div className={styles.title_wrapper}>
                        <h2 className={styles.title}>Документы</h2>
                        <Image
                            src={decor1}
                            width={100}
                            height={100}
                            alt=""
                        />
                    </div>

                    <ul className={styles.document_list}>
                        {data_docs.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.link} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <div className='container'>
                    <div className={styles.title_wrapper}>

                        <h2 className={styles.title}>
                            Отчет о результатах самообследования АНПОО "ДВЦНО" по годам

                        </h2>

                        <Image
                            src={decor2}
                            width={100}
                            height={100}
                            alt=""
                        />
                    </div>


                    <ul className={styles.document_list}>
                        {data_results.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.link} />
                            </li>
                        ))}
                    </ul>
                </div>

            </section>

            <section className={`${styles.section} ${styles.section_custom}`}>
                <div className='container'>
                    <div className={styles.title_wrapper}>

                        <h2 className={styles.title}>
                            Локально-нормативные акты АНПОО «ДВЦНО»

                        </h2>

                        <Image
                            src={decor4}
                            width={100}
                            height={100}
                            alt=""
                        />
                        <Image
                            src={decor3}
                            width={100}
                            height={100}
                            alt=""
                        />
                    </div>


                    <ul className={styles.document_list}>
                        {data_acts.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.link} />
                            </li>
                        ))}
                    </ul>
                </div>

            </section>


            <section className={`${styles.section} ${styles.bg_gray} ${styles.section_custom}`}>
                <div className='container'>
                    <div className={styles.title_wrapper}>

                        <h2 className={styles.title}>
                            Локально-нормативные акты АНПОО «ДВЦНО»

                        </h2>

                        <Image
                            src={decor4}
                            width={100}
                            height={100}
                            alt=""
                        />
                        <Image
                            src={decor3}
                            width={100}
                            height={100}
                            alt=""
                        />
                    </div>


                    <ul className={styles.document_list}>
                        {data_acts.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.link}
                                    background="white" />
                            </li>
                        ))}
                    </ul>
                </div>

            </section>

            <section className={styles.section}>
                <div className='container'>
                    <div className={styles.title_wrapper}>

                        <h2 className={styles.title}>
                            Графики оценочных процедур
                        </h2>

                        <Image
                            src={decor5}
                            width={100}
                            height={100}
                            alt=""
                        />

                    </div>


                    <ul className={styles.document_list}>
                        {data_proccess.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.link} />
                            </li>
                        ))}
                    </ul>
                </div>

            </section>

            <section className={styles.section}>
                <div className='container'>
                    <div className={styles.title_wrapper}>

                        <h2 className={styles.title}>
                            Предписания и отчеты об их устранении
                        </h2>

                        <Image
                            src={decor5}
                            width={100}
                            height={100}
                            alt=""
                        />

                    </div>


                    <ul className={styles.document_list}>
                        {data_predpicaniya.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.link} />
                            </li>
                        ))}
                    </ul>
                </div>

            </section>
        </>
    )
}