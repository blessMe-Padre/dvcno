"use client";
import React from 'react';
import styles from './style.module.css';

import Image from 'next/image';

import { useState, useEffect } from 'react';
import useLangStore from '@/app/store/languageStore';
import fetchApiServerData from '@/app/utils/fetchApiServerData';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NewsCard } from '../../components';

import { SwiperNavButtons } from '../../components';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const News = () => {
    const { lang } = useLangStore();
    const [news, setNews] = useState();
    const [title, setTitle] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result2 = await fetchApiServerData('pages/main');
            const currentSettings = await result2?.data?.sections?.news?.[1]?.content?.[lang];
            const enabled = currentSettings?.enabled === 'true' ? 'false' : 'true';
            const data = await fetchApiServerData(`news?items_per_page=${currentSettings?.count}&only_active=${enabled}`);
            setNews(data?.data);
            if (result2.status === 'error') {
                setError(true);
            }
            setTitle(result2.data?.sections?.news?.[0]?.content);
        };

        fetchData();
    }, []);

    return (
        <div className={`${styles.violet_bg} ${styles.news_dekor}`}>
            <section className={`${styles.section} container`}>
                <div className='container'>
                    <div className={`${styles.wrapper}`}>
                        <div className='relative'>
                            <h2 className={styles.title}>{title?.[lang] ?? 'Новости'}</h2>

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
                                    news?.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <Link
                                                href={`/news/${item.slug}`}
                                                style={{ display: 'block', height: '100%' }}
                                            >
                                                <NewsCard
                                                    data={item}
                                                />
                                            </Link>
                                        </SwiperSlide>
                                    ))
                                ) : error ? (
                                    <p>Ошибка при загрузке данных</p>
                                ) : (
                                    <p className="span-error-message">Загрузка...</p>
                                )}
                                <SwiperNavButtons />
                            </Swiper>
                        </div>
                    </div>

                </div>
                <Link className={styles.news_link} href="/news">Смотреть все новости</Link>
            </section>
        </div>
    )
}

export default News;