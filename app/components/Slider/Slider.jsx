'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.css';
import Image from 'next/image';

import { useState, useEffect } from 'react';

import 'swiper/css';

import sliderBgBig from '../../../public/main-sliders/sliders-bg-1.png'
import sliderBgMedium from '../../../public/main-sliders/sliders-bg-m-1.png'
import sliderBgSmall from '../../../public/main-sliders/sliders-bg-s-1.png'

import { mainSlidersData } from '../../../mock-data/sliders' 



export default function Slider() {

    const [sliderBg, setSliderBg] = useState(sliderBgBig);

    
    const getALlSliders = async () => {
        try {
            const response = await fetch('../../mock-data/sliders.js');
            
            // if (response.ok) {
            //     const mainSlidersData = response.data;
            // }

            return response.data;
        } catch (error) {
            console.error(`Error`, error);
            // throw error;
        }
    };

    useEffect(() => {
        getALlSliders();
    }, [])


    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1200) {
                setSliderBg(sliderBgBig);
            }
            else if (window.innerWidth >= 769) {
                setSliderBg(sliderBgMedium);
            }
            else if (window.innerWidth <= 480) {

                setSliderBg(sliderBgSmall);
            }
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
                                    src={sliderBg}
                                    width='100%'
                                    height='100%'
                                    alt='slider_bg'
                                    className={styles.sliderBg}

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

                                        <ul className={styles.slider__list}>
                                            {item.listItems.map((element, idx) => {
                                                
                                                // СДЕЛАТЬ ПРОВЕРКУ НА КОЛ_ВО ЭЛЕМЕНТОВ В СПИСКЕ И ДАТЬ КЛАСС
                                                return (
                                                    <li key={idx}>
                                                        {element}
                                                    </li>
                                                )
                                            })}
                                            {/* <li>Международная лингвистическая школа</li>
                                            <li>Академический колледж (АК)</li>
                                            <li>«Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина»</li> */}

                                        </ul>

                                        {/* ДОБАВИТЬ ССЫЛКУ  */}
                                        <button className={styles.slider__btn__more}>
                                            <p>Узнать подробнее</p>
                                            <svg width="19" height="18" viewBox="0 0 19 18" fill="#" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" stroke="#191830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
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