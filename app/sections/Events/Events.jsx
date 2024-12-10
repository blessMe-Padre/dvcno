'use client'
import Image from "next/image";
import styles from "./style.module.css";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';

import EventCard from "./../../components/Cards/Event-Card/EventCard";
import { SwiperNavButtons } from "../../components/SwiperNavButtons/SwiperNavButtons";

export default function Events() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>События</h2>
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
