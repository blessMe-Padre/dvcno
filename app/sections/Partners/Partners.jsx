'use client';

import getPartners from '@/app/utils/getPartners';
import styles from './style.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';

import { SwiperNavButtons } from '../../components';
import { Autoplay, Navigation } from 'swiper/modules';

import Image from 'next/image';

import useLangStore from '@/app/store/languageStore';
import fetchApiServerData from "@/app/utils/fetchApiServerData";

import 'swiper/css';
import 'swiper/css/navigation';

const Partners = () => {
  const { lang } = useLangStore();
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchApiServerData('pages/main');
      if (result.status === 'error') {
        setError(true);
      }
      setData(result.data?.sections?.partners);
    };
    fetchData();
  }, []);


  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={`${styles.wrapper}`}>
          <div className='relative'>
            <h2 className={styles.title}>{data?.[0]?.content?.[lang]}</h2>

            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              modules={[Navigation, Autoplay]}
              className={styles.swiper_news}
              speed={1500}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                769: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {data?.[1]?.content?.ru?.length > 0 ? (
                data[1].content.ru.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className={`${styles.partners_img} anim_hover_card`}>
                      <Image
                        src={process.env.NEXT_PUBLIC_API_SERVER + item.image}
                        width={200}
                        height={200}
                        alt='image'
                      />
                    </div>
                  </SwiperSlide>
                ))
              ) : error ? (
                <p>Ошибка при загрузке данных</p>
              ) : (
                <p className="span-error-message">Загрузка...</p>
              )}
              <SwiperNavButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Partners;
