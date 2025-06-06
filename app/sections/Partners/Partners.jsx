'use client';

import getPartners from '@/app/utils/getPartners';
import styles from './style.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';

import { SwiperNavButtons } from '../../components';
import { Autoplay, Navigation } from 'swiper/modules';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

const Partners = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      const data = await getPartners();
      setPartners(data);
    };
    fetchPartners();
  }, []);

  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={`${styles.wrapper}`}>
          <div className='relative'>
            <h2 className={styles.title}>контакты</h2>

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
              {partners.data && partners.data.length > 0 ? (
                partners.data.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className={`${styles.partners_img} anim_hover_card`}>
                      <Image
                        src={item.image}
                        width={200}
                        height={200}
                        alt={item.title}
                      />
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <p className='span-error-message'>Данные отсутствуют.</p>
              )}
              <SwiperNavButtons />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
