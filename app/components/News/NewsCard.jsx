"use client";
import React from 'react';
import styles from './style.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
// import 'swiper/css/pagination';

import Image from 'next/image';


const NewsCard = ({ data }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.card_img}>
                    <Swiper
                        pagination={true}
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        autoplay={true}
                        speed={1500}
                        className='custom_wrapper'
                    >
                        {data.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                {image.slide && (
                                    <Image
                                        src={image.slide ? image.slide : '/placeholder/placeholder.png'}
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
                        ))}

                    </Swiper>
                </div>
                <div className={styles.card__content}>

                    <div className={styles.date_and_subtitle}>
                        <div className={styles.date}>
                            {data.date}
                        </div>

                        <div className={styles.subtitle}>
                            {data.subtitle}
                        </div>
                    </div>

                    <h2 className={styles.title}>{data.title}</h2>

                    <p className={styles.content} dangerouslySetInnerHTML={{ __html: data.content}}></p>

                    {/* <a href={data.link} target="_blank">Read More</a> */}
                </div>
            </div>
        </div>
    )
}

export default NewsCard;