'use client'
import { useEffect, useState } from "react";

import Image from "next/image";
import styles from "./style.module.css";

import fetchApiServerData from "@/app/utils/fetchApiServerData";
import useLangStore from '@/app/store/languageStore';
import { AnimateElement } from "@/app/components";

export default function Why() {
    const { lang } = useLangStore();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchApiServerData('pages/main');
            setData(result.data?.sections?.why);
        };

        fetchData();
    }, []);

    return (
        <section className={styles.section}>
            <div className="container">
                <AnimateElement element="h2" className={`${styles.title} title-black`}>
                    {data?.[0]?.content?.[lang]}
                </AnimateElement>

                <ul className={styles.list}>
                    <li className={`${styles.item} anim_hover_card`}>
                        <h3 className={styles.subtile}>{data?.[1]?.content?.[lang]?.[0]?.title}</h3>
                        <div className={styles.text} dangerouslySetInnerHTML={{ __html: data?.[1]?.content?.[lang]?.[0]?.content }}></div>
                        <Image
                            src="/why/image-1.svg"
                            alt="Компетентность педагогических кадров"
                            width={105}
                            height={105}
                            className={`${styles.item_img} dsv-image`}
                        />
                    </li>
                    <li className={`${styles.item} anim_hover_card`}>
                        <Image
                            src="/why/main-bg.png"
                            alt="Компетентность педагогических кадров"
                            width={460}
                            height={550}
                            className={`${styles.main_img} dsv-image`}
                        />
                        <Image
                            src="/why/main-bg-mobile.png"
                            alt="Компетентность педагогических кадров"
                            width={320}
                            height={208}
                            className={`${styles.main_img_mobile} dsv-image`}
                        />
                    </li>
                    <li className={`${styles.item} anim_hover_card`}>
                        <h3 className={styles.subtile}>{data?.[1]?.content?.[lang]?.[2]?.title}</h3>
                        <div className={styles.text} dangerouslySetInnerHTML={{ __html: data?.[1]?.content?.[lang]?.[2]?.content }}></div>
                        <Image
                            src="/why/image-2.svg"
                            alt="Компетентность педагогических кадров"
                            width={105}
                            height={105}
                            className={`${styles.item_img} dsv-image`}
                        />
                    </li>
                    <li className={`${styles.item} anim_hover_card`}>
                        <h3 className={styles.subtile}>{data?.[1]?.content?.[lang]?.[3]?.title}</h3>
                        <div className={styles.text} dangerouslySetInnerHTML={{ __html: data?.[1]?.content?.[lang]?.[3]?.content }}></div>
                        <Image
                            src="/why/image-3.svg"
                            alt="Компетентность педагогических кадров"
                            width={105}
                            height={105}
                            className={`${styles.item_img} dsv-image`}
                        />
                    </li>
                    <li className={`${styles.item} anim_hover_card`}>
                        <h3 className={styles.subtile}>{data?.[1]?.content?.[lang]?.[4]?.title}</h3>
                        <div className={styles.text} dangerouslySetInnerHTML={{ __html: data?.[1]?.content?.[lang]?.[4]?.content }}></div>
                        <Image
                            src="/why/image-4.svg"
                            alt="Компетентность педагогических кадров"
                            width={105}
                            height={105}
                            className={`${styles.item_img} dsv-image`}
                        />
                    </li>
                </ul>
            </div>
        </section>
    )
}
