"use client"
import React from "react"
import Image from 'next/image';
import styles from '../education.module.css';
import { Breadcrumbs, SlideMain, Accordion, DocumentComponent } from '@/app/components';
import { motion, useAnimation } from "framer-motion";

import useLangStore from '@/app/store/languageStore';

/**
 * TODO: получать таблицу из api   
 */
export default function Page({ data }) {
    const { lang } = useLangStore();

    const hero = data?.sections?.hero[0]?.content?.[lang];
    const process = data?.sections?.process;
    const docs = data?.sections?.docs;
    const docsStart = data?.sections?.docs_start;

    const link1 = {
        ru: 'Обучение',
        en: 'Training',
        ch: '培训课程'
    };
    const link2 = {
        ru: 'Профессиональное обучение в ДВЦНО',
        en: 'Professional training at DVTSNO',
        ch: 'DVTSNO 的專業培訓'
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
                    <SlideMain item={hero} learn_more={learn_more[lang]} />
                </section>

                <motion.section
                    onMouseMove={e => handleMouseMove(e)}
                    className={styles.accept}>
                    <div className={styles.title_wrapper}>
                        <div>
                            <h2 className={`title`}>{process[0]?.content?.[lang]}</h2>
                            <p className={styles.accept_text}>
                                <div dangerouslySetInnerHTML={{ __html: process[1]?.content?.[lang] }}></div>
                            </p>
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
                            <div className={styles.alert_text} dangerouslySetInnerHTML={{ __html: process[2]?.content?.[lang] }}></div>
                        </div>
                    </div>

                    <div className={styles.accept_table}>
                        <div className={styles.accept_text} dangerouslySetInnerHTML={{ __html: process[3]?.content?.[lang] }} />
                        <br />
                        <div dangerouslySetInnerHTML={{ __html: process[4]?.content?.[lang] }} />
                    </div>

                </motion.section>


                <motion.section
                    onMouseMove={e => handleMouseMove(e)}
                    className={`${styles.documents} section-dsv`}>

                    <div className="container">
                        <div className={styles.title_wrapper}>
                            <div>
                                <h1 className={`${styles.half_title} title text-white`}>{docs[0]?.content?.[lang]}</h1>
                                <p className={`${styles.accept_text} text-white`}>
                                    <div className={styles.accept_text} dangerouslySetInnerHTML={{ __html: docs[1]?.content?.[lang] }}></div>
                                </p>
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
                            {docs[2]?.content?.[lang]?.list.map((item, index) => (
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
                            <h2 className="title">{docsStart[0]?.content?.[lang]}</h2>
                            <div className={styles.title_sticker}>{docsStart[1]?.content?.[lang]}</div>
                        </div>

                        <ul className={styles.document_list}>
                            {docsStart[2]?.content?.[lang]?.list.map((item, index) => (
                                <li key={index}>
                                    <DocumentComponent title={item.title} link={item.link} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}
