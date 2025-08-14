"use client"

import styles from './style.module.css';
import { Breadcrumbs, DocumentComponent } from '@/app/components';
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
                            <Image
                                src={decor}
                                width={400}
                                height={20}
                                alt='decor'
                                className={styles.decor}
                            />
                            <Image
                                src={icon}
                                width={400}
                                height={150}
                                alt='icon'
                                className={styles.icon}
                            />
                        </div>


                        <div className={styles.info}>
                            <div className={styles.info_content}>

                                <div className={styles.text} dangerouslySetInnerHTML={{ __html: banner?.content }}></div>

                            </div>

                            <div className={styles.bg2}>
                                <Image
                                    className={styles.bg2_img}
                                    src={missionBg2}
                                    width={620}
                                    height={680}
                                    alt=''
                                />
                                <Image
                                    className={styles.missionBg3}
                                    src={missionBg3}
                                    width={400}
                                    height={400}
                                    alt=''
                                />

                                <Image
                                    className={styles.bg3_img}
                                    src={missionBgSmall}
                                    width={335}
                                    height={435}
                                    alt=''
                                />
                                <Image
                                    src={icon}
                                    width={50}
                                    height={50}
                                    alt='icon'
                                    className={styles.icon1}
                                />
                            </div>


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