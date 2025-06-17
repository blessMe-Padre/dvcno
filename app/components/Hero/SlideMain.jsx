'use client'

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from './style.module.css';
import useLangStore from '@/app/store/languageStore';
import placeholder from '../../../public/placeholder/placeholder.svg';

const SlideMain = ({ item, isActive }) => {
    const { lang } = useLangStore();
    const [sliderBg, setSliderBg] = useState(null);
    const [imageSize, setImageSize] = useState({ width: 1440, height: 680 });

    const language = {
        ru: 'Узнать подробнее',
        en: 'Find out more',
        ch: '了解更多',
    }

    useEffect(() => {
        if (item) {
            const width = window.innerWidth;
            function handleResize() {
                if (width >= 1200) {
                    setSliderBg(item.images.big);
                    setImageSize({ width: 1440, height: 680 });
                } else if (width >= 769) {
                    setSliderBg(item.images.medium);
                    setImageSize({ width: 1024, height: 500 });
                } else if (window.innerWidth <= 480) {
                    setSliderBg(item.images.small);
                    setImageSize({ width: 768, height: 400 });
                }
            }

            window.addEventListener('resize', handleResize);
            handleResize()
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [item]);

    return (
        <>
            <Image
                src={sliderBg ? process.env.NEXT_PUBLIC_API_SERVER + sliderBg : placeholder}
                width={imageSize.width}
                height={imageSize.height}
                alt='slider_bg'
                className={`${styles.sliderBg} dsv-image`}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+"
                priority={isActive}

            />
            <div className={styles.slider}>
                <div className={styles.slider__wrapper__content}>
                    <h2 className={`${styles.slider__title}`}>
                        {item.title}
                    </h2>

                    <div className={styles.slider__desc} dangerouslySetInnerHTML={{ __html: item?.content }}></div>

                    <Link href={item.link} className={`${styles.slider__link}`}>
                        <p>{language[lang] ?? 'Узнать подробнее'}</p>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="#" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" stroke="#191830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    )

}

export default SlideMain;