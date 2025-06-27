"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.css";

import { SlideMain } from "../../components";
import { useState, useEffect } from "react";

import { Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

import fetchApiServerData from "@/app/utils/fetchApiServerData";
import useLangStore from '@/app/store/languageStore';

export default function Slider() {
  const { lang } = useLangStore();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(data);


  useEffect(() => {
    const fetchData = async () => {

      const result = await fetchApiServerData('pages/main');
      setData(result.data?.sections?.hero[0]?.content?.[lang]);

      setIsLoading(false);
    };

    fetchData();
  }, [lang]);

  return (
    <section
      className={`${styles.section__swiper} main_slider`}
      style={{ pointerEvents: "auto" }}
    >
      {isLoading ?
        <div className={styles.loading}>
          <div>
            <p>Загрузка</p>
            <span className="loader"></span>
          </div>
        </div>
        :
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          // // autoplay={{ delay: 6000 }}
          // autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={2000}
          spaceBetween={50}
          slidesPerView={1}
          preventClicksPropagation={false}
          preventClicks={false}
          // отправляем кастомное событие при клике на слайдер
          onTouchEnd={(swiper, event) => {
            document.dispatchEvent(new CustomEvent("sliderClick"));
          }}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index} style={{ pointerEvents: "auto" }}>
                <SlideMain item={item} isActive={index === 0} isSlider={true} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      }

    </section>
  );
}
