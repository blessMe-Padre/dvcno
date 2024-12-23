"use client"
import { Content } from "next/font/google";
import styles from "./style.module.css";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Accordion({ color, title, accordionData }) {
    const [openIndex, setOpenIndex] = useState(null);

    const variants = {
        visible: {
            opacity: 1,
            height: 'auto',
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1,
            },
        },
        hidden: {
            opacity: 0,
            height: 0,
        },
    };

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    let count = 1;

    return (
        <>
            <header className={` ${styles.header}`} style={{ backgroundColor: color }}>
                <p>{title}</p>
            </header>
            <ul className={styles.list}>
                {accordionData.map((item, index) => (
                    <li
                        key={item.title}
                        className={`${styles.item} overflow-hidden`}
                    >
                        <div
                            className={styles.button_wrapper}
                            onClick={() => handleClick(index)}
                        >
                            <div className="flex gap-10">
                                <span className={styles.count}>{count < 10 ? '0' + count++ : count++}</span>
                                <button className={styles.button}>{item.title}</button>
                            </div>
                            <div className={`${styles.button_decor} ${openIndex === index ? styles.is_active : ''}`}></div>
                        </div>

                        <div>
                            <motion.div
                                layout
                                variants={variants}
                                initial={'hidden'}
                                animate={openIndex === index ? 'visible' : 'hidden'}
                                className="parallax-wrapper"
                            >
                                <div className={styles.content}>
                                    <ul className={styles.list_content}>
                                        {item.content.map((li, index) => (
                                            <li key={index} className={styles.item_content}>{li}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}