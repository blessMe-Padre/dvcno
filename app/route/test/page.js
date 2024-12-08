'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';


import { SwiperNavButtons } from "@/app/components/SwiperNavButtons/SwiperNavButtons";



import Image from "next/image";
import { useRef } from "react";


const MySwiper = () => {


  return (

    <div>
        
        
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView='auto'
        >
            
            <SwiperSlide>slide 1</SwiperSlide>
            <SwiperSlide>slide 2</SwiperSlide>

            <SwiperNavButtons />
        </Swiper>
        </div>
  )
}

export default MySwiper;