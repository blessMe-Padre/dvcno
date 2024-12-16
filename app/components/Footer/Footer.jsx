'use client'
import Image from "next/image"
import styles from './style.module.css';
import { Popup, SocialIcon } from "..";

import getPopupMenu from '../../utils/getPopupMenu';

import Link from "next/link";


import { useEffect, useState } from 'react';

const Footer = () => {

    const [popupActive, setPopupActive] = useState(false);

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPopupMenu();
            setMenu(data);
        };

        fetchData();
    }, []);



    return (
        <footer className={styles.footer}>
            <div className={`${styles.footer_content} container`}>
                <div className={styles.top}>
                    <Image
                        src="/logo.svg"
                        alt="логотип"
                        width={150}
                        height={150}
                    />

                    <div className={styles.footer_social_wrapper}>
                        <SocialIcon
                            color="gray"
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

                        <button className={styles.modal_button}
                            onClick={() => setPopupActive(true)}
                        >
                            Задать вопрос
                        </button>

                        <Popup active={popupActive} setActive={setPopupActive} />

                    </div>
                </div>

                <div className={styles.middle}>
                    <ul className={styles.footer_list}>
                        {menu.map((item, key) => (
                            <li key={key}>
                                <Link href={item.link}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.footer_contacts}>
                        <div>
                            <p className={styles.info_title}>Контакты</p>
                        </div>
                        <div>
                            <a className={styles.info} href="tel:+74232404191">+ 7 (423) 240-41-91 </a>
                        </div>
                        <div>
                            <a className={styles.info} href="mailto:svetlana.shirshikova@vvsu.ru">svetlana.shirshikova@vvsu.ru</a>
                        </div>
                        <div>
                            <a className={styles.info} href="mailto:dvcno-vl@yandex.ru">dvcno-vl@yandex.ru</a>
                        </div>
                        <div>
                            <p>г. Владивосток, ул. Гоголя, 41,</p>
                        </div>
                        <div>
                            <p style={{ color: '#FFB236', textDecoration: 'underline' }}>Посмореть на карте</p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div>
                        <p>
                            Дальневосточный центр непрерывного образования 2012 — 2023
                        </p>
                    </div>


                    <div className={styles.bottom_content}>
                        <Link href="/">
                            Политика конфиденциальности
                        </Link>

                        <Link href="/">
                            Пользовательское соглашения
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;