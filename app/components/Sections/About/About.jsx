'use client'
import { useEffect, useState } from "react";

import Image from "next/image";
import styles from "./style.module.css";
import Card from "../../Cards/Card/Card";
import getEduPages from '../../../utils/getEduPages';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import { SwiperNavButtons } from "../../SwiperNavButtons/SwiperNavButtons";
import 'swiper/css';
import 'swiper/css/navigation';


export default function About() {
    const [data, setData] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const menu = await getEduPages();
            setData(menu);
        };

        fetchData();
        setIsMobile(window.innerWidth < 560);

    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.title_wrapper}>
                <h2 className={styles.title}>Дальневосточный центр непрерывного образования - это</h2>
                <div className={styles.image_wrapper}>
                    <Image
                        alt="декор"
                        src="/decor/image-1.png"
                        width={250}
                        height={150}
                    />
                </div>
            </div>
            <div>
                {isMobile ? (
                    <>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            modules={[Navigation]}
                        >
                            {data && data.length > 0 ? (
                                data.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <Card
                                            image={item.image}
                                            description={item.description}
                                            link={item.link}
                                        />
                                    </SwiperSlide>
                                ))
                            ) : (
                                <p className="span-error-message">Данные отсутствуют.</p>
                            )}
                            <SwiperNavButtons
                                addClass={'buttons_bottom'}
                            />
                        </Swiper>
                    </>
                ) : (
                    <ul className={styles.list}>
                        {data && data.length > 0 ? (
                            data.map((item) => (
                                <li key={item.id}>
                                    <Card
                                        image={item.image}
                                        description={item.description}
                                        link={item.link}
                                    />
                                </li>
                            ))
                        ) : (
                            <p className="span-error-message">Данные отсутствуют.</p>
                        )}
                    </ul>
                )}
            </div>

        </section>
    )
}
