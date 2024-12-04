'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
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
                <SwiperSlide>

                </SwiperSlide>
               
            </Swiper>
        </section>
  );
};