'use client'

import { useState } from "react";
import Link from "next/link";

import useLangStore from '@/app/store/languageStore';
import { NewsCard } from '@/app/components';
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import styles from "./style.module.css";
import { motion } from "framer-motion";

const EVENTS_PER_PAGE = 2;

const PageComponent = ({ data }) => {
    const { lang } = useLangStore();
    const [visibleCount, setVisibleCount] = useState(EVENTS_PER_PAGE);

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + EVENTS_PER_PAGE);
    };

    const visibleEvents = data?.slice(0, visibleCount);

    const languages = {
        ru: 'Новости',
        en: 'News',
        ch: '訊息'
    };

    return (
        <>
            <Breadcrumbs
                title={languages[lang]}
            />
            <section className={styles.section}>

                <ul className={styles.list}>
                    {visibleEvents && visibleEvents.length > 0 ? (
                        visibleEvents.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/news/${item.slug}`}
                                >
                                    <NewsCard
                                        data={item}
                                        isSlide={false}
                                    />
                                </Link>
                            </motion.li>
                        ))
                    ) : (
                        <p>События не загружены</p>
                    )}
                </ul>
                {visibleCount < data.length && (
                    <button className={styles.events_link} onClick={handleLoadMore}>Загрузить ещё</button>
                )}
            </section >

        </>
    )
}

export default PageComponent