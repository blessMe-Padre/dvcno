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

    return (
        <>
            <header className={` ${styles.header}`} style={{ backgroundColor: color }}>
                <p>{title}</p>
            </header>
            <ul>
                {accordionData.map((item, index) => (
                    <li
                        key={item.title}
                        className={`${styles.item} overflow-hidden`}
                    >
                        <div
                            className={styles.button_wrapper}
                            onClick={() => handleClick(index)}
                        >
                            <button className={styles.button}>{item.title}</button>
                            <div className={styles.button_decor}></div>
                        </div>
                        <motion.div
                            layout
                            variants={variants}
                            initial={'hidden'}
                            animate={openIndex === index ? 'visible' : 'hidden'}
                        >
                            <div className={styles.content}>{item.content}</div>
                        </motion.div>
                    </li>
                ))}
            </ul>
        </>
    );
}