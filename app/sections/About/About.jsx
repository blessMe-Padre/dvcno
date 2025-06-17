'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";
import Card from "./../../components/Cards/Card/Card";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import { SwiperNavButtons } from "../../components";
import 'swiper/css';
import 'swiper/css/navigation';

import fetchApiServerData from "@/app/utils/fetchApiServerData";
import useLangStore from '@/app/store/languageStore';

export default function About() {
    const { lang } = useLangStore();
    const [data, setData] = useState([]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchApiServerData('pages/main');
            setData(result.data?.sections?.about);
        };

        fetchData();
        setIsMobile(window.innerWidth < 560);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.title_wrapper}>
                <h2 className={styles.title}>{data?.[0]?.content?.[lang]}</h2>
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
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        modules={[Navigation]}
                    >
                        {data?.[1]?.content?.[lang] && data?.[1]?.content?.[lang].length > 0 ? (
                            data?.[1]?.content?.[lang].map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Card
                                        image={item.image}
                                        description={item.content}
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
                ) : (
                    <ul className={styles.list}>
                        {data?.[1]?.content?.[lang] && data?.[1]?.content?.[lang].length > 0 ? (
                            data?.[1]?.content?.[lang].map((item, index) => (
                                <li key={index}>
                                    <Card
                                        image={item.image}
                                        description={item.content}
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
