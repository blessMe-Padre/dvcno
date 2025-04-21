"use client"
import React from "react"
import Image from 'next/image';
import styles from '../education.module.css';
import { Breadcrumbs, SlideMain, Accordion, DocumentComponent } from '@/app/components';
import { motion, useAnimation } from "framer-motion";

const data = {
    title: "Профессиональное обучение в ДВЦНО",
    images: [
        {
            sliderBgBig: '/education/hero-bg-6-l.png',

        },
        {
            sliderBgMedium: '/education/hero-bg-6-m.png',

        },
        {
            sliderBgSmall: '/education/hero-bg-6-s.png',

        }
    ],

    description: "Автономная некоммерческая профессиональная образовательная организация «Дальневосточный центр непрерывного образования»",
    listItems: [
        'НШДС «Классическая европейская прогимназия»',
        'Начальная общеобразовательная школа-детский сад "Восточная школа" ',
        'Международная лингвистическая школа',
        'Академический колледж (АК)',
        '«Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина»',
        'Физкультурно-оздоровительный комплекс с бассейном «Лига спорта» (ФОК «Лига спорта»)',
    ],
    textPattern: 'Здесь создают творцов будущего',
    link: "#",
}

const documentData2 = [
    {
        title: "Правила приема на обучение по образовательным программам среднего профессионального образования в АНПОО «ДВЦНО» на 2024/25 учебный год.",
        link: "/",
    },
    {
        title: "Условия приема на обучение по договорам об оказании платных образовательных услуг в Автономную некоммерческую профессиональную образовательную организацию «Дальневосточный центр непрерывного образования» по программам среднего профессионального образования.",
        link: "/",
    },
]
const documentData = [
    {
        title: "Оригинал или ксерокопия документов, удостоверяющих личность, гражданство",
        link: "/",
    },
    {
        title: "Оригинал и (или) копия документа об образовании и (или) документа об образовании и о квалификации",
        link: "/",
    },
    {
        title: "4 фотографии 3х4",
        link: "/",
    },
    {
        title: "Копия СНИЛС абитуриента",
        link: "/",
    },
    {
        title: "Копия СНИЛС заказчика образовательных услуг",
        link: "/",
    },
    {
        title: "Копия медицинского полиса",
        link: "/",
    },
    {
        title: "Прививочный сертификат",
        link: "/",
    },
    {
        title: "Результаты флюорографического обследования",
        link: "/",
    },
    {
        title: "Копия свидетельства о перемене фамилии, имени, отчества (при наличии)",
        link: "/",
    },
    {
        title: "Копия удостоверения призывника или военного билета (при наличии)",
        link: "/",
    },
]

// export const metadata = {
//     title: "ДВЦНО | Профессиональное обучение в ДВЦНО",
//     description: "Профессиональное обучение в ДВЦНО",
// };

export default function page() {
    const imgAnimation = useAnimation();
    const handleMouseMove = e => {
        const { clientX, clientY } = e
        const moveX = clientX - window.innerWidth / 2
        const moveY = clientY - window.innerHeight / 2
        const offsetFactor = 20
        imgAnimation.start({
            x: moveX / offsetFactor,
            y: moveY / offsetFactor,
            transition: {
                type: "spring", // Тип анимации Используется для естественного перехода с эффектом пружины.
                stiffness: 200, // Жесткость пружины Определяет "жесткость" пружины. Чем выше значение, тем быстрее анимация.
                damping: 20,    // Сопротивление Контролирует затухание движения. Более высокие значения делают анимацию более плавной.
                duration: 0.3,  // Продолжительность анимации (опционально) Альтернатива для фиксированной продолжительности анимации.
            },
        })
    }

    return (
        <>
            <div className='container'>
                <Breadcrumbs
                    slug={'Обучение'}
                    link={'education'}
                    title={'Профессиональное обучение в ДВЦНО'}
                />
                <section className={styles.hero_section}>
                    <SlideMain item={data} />
                </section>

                <motion.section
                    onMouseMove={e => handleMouseMove(e)}
                    className={styles.accept}>
                    <div className={styles.title_wrapper}>
                        <div>
                            <h2 className={`title`}>производит прием на обучение</h2>
                            <p className={styles.accept_text}>по программам среднего профессионального образования на 2024-2025 учебный год</p>
                        </div>
                        <motion.img
                            src="/education/decor-4.svg"
                            alt="Изображение"
                            width={200}
                            height={80}
                            className={`${styles.decor_img} dsv-image`}
                            animate={imgAnimation}
                            transition={{ ease: "easeInOut", }}
                        />
                    </div>

                    <div className={styles.alert}>
                        <Image
                            src="/education/alert.svg"
                            alt="Изображение"
                            width={112}
                            height={112}
                            className="dsv-image"
                        />
                        <div>
                            <p className={styles.alert_text}><strong>Прием ведется</strong> без вступительных испытаний на основании документа об образовании.</p>
                            <p className={styles.alert_text}><strong>Обучение осуществляется</strong>  на основании договора об оказании платных образовательных услуг за счет физических и (или) юридических лиц.</p>
                        </div>
                    </div>

                    <p className={styles.accept_text}>Прием на обучение производится по следующим программам подготовки специалистов среднего звена:</p>

                    <div className={styles.accept_table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Код и наименование специальности</th>
                                    <th>Форма&nbsp;обучения</th>
                                    <th>Требования к уровню образования</th>
                                    <th>Сроки обучения</th>
                                    <th>Квалификация</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>38.02.03 Операционная деятельность в&nbsp;логистике</td>
                                    <td>очная</td>
                                    <td>основное общее образование (9 классов)</td>
                                    <td>2 года 10 месяцев</td>
                                    <td>Операционный логист</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </motion.section>
            </div>

            <motion.section
                onMouseMove={e => handleMouseMove(e)}
                className={`${styles.documents} section-dsv`}>

                <div className="container">
                    <div className={styles.title_wrapper}>
                        <div>
                            <h2 className={`${styles.half_title} title text-white`}>Документы, необходимые для поступления</h2>
                            <p className={`${styles.accept_text} text-white`}>При поступлении на обучение поступающий предоставляет медицинскую справку по форме № 086/у</p>
                        </div>
                        <motion.img
                            src="/education/decor-5.svg"
                            alt="Изображение"
                            width={166}
                            height={166}
                            className={`dsv-image`}
                            animate={imgAnimation}
                            transition={{ ease: "easeInOut", }}
                        />
                    </div>

                    <ul className={styles.document_list}>
                        {documentData.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.link} />
                            </li>
                        ))}
                    </ul>
                </div>

            </motion.section>

            <section className={styles.acceptance}>
                <div className="container">
                    <div className={styles.acceptance_title_wrapper}>
                        <h2 className="title">Прием документов начинается</h2>
                        <div className={styles.title_sticker}>20 июня 2024 года</div>
                    </div>

                    <ul className={styles.document_list}>
                        {documentData2.map((item, index) => (
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
