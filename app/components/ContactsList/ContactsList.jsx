'use client'

import decor from '@/public/contacts/decor.svg';
import Image from 'next/image';
import SVG_BG_Compoment from '@/app/ui/SVG/SVG_BG/SVG_BG';
import { useState } from 'react';
import { AnimateElement } from "@/app/components";
import Link from 'next/link';

import styles from './style.module.css';

const backgrounds = ['purple', 'light-blue', 'green', 'violet', 'light-blue', 'yellow', 'green']

const ContactsList = ({ data }) => {
    console.log(data);

    const [activeLink, setActiveLink] = useState(null);
    const handleChange = (e) => {
        setActiveLink(e.target);
    };

    return (
        <>
            <ul className={styles.contact_list_links}>

                {data.map((item, index) => (
                    <a
                        href={`#contact-${index}`}
                        key={index}
                        className={`${styles.item_link} ${activeLink?.id === `contact-${index}` ? styles.active : ""}`}
                        onClick={(e) => handleChange(e)}
                        id={`link-${index}`}
                    >
                        {item.subtitle}
                    </a>
                ))}

            </ul>

            <ul className={styles.contact_list}>
                {data.map((item, index) => (
                    <AnimateElement element="li" key={index} className={styles.contact_item}>
                        <div key={index} className={styles.contact_item} id={`contact-${index}`}>
                            <div className={`${styles.contact_name_wrapper}                                                 
                                ${backgrounds[index] === 'yellow' ? styles.bg_yellow : ''}
                                ${backgrounds[index] === 'light-blue' ? styles.bg_light_blue : ''}
                                ${backgrounds[index] === 'purple' ? styles.bg_purple : ''}
                                ${backgrounds[index] === 'green' ? styles.bg_green : ''}
                                ${backgrounds[index] === 'violet' ? styles.bg_violet : ''}
                            `}>

                                <SVG_BG_Compoment color={backgrounds[index]} />

                                <Image className={styles.decor} src={decor} width={50} height={50} alt='' />
                                <p className={styles.contact_name}>
                                    {item.title}</p>
                            </div>

                            <ul className={styles.contact_info}>
                                <li className={styles.info_item}>
                                    <div className={styles.info_item_url}>
                                        <div className={styles.wrapper_svg}>
                                            <svg
                                                className={`${backgrounds[index] === 'yellow' ? styles.fill_yellow : ''}
                                                        ${backgrounds[index] === 'light-blue' ? styles.fill_light_blue : ''}
                                                        ${backgrounds[index] === 'purple' ? styles.fill_purple : ''}
                                                        ${backgrounds[index] === 'green' ? styles.fill_green : ''}
                                                        ${backgrounds[index] === 'violet' ? styles.fill_violet : ''}
                                                    `}
                                                width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="50" height="50" rx="25" fill="#433C8C" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M36.6525 19.8272H30.98C30.6975 18.0501 30.2678 16.4131 29.7066 15.0103C29.3583 14.1386 28.9668 13.3832 28.5404 12.7511C32.1683 13.8011 35.135 16.423 36.6525 19.8272ZM28.5404 37.2497C28.9668 36.6168 29.3583 35.8619 29.7066 34.99C30.2678 33.5869 30.6975 31.9499 30.98 30.1727H36.6525C35.135 33.5778 32.1683 36.1995 28.5404 37.2497ZM13.3472 30.1728H19.02C19.3023 31.9499 19.7322 33.5869 20.2931 34.99C20.6422 35.862 21.0332 36.6168 21.4596 37.2498C17.8315 36.1995 14.865 33.5778 13.3472 30.1728ZM21.4596 12.7511C21.0332 13.3832 20.6423 14.1386 20.2931 15.0103C19.7321 16.4131 19.3023 18.0501 19.02 19.8272H13.3472C14.865 16.423 17.8315 13.8011 21.4596 12.7511ZM25 12.25C23.9726 12.25 22.845 13.5347 21.9843 15.6864C21.5015 16.8943 21.1242 18.2979 20.8643 19.8272H29.1357C28.8755 18.2979 28.4987 16.8943 28.0156 15.6864C27.155 13.5347 26.0274 12.25 25 12.25ZM12.25 25C12.25 23.8407 12.4065 22.7169 12.6979 21.6487H18.7866C18.6798 22.7346 18.6244 23.8576 18.6244 25C18.6244 26.1423 18.6798 27.2654 18.7866 28.3515H12.6979C12.4002 27.2593 12.2495 26.1321 12.25 25ZM20.6165 28.3516C20.504 27.2718 20.4457 26.1477 20.4457 25.0001C20.4457 23.8532 20.504 22.7291 20.6165 21.6488H29.3833C29.496 22.7291 29.5541 23.8532 29.5541 25.0001C29.5541 26.1477 29.496 27.2718 29.3833 28.3516H20.6165ZM25 37.75C26.0274 37.75 27.155 36.4653 28.0156 34.3138C28.4987 33.1065 28.8755 31.7023 29.1357 30.1728H20.8643C21.1242 31.7023 21.5015 33.1065 21.9843 34.3138C22.845 36.4653 23.9726 37.75 25 37.75ZM37.75 25C37.75 26.1595 37.5935 27.2831 37.3021 28.3515H31.2134C31.3202 27.2653 31.3756 26.1423 31.3756 25C31.3756 23.8576 31.3202 22.7346 31.2134 21.6487H37.3021C37.5998 22.7409 37.7505 23.868 37.75 25Z" fill="white" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p style={{ marginBottom: '5px', color: '#757f99' }}>Сайт</p>
                                            <p style={{ fontWeight: '600' }}>{item.site}</p>
                                        </div>
                                    </div>

                                </li>

                                <li className={styles.info_item}>
                                    <div className={styles.info_item_works}>
                                        <div className={styles.wrapper_svg}>
                                            <svg
                                                className={`${backgrounds[index] === 'yellow' ? styles.fill_yellow : ''}
                                                        ${backgrounds[index] === 'light-blue' ? styles.fill_light_blue : ''}
                                                        ${backgrounds[index] === 'purple' ? styles.fill_purple : ''}
                                                        ${backgrounds[index] === 'green' ? styles.fill_green : ''}
                                                        ${backgrounds[index] === 'violet' ? styles.fill_violet : ''}
                                                    `}
                                                width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="50" height="50" rx="25" fill="#433C8C" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M24.9997 12.084C22.445 12.084 19.9477 12.8415 17.8236 14.2608C15.6994 15.6801 14.0439 17.6974 13.0662 20.0577C12.0886 22.4179 11.8328 25.015 12.3312 27.5206C12.8296 30.0262 14.0598 32.3277 15.8662 34.1341C17.6726 35.9405 19.9742 37.1707 22.4798 37.6691C24.9854 38.1675 27.5825 37.9117 29.9427 36.9341C32.3029 35.9565 34.3202 34.3009 35.7395 32.1768C37.1588 30.0526 37.9163 27.5553 37.9163 25.0007C37.9163 23.3044 37.5822 21.6248 36.9331 20.0577C36.284 18.4905 35.3326 17.0666 34.1331 15.8672C32.9337 14.6678 31.5098 13.7163 29.9427 13.0672C28.3756 12.4181 26.6959 12.084 24.9997 12.084ZM29.5593 29.5602C29.4695 29.6504 29.3628 29.7219 29.2453 29.7707C29.1279 29.8195 29.0019 29.8446 28.8747 29.8446C28.7475 29.8446 28.6215 29.8195 28.504 29.7707C28.3865 29.7219 28.2799 29.6504 28.1901 29.5602L24.3151 25.6852C24.2249 25.5955 24.1534 25.4888 24.1047 25.3713C24.0559 25.2538 24.0308 25.1279 24.0309 25.0007V18.5423C24.0309 18.2854 24.133 18.039 24.3147 17.8573C24.4963 17.6756 24.7428 17.5736 24.9997 17.5736C25.2566 17.5736 25.503 17.6756 25.6847 17.8573C25.8664 18.039 25.9684 18.2854 25.9684 18.5423V24.5989L29.5593 28.1911C29.6492 28.2809 29.7206 28.3876 29.7693 28.5051C29.818 28.6226 29.8431 28.7485 29.8431 28.8757C29.8431 29.0028 29.818 29.1287 29.7693 29.2462C29.7206 29.3637 29.6492 29.4704 29.5593 29.5602Z" fill="white" />
                                            </svg>
                                        </div>

                                        <div>
                                            <p style={{ marginBottom: '5px', color: '#757f99' }}>График работы:</p>
                                            <p style={{ fontWeight: '600' }} dangerouslySetInnerHTML={{ __html: item.shedule }}></p>
                                        </div>
                                    </div>
                                </li>

                                <li className={styles.info_item}>
                                    <div className={styles.info_item_address}>
                                        <div className={styles.wrapper_svg}>
                                            <svg
                                                className={`${backgrounds[index] === 'yellow' ? styles.fill_yellow : ''}
                                                        ${backgrounds[index] === 'light-blue' ? styles.fill_light_blue : ''}
                                                        ${backgrounds[index] === 'purple' ? styles.fill_purple : ''}
                                                        ${backgrounds[index] === 'green' ? styles.fill_green : ''}
                                                        ${backgrounds[index] === 'violet' ? styles.fill_violet : ''}
                                                    `}
                                                width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="50" height="50" rx="25" fill="#433C8C" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M25.0272 11.7051C22.1379 11.7087 19.368 12.8578 17.3245 14.9004C15.281 16.943 14.1308 19.7125 14.126 22.6018C14.126 26.7714 16.7611 30.5711 19.2729 33.3934C21.7847 36.2158 24.2965 38.0974 24.2965 38.0974C24.506 38.2545 24.7608 38.3394 25.0227 38.3394C25.2845 38.3394 25.5393 38.2545 25.7488 38.0974C25.7488 38.0974 28.2606 36.2158 30.7724 33.3934C33.2842 30.5711 35.9194 26.7714 35.9194 22.6018C35.9169 19.7125 34.7681 16.9423 32.7251 14.8993C30.6821 12.8563 27.9165 11.7075 25.0272 11.7051ZM25.0227 17.7608C26.3066 17.7608 27.5379 18.2709 28.4457 19.1787C29.3536 20.0866 29.8636 21.3179 29.8636 22.6018C29.8636 23.8857 29.3536 25.117 28.4457 26.0248C27.5379 26.9327 26.3066 27.4427 25.0227 27.4427C23.7388 27.4427 22.5075 26.9327 21.5996 26.0248C20.6918 25.117 20.1817 23.8857 20.1817 22.6018C20.1817 21.3179 20.6918 20.0866 21.5996 19.1787C22.5075 18.2709 23.7388 17.7608 25.0227 17.7608Z" fill="white" />
                                            </svg>
                                        </div>

                                        <div>
                                            <p style={{ marginBottom: '5px', color: '#757f99' }}>Адрес</p>
                                            <p style={{ fontWeight: '600' }}>{item.address}</p>
                                        </div>
                                    </div>
                                </li>

                                <li className={styles.info_item}>
                                    <div className={styles.info_item_phone}>
                                        <div className={styles.wrapper_svg}>
                                            <svg
                                                className={`${backgrounds[index] === 'yellow' ? styles.fill_yellow : ''}
                                                        ${backgrounds[index] === 'light-blue' ? styles.fill_light_blue : ''}
                                                        ${backgrounds[index] === 'purple' ? styles.fill_purple : ''}
                                                        ${backgrounds[index] === 'green' ? styles.fill_green : ''}
                                                        ${backgrounds[index] === 'violet' ? styles.fill_violet : ''}
                                                    `}
                                                width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="50" height="50" rx="25" fill="#433C8C" />
                                                <g clipPath="url(#clip0_1001_5022)">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M36.5617 34.1103C36.4024 34.2692 36.2102 34.4723 36.0064 34.6872C35.4979 35.2269 34.8627 35.8977 34.4645 36.1698C32.3697 37.6013 29.5671 36.9163 27.5847 36.0903C24.9696 35.0007 22.1225 32.9923 19.566 30.4356C17.0072 27.8786 14.999 25.0306 13.9094 22.417C13.0844 20.4342 12.398 17.6311 13.8297 15.5357C14.1016 15.1373 14.774 14.503 15.313 13.9936C15.5286 13.7904 15.7302 13.5985 15.8895 13.4396C16.1725 13.1581 16.5554 13 16.9546 13C17.3537 13 17.7366 13.1581 18.0196 13.4396L21.874 17.2929C22.1554 17.5758 22.3134 17.9587 22.3134 18.3577C22.3134 18.7567 22.1554 19.1395 21.874 19.4225L20.824 20.4704C20.4734 20.8185 20.2445 21.2705 20.1714 21.7592C20.0984 22.2478 20.1851 22.747 20.4186 23.1825C21.8628 25.9083 24.0924 28.1375 26.8184 29.5812C27.2538 29.8147 27.7529 29.9013 28.2414 29.8281C28.7299 29.7549 29.1818 29.5259 29.5296 29.1752L30.577 28.1272C30.86 27.8457 31.2429 27.6876 31.642 27.6876C32.0412 27.6876 32.4241 27.8457 32.7071 28.1272L36.5617 31.9812C36.8431 32.264 37.0011 32.6468 37.0011 33.0457C37.0011 33.4447 36.8431 33.8275 36.5617 34.1103Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1001_5022">
                                                        <rect width="24" height="24" fill="white" transform="translate(13 13)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div>
                                            <p style={{ marginBottom: '5px', color: '#757f99' }}>Tелефон</p>
                                            <div dangerouslySetInnerHTML={{ __html: item.phones }} />
                                        </div>
                                    </div>
                                </li>

                                <li className={styles.info_item}>
                                    <div className={styles.info_item_email}>
                                        <div className={styles.wrapper_svg}>
                                            <svg
                                                className={`${backgrounds[index] === 'yellow' ? styles.fill_yellow : ''}
                                                        ${backgrounds[index] === 'light-blue' ? styles.fill_light_blue : ''}
                                                        ${backgrounds[index] === 'purple' ? styles.fill_purple : ''}
                                                        ${backgrounds[index] === 'green' ? styles.fill_green : ''}
                                                        ${backgrounds[index] === 'violet' ? styles.fill_violet : ''}
                                                    `}
                                                width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="50" height="50" rx="25" fill="#433C8C" />
                                                <path d="M38.7534 16.5629L30.2615 25L38.7534 33.4371C38.9069 33.1163 39 32.7616 39 32.3828V17.6172C39 17.2384 38.9069 16.8837 38.7534 16.5629ZM36.5391 15.1562H13.4609C13.0821 15.1562 12.7275 15.2494 12.4066 15.4029L23.2601 26.2016C24.2197 27.1613 25.7803 27.1613 26.7399 26.2016L37.5934 15.4029C37.2725 15.2494 36.9179 15.1562 36.5391 15.1562ZM11.2466 16.5629C11.0931 16.8837 11 17.2384 11 17.6172V32.3828C11 32.7616 11.0931 33.1163 11.2466 33.4371L19.7385 25L11.2466 16.5629Z" fill="white" />
                                                <path d="M29.1012 26.1602L27.8995 27.3618C26.3005 28.9608 23.6987 28.9608 22.0997 27.3618L20.8981 26.1602L12.4062 34.5973C12.7271 34.7508 13.0817 34.8439 13.4606 34.8439H36.5387C36.9175 34.8439 37.2722 34.7508 37.593 34.5973L29.1012 26.1602Z" fill="white" />
                                            </svg>
                                        </div>
                                        <div>

                                            <p style={{ marginBottom: '5px', color: '#757f99' }}>Электронная почта</p>
                                            <div dangerouslySetInnerHTML={{ __html: item.emails }} />
                                        </div>
                                    </div>
                                </li>

                                <li className={styles.info_item}>
                                    <div className={styles.info_item_socials}>
                                        <p style={{ fontWeight: '600', marginBottom: '5px' }}>Мы в социльных сетях</p>

                                        <div className={`${styles.socials_btn} ${styles.wrapper_svg}`}>
                                            <a href='https://t.me/dvcno_ru'>
                                                <svg
                                                    className={` ${backgrounds[index] === 'yellow' ? styles.fill_yellow : ''}
                                                        ${backgrounds[index] === 'light-blue' ? styles.fill_light_blue : ''}
                                                        ${backgrounds[index] === 'purple' ? styles.fill_purple : ''}
                                                        ${backgrounds[index] === 'green' ? styles.fill_green : ''}
                                                        ${backgrounds[index] === 'violet' ? styles.fill_violet : ''}
                                                    `}
                                                    width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="50" height="50" rx="25" fill="#433C8C" />
                                                    <path d="M22.4405 28.413L22.0471 34.4021C22.6099 34.4021 22.8537 34.1404 23.1461 33.8261L25.785 31.0965L31.2531 35.4307C32.256 36.0356 32.9626 35.717 33.2331 34.4321L36.8224 16.2289L36.8234 16.2279C37.1415 14.6233 36.2872 13.9959 35.3102 14.3895L14.2125 23.1318C12.7726 23.7367 12.7944 24.6055 13.9677 24.9991L19.3616 26.8149L31.8903 18.33C32.48 17.9075 33.0161 18.1413 32.5751 18.5639L22.4405 28.413Z" fill="white" />
                                                </svg>
                                            </a>

                                            <a href='https://vk.com/akvvsu'>
                                                <svg
                                                    className={` ${backgrounds[index] === 'yellow' ? styles.fill_yellow : ''}
                                                        ${backgrounds[index] === 'light-blue' ? styles.fill_light_blue : ''}
                                                        ${backgrounds[index] === 'purple' ? styles.fill_purple : ''}
                                                        ${backgrounds[index] === 'green' ? styles.fill_green : ''}
                                                        ${backgrounds[index] === 'violet' ? styles.fill_violet : ''}
                                                    `}
                                                    width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect width="50" height="50" rx="25" fill="#433C8C" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M37.4036 18.2963C37.5835 17.6914 37.4036 17.2461 36.5424 17.2461H33.6987C32.9751 17.2461 32.6414 17.6305 32.4605 18.0548C32.4605 18.0548 31.0143 21.5952 28.9657 23.8949C28.3027 24.5618 28.0016 24.7734 27.6398 24.7734C27.4588 24.7734 27.1869 24.5618 27.1869 23.9559V18.2963C27.1869 17.5696 26.9876 17.2461 26.3853 17.2461H21.9134C21.4616 17.2461 21.1897 17.5829 21.1897 17.903C21.1897 18.5909 22.2145 18.7504 22.3196 20.6868V24.8941C22.3196 25.8169 22.1539 25.9842 21.792 25.9842C20.8279 25.9842 18.4825 22.4271 17.0905 18.3572C16.8207 17.5651 16.5477 17.2461 15.8208 17.2461H12.975C12.1625 17.2461 12 17.6305 12 18.0548C12 18.8103 12.9641 22.5634 16.4903 27.5273C18.8411 30.9171 22.1506 32.7549 25.1655 32.7549C26.9735 32.7549 27.1967 32.3472 27.1967 31.6438V29.0815C27.1967 28.2651 27.3678 28.1022 27.9409 28.1022C28.3634 28.1022 29.086 28.3149 30.7738 29.9489C32.7021 31.8864 33.0195 32.7549 34.105 32.7549H36.9486C37.7611 32.7549 38.1685 32.3472 37.9345 31.5407C37.6766 30.7387 36.7558 29.5745 35.5349 28.1931C34.8719 27.4066 33.8775 26.5591 33.5752 26.1348C33.1538 25.5909 33.2741 25.3483 33.5752 24.8642C33.5752 24.8642 37.0418 19.9612 37.4025 18.2963H37.4036Z" fill="white" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </AnimateElement>
                ))}
            </ul>

        </>

    )
}

export default ContactsList;