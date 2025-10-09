"use client"
import styles from './style.module.css';
import { useState, useEffect } from 'react';
import { TabContent, SocialIcon } from '../../components';
import { AnimateElement } from "@/app/components";
import useLangStore from '@/app/store/languageStore';
import fetchApiServerData from '@/app/utils/fetchApiServerData';

const Contacts = () => {
    const [active, setActive] = useState(0);
    const [data, setData] = useState(null);
    const openTab = e => setActive(+e.target.dataset.index);
    const { lang } = useLangStore();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchApiServerData('pages/contacts');
            setData(data?.data?.sections?.header?.[1]?.content);
        }
        fetchData();
    }, []);

    const language = [
        { ru: 'Контакты', en: 'Contacts', ch: '聯絡方式' },
        { ru: 'Адрес', en: 'Address', ch: '地址' },
        { ru: 'Телефон', en: 'Phone', ch: '電話' },
        { ru: 'Сайт', en: 'WebSite', ch: '網站' },
    ]

    return (
        <section className={styles.section}>
            <div className='container'>
                <ul className={styles.tabs_wrapper}>
                    {data?.[lang].map((n, i) => (
                        <button
                            className={`${styles.tabs_btn} ${i === active ? `${styles.active}` : ''}`}
                            onClick={openTab}
                            data-index={i}
                            key={i}
                        >{n.subtitle}</button>
                    ))}
                </ul>

                <div className={styles.map_wrapper}>
                    <div className={styles.map_content}>
                        <AnimateElement element="h2" className={styles.title}>
                            {language[0][lang]}
                        </AnimateElement>

                        <div className={styles.info}>
                            <p>{language[1][lang]}</p>
                            <address>{data?.[lang][active].address}</address>
                        </div>

                        <div className={styles.info}>
                            <p>{language[2][lang]}</p>
                            <div dangerouslySetInnerHTML={{ __html: data?.[lang][active].phones }} />
                        </div>

                        <div className={styles.info}>
                            <p>E-mail:</p>
                            <div dangerouslySetInnerHTML={{ __html: data?.[lang][active].emails }} />
                        </div>

                        <div className={styles.info}>
                            <p>{language[3][lang]}</p>
                            <a href='{data?.[lang][active].site}'>{data?.[lang][active].site}</a>
                        </div>

                        <div className={styles.header_social_wrapper}>
                            <SocialIcon
                                color="purple"
                                href="#"
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

                    <div className={`${styles.map} active`}>
                        {data?.[lang][active] && <TabContent {...data?.[lang][active]} link={data?.[lang][active].link_to_place} />}
                    </div>

                </div>
            </div>
        </section>
    )
}


export default Contacts;