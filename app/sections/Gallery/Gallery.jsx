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
import Image from "next/image";

import useLangStore from '@/app/store/languageStore';
import fetchApiServerData from "@/app/utils/fetchApiServerData";
import { AnimateElement } from "@/app/components";


function Gallery() {
    const { lang } = useLangStore();
    const [data, setData] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchApiServerData('pages/main');
            if (result.status === 'error') {
                setError(true);
            }
            setData(result.data?.sections?.gallery);
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
                    <AnimateElement element="h2" className={styles.title}>
                        {data?.[0]?.content?.[lang]}
                    </AnimateElement>
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
                                {data?.[1]?.content?.ru.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <a
                                            href={process.env.NEXT_PUBLIC_API_SERVER + image.image}
                                            data-pswp-width={708}
                                            data-pswp-height={450}
                                            key={'#main-gallery' + '-' + 1}
                                            target='_blank'
                                            rel="noreferrer"
                                            className={`${styles.img_wrapper} dsv-image`}
                                        >
                                            {/* <img src={image.largeURL} alt="image" width={'100%'} height={'100%'} /> */}
                                            <Image
                                                className={styles.gallery_img}
                                                src={process.env.NEXT_PUBLIC_API_SERVER + image.image}
                                                alt="image"
                                                width={708}
                                                height={450}
                                            />
                                        </a>
                                    </SwiperSlide>
                                ))}
                                <SwiperNavButtons addClass="swiper_nav_btns shadows_nav" />
                            </Swiper>
                        ) : error ? (
                            <p>Ошибка при загрузке данных</p>
                        ) : (
                            <p className="span-error-message">Загрузка...</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;