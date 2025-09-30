"use client"

import { useState, useEffect } from "react";
import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';
import useLangStore from '@/app/store/languageStore';
import { AnimateElement } from '@/app/components';

import Image from 'next/image';

import missionBg2 from '@/public/about_center/mission-bg-2.png';
import missionBg3 from '@/public/about_center/mission-bg-2-m.png';
import missionBgSmall from '@/public/about_center/mission-bg-2-small.png';
import pattern2 from '@/public/about_center/pattern_2.png';

import decor from '@/public/about_center/decor_mission.svg';
import icon from '@/public/about_center/icon.svg';

export default function Page({ data }) {
    const { lang } = useLangStore();
    const [sliderBg, setSliderBg] = useState();
    const [imageSize, setImageSize] = useState({ width: 1440, height: 720 });

    const banner = data?.sections?.banner[0]?.content?.[lang];
    const worth = data?.sections?.worth;

    const worthHeader = worth[0].content?.[lang]?.[0];
    const worthList = worth[1].content?.[lang];

    const languages = {
        ru: 'Миссия',
        en: 'Mission',
        ch: 'Mission'
    };
    const about_center = {
        ru: 'О центре',
        en: 'About center',
        ch: '关于中心'
    };

    console.log(sliderBg);

    useEffect(() => {
        if (banner) {
            function handleResize() {
                const width = window.innerWidth;
                if (width >= 1024) {
                    setSliderBg(banner.images.big);
                    setImageSize({ width: 1440, height: 720 });
                } else if (width >= 520) {
                    setSliderBg(banner.images.medium);
                    setImageSize({ width: 520, height: 500 });
                } else {
                    setSliderBg(banner.images.small);
                    setImageSize({ width: 520, height: 400 });
                }
            }

            window.addEventListener('resize', handleResize);
            handleResize();
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [banner]);

    return (

        <>
            <section className={styles.section}>
                <div className={`${styles.bg} container relative`}>
                    <Breadcrumbs
                        slug={about_center[lang]}
                        link={'pages/about_center'}
                        title={languages[lang]}
                    />
                    <div className={styles.wrapper}>
                        <div className={styles.wrapper_title}>
                            <AnimateElement element="h2" className={`${styles.title} ${styles.color_white}`}>
                                {banner.title}
                            </AnimateElement>
                        </div>

                        <div className={styles.info}>
                            <div className={styles.info_content}>
                                <div className={styles.text} dangerouslySetInnerHTML={{ __html: banner?.content }}></div>
                            </div>

                            <Image
                                src={sliderBg ? process.env.NEXT_PUBLIC_API_SERVER + sliderBg : '/placeholder/placeholder.svg'}
                                width={imageSize.width}
                                height={imageSize.height}
                                alt='image'
                                className={styles.missionBg}
                            />
                        </div>
                    </div>

                </div>
            </section>

            <section className={styles.section}>
                <div className='container'>
                    <AnimateElement element="h2" className={styles.title}>
                        {worthHeader}
                    </AnimateElement>

                    <ul className={styles.add_list}>
                        {worthList.map((item, index) => {
                            return (
                                <AnimateElement element="li" key={index} className={styles.item} animationName='fadeLeft' animationDelay={index * 50}>

                                    <Image
                                        src={pattern2}
                                        width={100}
                                        height={100}
                                        alt='pattern2'
                                        className={styles.pattern2}
                                    />
                                    <div className={styles.item_content}>
                                        <Image
                                            src={process.env.NEXT_PUBLIC_API_SERVER + item.image}
                                            width={60}
                                            height={60}
                                            alt='logo'
                                        />
                                        <p className={styles.item_title}>{item.title}</p>
                                    </div>
                                </AnimateElement>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}