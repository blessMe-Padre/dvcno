"use client"
import React from "react"
import Image from 'next/image';
import styles from '../education.module.css';
import { Breadcrumbs, SlideMain, Accordion } from '@/app/components';
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
                    slug={'Образование'}
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

        </>
    )
}
