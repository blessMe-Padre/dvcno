"use client";
import React from 'react';
import styles from './style.module.css';

import bg from '../../../public/news/decor_news.png'
import Image from 'next/image';
import Swiper from 'swiper';

export const News = () => {
    return (
        <div className={styles.violet_bg}>
            <section className={styles.section}>
                <Image
                    src={bg}
                    alt="News Background"
                    objectFit="cover"
                    className={styles.news_dekor}
                />

                <div className={`${styles.wrapper} container`}>
                    <h2 className={styles.title}>
                        новости
                    </h2>

                    <Swiper>
                        
                    </Swiper>
                </div>
            </section>
        </div>
    )
}