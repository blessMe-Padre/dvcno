'use client'

import React, { useEffect } from 'react';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import styles from './style.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperNavButtons } from '../SwiperNavButtons/SwiperNavButtons';
import { Navigation } from 'swiper/modules'

import 'swiper/css';

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

      >
        <div className="pswp-gallery" id={props.galleryID}>
          {props.images.map((image, index) => (
            <SwiperSlide key={index}>
              <a
                href={image.largeURL}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                key={props.galleryID + '-' + index}
                target='_blank'
                rel="noreferrer"
                className={styles.img_wrapper}
              >
                <img src={image.thumbnailURL} alt="" />
              </a>
            </SwiperSlide>
          ))}
        </div>
        <SwiperNavButtons />
      </Swiper>
    </div>
  );
}
