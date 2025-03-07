'use client'
import { useState, useEffect } from "react";
import styles from "./style.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';

import EventCard from "./../../components/Cards/Event-Card/EventCard";
import { SwiperNavButtons } from "../../components";
import getEvents from "@/app/utils/getEvents";
import Link from "next/link";

export default function Events() {
    const [events, setEvents] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getEvents();
            setEvents(result.data);
        };

        fetchData();
    }, []);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>События</h2>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={2}
                        modules={[Navigation]}
                        loop={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        className="swiper-mobile"
                    >
                        {events && events.length > 0 ? (
                            events.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Link href={`/event/${item.slug}`}>

                                        <EventCard
                                            title={item.title}
                                            key={item.aid}
                                            description={item.description}
                                            thumbnail={item.thumbnail}
                                            date={item.date_event.day_d}
                                            month={item.date_event.month_F[1]}
                                            year={item.date_event.year_Y}
                                            week={item.date_event.day_D[0]}
                                            hour={item.date_event.time_H}
                                            minute={item.date_event.time_i}
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))
                        ) : (
                            <p className="span-error-message">Данные отсутствуют.</p>
                        )}

                        <SwiperNavButtons addClass="swiper_nav_btns shadows_nav" />
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
