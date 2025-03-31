"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.css";

import { SlideMain } from "../../components";
import { useState, useEffect } from "react";

import { Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

import getMainSliders from "../../utils/getMainSliders";

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
      style={{ pointerEvents: "auto" }}
    >
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        autoplay={true}
        spaceBetween={50}
        slidesPerView={1}
        speed={4000}
        preventClicksPropagation={false}
        preventClicks={false}
        // отправляем кастомное событие при клике на слайдер
        onTouchEnd={(swiper, event) => {
          document.dispatchEvent(new CustomEvent("sliderClick"));
        }}
      >
        {data.map((item, index) => {
          return (
            // ПОДОГНАТЬ ВСЕ СЛАЙДЕРЫ ПОД ОДИН РАЗМЕР
            <SwiperSlide key={index} style={{ pointerEvents: "auto" }}>
              <SlideMain item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
