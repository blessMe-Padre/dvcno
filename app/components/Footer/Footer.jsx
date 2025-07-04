'use client'
import Image from "next/image"
import styles from './style.module.css';
import { Cookies, Popup, SocialIcon } from "..";

import getMenu from '../../utils/getMenu';
import Link from "next/link";
import { useEffect, useState } from 'react';
import useLangStore from '@/app/store/languageStore';


const Footer = () => {
    const { lang } = useLangStore();
    const [popupActive, setPopupActive] = useState(false);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const menu = await getMenu();
            const footerMenu = menu.data.find(item => item?.alias === 'menu_footer');
            setMenu(footerMenu?.items);
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
                        {menu?.map((item, key) => (
                            <li key={key}>
                                <Link href={item.link}>
                                    {item?.title?.[lang]}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.footer_contacts}>
                        <div>
                            <p className={styles.info_title}>Контакты</p>
                        </div>
                        <div>
                            <a className={styles.info} href="tel:+74232150005">8 423 215-00-05 </a>
                        </div>
                        <div>
                            <a className={styles.info} href="mailto:dvcno-vl@dvcno.ru">dvcno-vl@dvcno.ru</a>
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
                            Дальневосточный центр непрерывного образования 2012 — {new Date().getFullYear()}
                        </p>
                    </div>


                    <div className={styles.bottom_content}>
                        <Link href="/processing-of-personal-data">
                            Политика конфиденциальности
                        </Link>

                        {/* <Link href="/">
                            Пользовательское соглашения
                        </Link> */}
                    </div>
                </div>
            </div>

            <Cookies />
        </footer>
    )
}

export default Footer;