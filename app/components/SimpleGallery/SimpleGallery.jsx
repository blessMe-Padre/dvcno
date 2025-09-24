'use client'

/**
 * TODO: получить размеры картинок и проверить чтобы они были загружены на сервер
 */

import React, { useEffect } from 'react';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import styles from './style.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from '../../components';
import { Navigation } from 'swiper/modules'

import 'swiper/css';
import Image from 'next/image';

export default function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: '.swiper .swiper-slide a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className='pswp-gallery' id={props.galleryID}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={4}
        loop='true'
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidePrevView: 2
          },
          768: {
            slidesPerView: 4,
          },
        }}

      >
        <div className="pswp-gallery" id={props.galleryID}>
          {props.images.map((image, index) => (



            <SwiperSlide key={index} className='anim_hover_card'>
              <a
                href={process.env.NEXT_PUBLIC_API_SERVER + image.image.path}
                data-pswp-width={image.image.metadata.resolution.width}
                data-pswp-height={image.image.metadata.resolution.height}
                key={props.galleryID + '-' + index}
                target='_blank'
                rel="noreferrer"
                className={`${styles.img_wrapper} dsv-image`}
              >
                <div className={styles.div_img_shadow}>
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.73609 16.98V0.0199986H10.2561V16.98H7.73609ZM0.296094 9.7V7.34H17.6961V9.7H0.296094Z" fill="white" />
                  </svg>

                </div>
                <div className={styles.image_wrapper}>
                  <Image
                    src={process.env.NEXT_PUBLIC_API_SERVER + image.image.path}
                    width={337}
                    height={450}
                    alt="image"
                    loading='lazy'
                  />
                </div>

              </a>
            </SwiperSlide>
          ))}
        </div>
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
}
