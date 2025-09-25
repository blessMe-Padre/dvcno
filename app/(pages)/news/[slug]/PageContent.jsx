'use client'

import { useState, useEffect } from 'react';
import useLangStore from '@/app/store/languageStore';

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Image from 'next/image';
import styles from './style.module.css';
import { notFound } from 'next/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from '@/app/components';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const languages = {
    ru: 'Новости',
    en: 'News',
    ch: '訊息'
};

const PageContent = ({ page }) => {
    const { lang } = useLangStore();

    if (Array.isArray(page) && page.length === 0) {
        notFound();
    }

    const sanitizedContent = page?.content?.[lang] || '';
    const imagesList = page?.images || [];

    return (
        <div className='container'>
            <Breadcrumbs
                slug={languages[lang]}
                link={'news'}
                title={page.title?.[lang]}
            />

            <h1 className={styles.title}>{page.title?.[lang]}</h1>

            <header className={styles.header}>
                <div className={styles.item}>
                    <Image
                        src={'/icons/clock.svg'}
                        alt={"время"}
                        width={25}
                        height={25}
                    />
                    <div className={styles.tag}>Время чтения: {page.time_to_read?.[lang] || '2 минуты'}</div>
                </div>
            </header>

            <div className={`${styles.slider_wrapper}`}>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={false}
                    centeredSlides='true'
                    centeredSlidesBounds="true"
                    className='rounded-30'
                    speed={1500}
                >
                    {imagesList && imagesList.length > 0 ? (
                        imagesList?.map((item, index) => (
                            <SwiperSlide index={index} className="rounded-30">
                                <div className={styles.image_wrapper}>
                                    <Image
                                        src={page?.images[0]?.slide ? process.env.NEXT_PUBLIC_API_SERVER + page?.images[0]?.slide : '/placeholder/placeholder.svg'}
                                        alt='image'
                                        width={1460}
                                        height={650}
                                        className={styles.image}
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    ) : error ? (
                        <p>Ошибка при загрузке данных</p>
                    ) : (
                        <p className="span-error-message">Загрузка...</p>
                    )}

                    {imagesList && imagesList.length > 1 && (
                        <SwiperNavButtons addClass={'news_slide_buttons'} />
                    )}
                </Swiper>
            </div>

            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </div>
    )
}

export default PageContent