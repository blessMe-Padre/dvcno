'use client'

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from './style.module.css';

import placeholder from '../../../public/placeholder/placeholder.svg';

const SlideMain = ({ item, isActive }) => {
    const [sliderBg, setSliderBg] = useState(null);
    const [imageSize, setImageSize] = useState({ width: 1440, height: 680 });
    console.log(sliderBg); //main-sliders/sliders-bg-s-1.png

    useEffect(() => {
        if (item) {
            const width = window.innerWidth;
            function handleResize() {
                if (width >= 1200) {
                    setSliderBg(item.images[0].sliderBgBig);
                    setImageSize({ width: 1440, height: 680 });
                } else if (width >= 769) {
                    setSliderBg(item.images[1].sliderBgMedium);
                    setImageSize({ width: 1024, height: 500 });
                } else if (window.innerWidth <= 480) {
                    setSliderBg(item.images[2].sliderBgSmall);
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
                src={sliderBg ? sliderBg : placeholder}
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

                    {item.listItems && item.listItems.length > 0 && (
                        <>
                            <h2 className={`${styles.slider__title} ${item.listItems.length > 3 ? styles.add_class_title : ''}`}>
                                {item.title}
                            </h2>

                            <p className={`${styles.slider__desc} ${item.listItems.length > 3 ? styles.add_class_desc : ''}`}>
                                {item.description}
                            </p>

                            <ul className={`${styles.slider__list} ${item.listItems.length > 3 ? styles.add_class : ''} title-white`}>
                                {item.listItems.map((element, idx) => (
                                    <li key={idx}>{element}</li>
                                ))}
                            </ul>

                            <Link href={item.link} className={`${styles.slider__link} ${item.listItems.length > 3 ? styles.add_class_link : ''}`}>
                                <p>Узнать подробнее</p>
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="#" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" stroke="#191830" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </>
                    )}

                </div>
            </div>
        </>
    )

}

export default SlideMain;