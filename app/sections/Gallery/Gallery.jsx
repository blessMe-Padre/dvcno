'use client'
import { useState, useEffect } from "react";
import styles from "./style.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';

import { SwiperNavButtons } from "../../components/SwiperNavButtons/SwiperNavButtons";
import Link from "next/link";

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';


function Gallery() {

    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#main-gallery',
            children: '.swiper .swiper-slide a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>галерея</h2>
                    <div className='pswp-gallery' id='main-gallery'>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            modules={[Navigation]}
                            loop={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                            className="swiper-mobile"
                        >
                            <SwiperSlide>
                                <a
                                    href={'/gallery/image-1.png'}
                                    data-pswp-width={800}
                                    data-pswp-height={800}
                                    key={'#main-gallery' + '-' + 1}
                                    target='_blank'
                                    rel="noreferrer"
                                    className={`${styles.img_wrapper} dsv-image`}
                                >
                                    <img src={'/gallery/image-1.png'} alt="" width={708} height={450} />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    href={'/gallery/image-2.png'}
                                    data-pswp-width={800}
                                    data-pswp-height={800}
                                    key={'main-gallery' + '-' + 2}
                                    target='_blank'
                                    rel="noreferrer"
                                    className={`${styles.img_wrapper} dsv-image`}
                                >
                                    <img src={'/gallery/image-2.png'} alt="" width={708} height={450} />
                                </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                <a
                                    href={'/gallery/image-1.png'}
                                    data-pswp-width={800}
                                    data-pswp-height={800}
                                    key={'#main-gallery' + '-' + 3}
                                    target='_blank'
                                    rel="noreferrer"
                                    className={`${styles.img_wrapper} dsv-image`}
                                >
                                    <img src={'/gallery/image-1.png'} alt="" width={708} height={450} />
                                </a>
                            </SwiperSlide>

                            <SwiperNavButtons addClass="swiper_nav_btns" />
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery