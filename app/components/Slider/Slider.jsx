'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.css';
import Image from 'next/image';

import Link from 'next/link';

import { useState, useEffect } from 'react';

import { Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';

import sliderBgBig from '../../../public/main-sliders/sliders-bg-1.png'
import sliderBgMedium from '../../../public/main-sliders/sliders-bg-m-1.png'
import sliderBgSmall from '../../../public/main-sliders/sliders-bg-s-1.png'

import { mainSlidersData } from '../../../mock-data/sliders'



export default function Slider() {

    const [sliderBg, setSliderBg] = useState();


    const getALlSliders = async () => {
        try {
            // const response = await fetch('../../mock-data/sliders.js');

            // if (response.ok) {
            //     const mainSlidersData = response.data;
            // }

            // return response.data;
        } catch (error) {
            // console.error(`Error`, error);
            // throw error;
        }
    };

    useEffect(() => {
        getALlSliders();
    }, [])


    useEffect(() => {
        function handleResize() {
            // if (window.innerWidth >= 1200) {
            //     setSliderBg(mainSlidersData.map(slider => slider.images[0]));
            // }
            // else if (window.innerWidth >= 769) {
            //     setSliderBg(sliderBgMedium);
            // }
            // else if (window.innerWidth <= 480) {

            //     setSliderBg(sliderBgSmall);
            // }

            const imageUrls = mainSlidersData.map((slider) => {
                const imageObj = slider.images[0];
                const imageUrl = imageObj ? (imageObj.sliderBgBig || imageObj.sliderBgMedium || imageObj.sliderBgSmall || null) : null;
                setSliderBg(imageUrl);
                console.log(imageUrl, sliderBgBig)


            });
        }

        window.addEventListener('resize', handleResize);
        handleResize()
        return () => window.removeEventListener('resize', handleResize);

    }, []);


    return (
        <section
            className={styles.section__swiper}
        >
            <Swiper
                pagination={true}
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
            >
                {

                    mainSlidersData &&

                    mainSlidersData.map((item, index) => {
                        return (
                            // ПОДОГНАТЬ ВСЕ СЛАЙДЕРЫ ПОД ОДИН РАЗМЕР
                            <SwiperSlide key={index}>
                                <Image
                                    src={sliderBgBig}
                                    width='100%'
                                    height='100%'
                                    alt='slider_bg'
                                    className={`${styles.sliderBg} dsv-image`}

                                />
                                <div
                                    className={styles.slider}
                                >
                                    <div className={styles.slider__wrapper__content}>

                                        <h2 className={styles.slider__title}>
                                            {item.title}
                                        </h2>

                                        <p className={styles.slider__desc}>
                                            {item.description}
                                        </p>

                                        {item.listItems && item.listItems.length > 0 && (
                                            <ul className={`${styles.slider__list} ${item.listItems.length > 3 ? styles.add_class : ''}`}>
                                                {item.listItems.map((element, idx) => (
                                                    <li key={idx}>{element}</li>
                                                ))}
                                            </ul>
                                        )}

                                        <Link href={item.link} className={styles.slider__link}>
                                            <p>Узнать подробнее</p>
                                            <svg width="19" height="18" viewBox="0 0 19 18" fill="#" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" stroke="#191830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Link>

                                    </div>

                                </div>
                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>
        </section>
    );
};