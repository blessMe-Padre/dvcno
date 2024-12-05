'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.css';
import 'swiper/css';

export default function Slider() {

    return (
        <section>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className={styles.slider} style={{ backgroundImage: `../public/main-sliders/slider-bg-1.png` }}>
                    <div>

                        <h2 className={styles.slider__title}>
                            Основное общее образование в ДВЦНО
                        </h2>

                        <p className={styles.slider__desc}>
                            Это второй уровень образования, цель которого - становление и формирование личности обучающегося, развитие его склонностей и интересов
                        </p>

                        <ul className={styles.slider__list}>
                            <li>Международная лингвистическая школа</li>
                            <li>Академический колледж (АК)</li>
                            <li>«Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина»</li>

                        </ul>

                        <button>
                            <p>Узнать подробнее</p>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" stroke="#191830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slider} style={{ backgroundImage: `../public/main-sliders/slider-bg-1.png` }}>
                    <div>

                        <h2 className={styles.slider__title}>
                            Основное общее образование в ДВЦНО
                        </h2>

                        <p className={styles.slider__desc}>
                            Это второй уровень образования, цель которого - становление и формирование личности обучающегося, развитие его склонностей и интересов
                        </p>

                        <ul className={styles.slider__list}>
                            <li>Международная лингвистическая школа</li>
                            <li>Академический колледж (АК)</li>
                            <li>«Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина»</li>

                        </ul>

                        <button>
                            <p>Узнать подробнее</p>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" stroke="#191830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slider} style={{ backgroundImage: `../public/main-sliders/slider-bg-1.png` }}>
                    <div>

                        <h2 className={styles.slider__title}>
                            Основное общее образование в ДВЦНО
                        </h2>

                        <p className={styles.slider__desc}>
                            Это второй уровень образования, цель которого - становление и формирование личности обучающегося, развитие его склонностей и интересов
                        </p>

                        <ul className={styles.slider__list}>
                            <li>Международная лингвистическая школа</li>
                            <li>Академический колледж (АК)</li>
                            <li>«Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина»</li>

                        </ul>

                        <button>
                            <p>Узнать подробнее</p>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" stroke="#191830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.slider} style={{ backgroundImage: `../public/main-sliders/slider-bg-1.png` }}>
                    <div>

                        <h2 className={styles.slider__title}>
                            Основное общее образование в ДВЦНО
                        </h2>

                        <p className={styles.slider__desc}>
                            Это второй уровень образования, цель которого - становление и формирование личности обучающегося, развитие его склонностей и интересов
                        </p>

                        <ul className={styles.slider__list}>
                            <li>Международная лингвистическая школа</li>
                            <li>Академический колледж (АК)</li>
                            <li>«Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина»</li>

                        </ul>

                        <button>
                            <p>Узнать подробнее</p>
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" stroke="#191830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};