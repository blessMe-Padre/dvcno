"use client";
import React from 'react';
import styles from './style.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/pagination';

import Image from 'next/image';
import useLangStore from '@/app/store/languageStore';

const NewsCard = ({ data, isSlide = true }) => {
    const { lang } = useLangStore();
    const paddingClass = isSlide ? '' : styles.padding_off;

    return (
        <div className={`${styles.card} ${paddingClass} anim_hover_card`}>
            <div className={styles.card_img}>
                <Swiper
                    pagination={true}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={true}
                    speed={3000}
                    className='custom_wrapper'
                >
                    {data?.images ?
                        (
                            data?.images?.map((image, index) => (
                                <SwiperSlide key={index}>
                                    {image?.slide && (
                                        <Image
                                            src={image.slide ? process.env.NEXT_PUBLIC_API_SERVER + image.slide : '/placeholder/placeholder.svg'}
                                            width={500}
                                            height={300}
                                            objectFit='contain'
                                            className={`${styles.image} dsv-image`}
                                            style={{ background: 'gray' }}
                                            alt='news_img'
                                        />
                                    )}
                                    {!image.slide && <p>Image not available</p>}  { }
                                </SwiperSlide>
                            ))
                        )
                        :
                        (<Image
                            src={'/placeholder/placeholder.svg'}
                            width={500}
                            height={300}
                            objectFit='contain'
                            className={`${styles.image} dsv-image`}
                            style={{ background: 'gray' }}
                            alt='news_img'
                        />)

                    }

                </Swiper>
            </div>
            <div className={styles.card__content}>

                <div className={styles.date_and_subtitle}>
                    <div className={styles.date}>
                        {data.date}
                    </div>

                    <div className={styles.subtitle}>
                        {data.subtitle?.[lang]}
                    </div>
                </div>

                <h2 className={styles.title}>{data?.title?.[lang]}</h2>
                <p className={styles.content} dangerouslySetInnerHTML={{ __html: data.content?.[lang] }}></p>
            </div>
        </div>
    )
}

export default NewsCard;