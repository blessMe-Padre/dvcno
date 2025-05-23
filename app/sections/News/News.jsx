"use client";
import React from 'react';
import styles from './style.module.css';
import useTranslationsStore, { TRANSLATION_SECTIONS } from '@/app/store/translationsStore';

import bg from '../../../public/news/decor_news.png'
import Image from 'next/image';

import { useState, useEffect } from 'react';

import getNews from '../../utils/getNews';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NewsCard } from '../../components';

import { SwiperNavButtons } from '../../components';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const News = () => {
    const [news, setNews] = useState();
    const { getTranslation } = useTranslationsStore();
    const sectionTitle = getTranslation('news', TRANSLATION_SECTIONS.HEADERS);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getNews();
            setNews(data);
        };

        fetchData();
    }, []);

    return (
        <div className={styles.violet_bg}>
            <section className={styles.section}>
                <Image
                    src={bg}
                    alt="News Background"
                    objectFit="cover"
                    className={styles.news_dekor}
                />
                <div className='container'>
                    <div className={`${styles.wrapper} `}>
                        <div className='relative'>
                            <h2 className={styles.title}>
                                {sectionTitle}
                            </h2>

                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={3}
                                autoplay={true}
                                centeredSlides='true'
                                centeredSlidesBounds="true"
                                className={styles.swiper_news}
                                speed={1500}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                    },
                                    769: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {news && news.length > 0 ? (
                                    news.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <Link
                                                href={`/news/${item.slug}`}
                                            >
                                                <NewsCard
                                                    data={item}
                                                />
                                            </Link>
                                        </SwiperSlide>
                                    ))
                                ) : (
                                    <p className="span-error-message">Данные отсутствуют.</p>
                                )}
                                <SwiperNavButtons />
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default News;