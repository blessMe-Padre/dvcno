'use client'
import Image from "next/image";
import styles from "./style.module.css";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import { SwiperNavButtons } from "../../SwiperNavButtons/SwiperNavButtons";
import EventCard from "../../Cards/Event-Card/EventCard";

export default function Events() {
    return (
        <section className={styles.section}>
            <div className="container">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={2}
                    modules={[Navigation]}
                >
                    <SwiperSlide>
                        <EventCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <EventCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <EventCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <EventCard />
                    </SwiperSlide>
                    <SwiperNavButtons />
                </Swiper>
            </div>
        </section>
    )
}
