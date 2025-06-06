'use client'
import { useState, useEffect } from "react";
import styles from "./style.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';

import { SwiperNavButtons } from "../../components";

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import getGallery from '@/app/utils/getGallery';


function Gallery() {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getGallery();
            setData(result);
        };

        fetchData();
    }, []);

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
                        {data && data.length > 0 ? (
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
                                {data.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <a
                                            href={image.largeURL}
                                            data-pswp-width={image.width}
                                            data-pswp-height={image.height}
                                            key={'#main-gallery' + '-' + 1}
                                            target='_blank'
                                            rel="noreferrer"
                                            className={`${styles.img_wrapper} dsv-image`}
                                        >
                                            <img src={image.largeURL} alt="" width={'100%'} height={'100%'} />
                                        </a>
                                    </SwiperSlide>
                                ))}
                                <SwiperNavButtons addClass="swiper_nav_btns shadows_nav" />
                            </Swiper>
                        ) : (
                            <div>
                                Загрузка данных...
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;