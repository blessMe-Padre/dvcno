"use client"
import React from "react"
import Image from 'next/image';
import styles from '../education.module.css';
import { Division } from '@/app/sections';
import { Breadcrumbs, SlideMain, Accordion } from '@/app/components';
import { motion, useAnimation } from "framer-motion";

import useLangStore from '@/app/store/languageStore';

export default function Page({ data }) {
    const { lang } = useLangStore();

    const banner = data?.sections?.banner[0]?.content?.[lang];
    const dop_program = data?.sections?.dop_program;

    const link2 = {
        ru: 'Дополнительное образование в ДВЦНО',
        en: 'Additional education in DVTSNO',
        ch: 'DVTSNO的额外教育'
    };
    const link1 = {
        ru: 'Обучение',
        en: 'Training',
        ch: '培训课程'
    };
    const learn_more = {
        ru: 'Узнать подробнее',
        en: 'Learn more',
        ch: '了解更多'
    };

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
                    slug={link1[lang]}
                    link={'education'}
                    title={link2[lang]}
                />

                <section className={styles.hero_section}>
                    <SlideMain item={banner} learn_more={learn_more[lang]} isSlider={false} />
                </section>
            </div>

            <motion.div
                onMouseMove={e => handleMouseMove(e)}
                className="container">
                <div className={styles.title_wrapper}>
                    <h2 className={`title ${styles.half_title}`}>{dop_program[0]?.content?.[lang]} </h2>
                    <motion.img
                        src="/education/decor-3.svg"
                        alt="Изображение"
                        width={283}
                        height={219}
                        className="dsv-image"
                        animate={imgAnimation}
                        transition={{ ease: "easeInOut", }}
                    />
                </div>

                <Accordion
                    color='#37a4da'
                    title={dop_program[1]?.content?.[lang]?.title}
                    accordionData={dop_program[1]?.content?.[lang]?.list}
                />

                <Accordion
                    color='green'
                    title={dop_program[1]?.content?.[lang]?.title}
                    accordionData={dop_program[2]?.content?.[lang]?.list}
                />
            </motion.div>
        </>
    )
}
