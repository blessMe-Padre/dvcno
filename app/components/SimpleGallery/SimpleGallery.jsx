'use client'

import React, { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import styles from './style.module.css'


import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);


    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
      if (!sliderRef.current) return;
      sliderRef.current.swiper.slideNext();
    }, []);



  return (
    
    <Swiper  
        navigation={{
          prevEl: '.btn_prev',
          nextEl: '.btn_next',
        }}       
        spaceBetween={40}
        slidesPerView={4} 
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
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
    </Swiper>
  );
}
