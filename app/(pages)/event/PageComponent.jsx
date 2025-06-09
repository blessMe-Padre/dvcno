'use client'

import { useState, useEffect } from "react";
import Link from "next/link";

import useLangStore from '@/app/store/languageStore';
import EventCard from "@/app/components/Cards/Event-Card/EventCard";
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
        ru: 'События',
        en: 'Events',
        ch: '活動'
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
                                <Link href={`/event/${item.slug}`}>
                                    <EventCard
                                        title={item?.title?.[lang]}
                                        description={item.description?.[lang]}
                                        thumbnail={item.thumbnail}
                                        date={item.date_event.day_d}
                                        month={item.date_event.month_F[1]}
                                        year={item.date_event.year_Y}
                                        week={item.date_event.day_D[0]}
                                        hour={item.date_event.time_H}
                                        minute={item.date_event.time_i}
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