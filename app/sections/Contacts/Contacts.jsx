"use client"
import styles from './style.module.css';
import { useState, useEffect } from 'react';

import placeholder from '../../../public/placeholder/placeholder.png';

import Image from 'next/image';


import SocialIcon from '@/app/components/Socilal-icon/SocialIcon';
export const Contacts = () => {

    const [tab, setTab] = useState();

    const handleChange = (e) => { 
        return e
    }

    return (
        <section className={styles.section}>
            <div className='container'>
                <ul className={styles.tabs_wrapper}>
                    <button 
                        className={styles.tabs_btn}
                        onChange={() => handleChange()}
                    >
                            АНПОО «ДВЦНО
                    </button>
                    <button 
                        className={styles.tabs_btn}
                        onChange={() => handleChange()}
                    >
                            НШДС «КЕП»
                    </button>
                    <button 
                        className={styles.tabs_btn}
                        onChange={() => handleChange()}
                    >
                            НОШДС «ВШ»
                    </button>
                    <button 
                        className={styles.tabs_btn}
                        onChange={() => handleChange()}
                    >
                            МЛШ
                    </button>
                    <button 
                        className={styles.tabs_btn}
                        onChange={() => handleChange()}
                    >
                            ШОД
                    </button>
                    <button 
                        className={styles.tabs_btn}
                        onChange={() => handleChange()}
                    >
                            АК
                    </button>
                    <button 
                        className={styles.tabs_btn}
                        onChange={() => handleChange()}
                    >
                            ФОК «Лига спорта»
                    </button>
                </ul>

                <div className={styles.map_wrapper}>
                    <div className={styles.map_content}>
                        <h2 className={styles.title}>
                            контакты
                        </h2>

                        <div className={styles.info}>
                            <p>Адрес</p>
                            <address>690024, г. Владивосток, ул. Десятая, д. 10 (станция «Санаторная»)</address>
                        </div>

                        <div className={styles.info}>
                            <p>Телефон</p>
                            <a href='tel:+7423261-47-548'>8 (423) 261-47-548</a>, <a href='tel:+742326147378'> 8 (423) 261-47-378</a>, <a href='tel:+74232614738'>8 (423) 261-47-38</a>
                        </div>

                        <div className={styles.info}>
                            <p>E-mail:</p> 
                            <a href='mailto:odarenok@list.ru'>odarenok@list.ru</a>
                        </div>

                        <div className={styles.info}>
                            <p>Сайт</p>
                            <a href='#'>https://odarenok.su/</a>
                        </div>

                          <div className={styles.header_social_wrapper}>
                            <SocialIcon
                                color="purple"
                                href="https://t.me/dvcno_ru"
                                icon="/icons/telegram.svg"
                                width="19"
                                height="17"
                                alt="Телеграм"
                            />
                            <SocialIcon
                                color="purple"
                                href="#"
                                icon="/icons/vk.svg"
                                width="23"
                                height="14"
                                alt="Вконтакте"
                            />
                        </div>
                    </div>

                    <div className={styles.map}>
                        <Image 
                            src={placeholder}
                            width={1000}
                            height={400}
                            objectFit='contain'
                        
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}