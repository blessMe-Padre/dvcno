'use client'

import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { useState } from "react";
import { motion } from 'framer-motion';
import { insertSafeContent } from "@/app/utils/insertSafeContent";

export default function DivisionCard({ divisionData, lang }) {
    const [isOpen, setIsOpen] = useState(false);

    const goto_site = {
        ru: 'Перейти на сайт',
        en: 'Go to site',
        ch: '前往網站'
    };
    const on_map = {
        ru: 'Посмотреть на карте',
        en: 'View on map',
        ch: '在地圖上查看'
    };
    const read_description = {
        ru: 'Читать описание',
        en: 'Read description',
        ch: '閱讀說明'
    };
    const hide = {
        ru: 'Скрыть',
        en: 'Hide',
        ch: '隱藏'
    };

    const variants = {
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: {
            opacity: 0,
            height: 0,
        },
    }

    return (
        <div className={styles.card}>
            <div className={styles.image_wrapper}>
                <Image
                    aria-hidden
                    src={divisionData.image ?? '/placeholder/placeholder.svg'}
                    alt="Изображение"
                    width={706}
                    height={432}
                    className={`${styles.image} dsv-image`}
                />
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{divisionData.title}</h3>
                <p className={styles.address}>{divisionData.address}</p>
                <div className={styles.week}>{insertSafeContent(divisionData.shedule)}</div>

                <div>
                    <div className={styles.link_wrapper}>
                        <a href={`https://${divisionData.site}`} className={styles.link} target="_blank">
                            <div className={`${styles.icon_wrapper}`}>
                                <Image
                                    src="/icons/wold.svg"
                                    alt="world"
                                    width={23}
                                    height={23}
                                    className={`${styles.icon_image}`}
                                />
                            </div>
                            <span>{divisionData.site}</span>
                        </a>
                        <div className={styles.link}>
                            <div className={`${styles.icon_wrapper}`}>
                                <Image
                                    src="/icons/phone.svg"
                                    alt="world"
                                    width={23}
                                    height={23}
                                    className={`${styles.icon_image}`}
                                />
                            </div>
                            <span dangerouslySetInnerHTML={{ __html: divisionData.phones }} />
                        </div>
                    </div>

                    <div className={styles.link_button_wrapper}>
                        <a href={`https://${divisionData.site}`} className={styles.link_button}>
                            <span>{goto_site[lang]}</span>
                            <Image
                                src="/icons/link-arrow-white.svg"
                                alt="world"
                                width={22}
                                height={22}
                                className={`${styles.icon_image}`}
                            />
                        </a>
                        <a href={divisionData.link_to_place} className={`${styles.link_button} ${styles.link_button_white}`}>
                            <span>{on_map[lang]}</span>
                            <svg width="23" height="23" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.55605 1.43907L16.6545 1.43888M16.6545 1.43888L16.6545 14.3511M16.6545 1.43888L1.4388 16.6546" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {divisionData.description && (
                        <div className={styles.spoiler_wrapper}>
                            <motion.div
                                layout
                                variants={variants}
                                initial={'hidden'}
                                animate={isOpen ? 'visible' : 'hidden'}
                                className={`${styles.spoiler_text}`}>
                                {insertSafeContent(divisionData.description)}
                            </motion.div>
                            <div
                                onClick={() => setIsOpen(!isOpen)}
                                className={styles.spoiler_link}
                            >
                                <span>
                                    {isOpen ? hide[lang] : read_description[lang]}
                                </span>
                                <Image
                                    src="/icons/arrow-down.svg"
                                    alt="world"
                                    width={17}
                                    height={10}
                                    className={`${styles.spoiler_arrow} ${isOpen ? styles.spoiler_arrow_up : ''}`}
                                />
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </div >
    )
}
