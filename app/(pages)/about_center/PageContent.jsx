'use client'
import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/app/components";

import pattern from "@/public/about_center/pattern.svg";
import center from "@/public/about_center/bg_pattern.png";
import center2 from "@/public/about_center/bg_pattern2.png";
import decor from "@/public/about_center/decor.svg";
import decor1 from "@/public/about_center/do_item_1.svg";
import decor2 from "@/public/about_center/do_item_2.svg";
import decor3 from "@/public/about_center/decor2.svg";
import label from "@/public/about_center/label.png";
import number_01 from "@/public/about_center/01.svg";
import number_02 from "@/public/about_center/02.svg";
import number_03 from "@/public/about_center/03.svg";
import purpose from "@/public/about_center/purpose.svg";
import purposeImage from "@/public/about_center/purpose_check.svg";

import useLangStore from '@/app/store/languageStore';

const PageContent = ({ data }) => {
    const { lang } = useLangStore();

    const headerLinks = data?.sections?.main[1]?.content[lang];
    const banner = data?.sections?.main[2]?.content[lang];
    const tasksList = data?.sections?.tasks?.[1]?.content?.[lang];

    console.log(tasksList);
    // console.log(data?.sections?.activity?.[2]?.content?.[lang]?.[0]?.content);
    //  <div className={styles.strategy_item_desc} dangerouslySetInnerHTML={{ __html: data?.sections?.strategy?.[1]?.content?.[lang]?.[0]?.content }}></div>

    return (
        <>

            {/* <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs title={"Обучение"} />
                    <h2 className={styles.title}>{data?.title[lang]}</h2>

                    <div className={styles.wrapper_links}>
                        {headerLinks && headerLinks.length > 0 &&
                            headerLinks.map((item, index) => {
                                return (
                                    <Link key={index} href={item?.url} className={styles.link}>
                                        <p>{item?.title}</p>
                                        <svg
                                            className={styles.svg}
                                            width="19"
                                            height="18"
                                            viewBox="0 0 19 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546"
                                                stroke="#FCCC05"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </Link>
                                )
                            })}

                    </div>

                    <div className={styles.info}>
                        <div>
                            <h2 className={`${styles.title} ${styles.title_white}`}>
                                {banner?.title}
                            </h2>
                            <Image src={pattern} width={50} height={50} alt='img' />
                            <div className={styles.content_desc} dangerouslySetInnerHTML={{ __html: banner?.content }}></div>
                        </div>

                        <div className={styles.img_wrapper}>
                            <Image
                                src={center}
                                width={430}
                                height={540}
                                objectFit="cover"
                                alt="center"
                                className={styles.img_big}
                            />
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className={styles.section_do}>
                <div className="container relative">
                    <h2 className={styles.title}>{data?.sections?.activity[0]?.content[lang] || 'Деятельность'}</h2>
                    <p className={styles.description}>{data?.sections?.activity[1]?.content[lang]}</p>

                    <Image
                        className={styles.decor}
                        src={decor}
                        width={350}
                        height={100}
                        alt="decor"
                    />

                    <div className={styles.do_info_wrapper}>
                        <div className={styles.do_info}>
                            <div className={styles.do_info_title_wrapper}>
                                <p className={styles.name_company_do}>{data?.sections?.activity?.[2]?.content?.[lang]?.[0]?.title || 'Общее образование'}</p>
                                <div>
                                    <Image
                                        src={decor1}
                                        width={130}
                                        height={130}
                                        alt="общее образование"
                                    />
                                </div>
                            </div>
                            <div className={styles.do_list_wrapper} dangerouslySetInnerHTML={{ __html: data?.sections?.activity?.[2]?.content?.[lang]?.[0]?.content }}></div>
                        </div>

                        <div className={styles.do_info}>
                            <div className={styles.do_info_title_wrapper}>
                                <p className={styles.name_company_do}>
                                    {data?.sections?.activity?.[2]?.content?.[lang]?.[1]?.title || 'профессиональное обучение'}
                                </p>
                                <div>
                                    <Image
                                        src={decor2}
                                        width={130}
                                        height={130}
                                        alt="общее образование"
                                    />
                                </div>
                            </div>

                            <div className={styles.do_list_wrapper} dangerouslySetInnerHTML={{ __html: data?.sections?.activity?.[2]?.content?.[lang]?.[1]?.content }}></div>

                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className={styles.section_strategy}>
                <div className="container relative">
                    <div className={`${styles.title_strategy_wrapper}`}>
                        <div className="relative">
                            <h2 className={`${styles.title} ${styles.title_white}`}>
                                {data?.sections?.strategy?.[0]?.content?.[lang] || 'Стратегия развития'}
                            </h2>
                            <Image
                                className={styles.title_decor}
                                src={decor3}
                                width={300}
                                height={15}
                                alt="image"
                            />
                        </div>
                        <div>
                            <Image
                                className={styles.label}
                                src={label}
                                width={350}
                                height={180}
                                alt="image"
                            />
                        </div>
                    </div>

                    <ul className={styles.strategy_list}>
                        <li className={styles.strategy_item}>
                            <div>
                                <Image
                                    src={number_01}
                                    width={60}
                                    height={60}
                                    alt="01"
                                    className={styles.strategy_img_number}
                                />
                            </div>
                            <div>
                                <div className={styles.strategy_item_desc} dangerouslySetInnerHTML={{ __html: data?.sections?.strategy?.[1]?.content?.[lang]?.[0]?.content }}></div>

                            </div>
                        </li>
                        <li className={styles.strategy_item}>
                            <div>
                                <Image
                                    src={number_02}
                                    width={60}
                                    height={60}
                                    alt="01"
                                    className={styles.strategy_img_number}
                                />
                            </div>
                            <div className={styles.strategy_item_desc} dangerouslySetInnerHTML={{ __html: data?.sections?.strategy?.[1]?.content?.[lang]?.[1]?.content }}></div>
                        </li>
                        <li className={styles.strategy_item}>
                            <div>
                                <Image
                                    src={number_03}
                                    width={60}
                                    height={60}
                                    alt="01"
                                    className={styles.strategy_img_number}
                                />
                            </div>
                            <div className={styles.strategy_item_desc} dangerouslySetInnerHTML={{ __html: data?.sections?.strategy?.[1]?.content?.[lang]?.[2]?.content }}></div>
                        </li>
                    </ul>
                </div>
            </section> */}

            <section className={styles.section_purpose}>
                <div className="container relative">
                    <h2 className={styles.title}>{data?.sections?.tasks?.[0]?.content?.[lang] || 'Главные цели и задачи'}</h2>

                    <Image
                        className={styles.purpose_img}
                        src={purpose}
                        width={60}
                        height={60}
                        alt="purpose"
                    />

                    <ul className={styles.purpose_list}>
                        {tasksList && tasksList.length > 0 ? (
                            tasksList.map((item, index) => {
                                return (
                                    <li className={styles.purpose_item} key={index}>
                                        <Image
                                            src={purposeImage}
                                            width={60}
                                            height={60}
                                            alt="purpose_check"
                                        />
                                        <div className={styles.strategy_item_desc} dangerouslySetInnerHTML={{ __html: item?.content }}></div>
                                    </li>
                                )
                            })
                        ) :
                            'данные не загружены'
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default PageContent