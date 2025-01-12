'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './style.module.css';


import { SlideMain } from '../../components';
import { useState, useEffect } from 'react';

import { Pagination, Autoplay } from 'swiper/modules';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

import getMainSliders from '../../utils/getMainSliders';

export default function Slider() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getMainSliders();
            setData(result);
        };

        fetchData();

    }, []);

    return (
        <section
            className={`${styles.section__swiper} main_slider`}
        >
            <Swiper
                pagination={true}
                modules={[Pagination, Autoplay]}
                autoplay={true}
                spaceBetween={50}
                slidesPerView={1}
                speed={4000}
            >

                {data && data.length > 0 ? (
                    data.map((item, index) => {
                        return (
                            // ПОДОГНАТЬ ВСЕ СЛАЙДЕРЫ ПОД ОДИН РАЗМЕР
                            <SwiperSlide key={index}>
                                <SlideMain item={item} />
                            </SwiperSlide>
                        )
                    })
                )
                    : (
                        <Image
                            // src={placeholder}
                            width={1400}
                            height={600}
                            alt='slider_bg'
                            className={`${styles.sliderBg} dsv-image`}
                            placeholder="blur"
                            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority

                        />                    
                    )
                }
            </Swiper>
        </section>
    );
};