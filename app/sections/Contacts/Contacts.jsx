"use client"
import styles from './style.module.css';
import { useState, useEffect } from 'react';
import { TabContent, SocialIcon } from '../../components';

const Contacts = () => {

    const [active, setActive] = useState(0);

    const openTab = e => setActive(+e.target.dataset.index);

    const items = [
        { title: 'АНПОО «ДВЦНО', content: '1', link: 'https://yandex.ru/map-widget/v1/?display-text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&ll=131.886795%2C43.122249&mode=search&oid=1230785050&ol=biz&sll=131.886795%2C43.122249&sspn=0.061626%2C0.025118&text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&z=15' },
        {
            title: 'НШДС «КЕП»', content: '2', link: 'https://yandex.ru/map-widget/v1/?display-text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&ll=131.886795%2C43.122249&mode=search&oid=1230785050&ol=biz&sll=131.886795%2C43.122249&sspn=0.061626%2C0.025118&text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&z=15'
        },
        { title: 'НОШДС «ВШ»', content: '3', link: "https://yandex.ru/map-widget/v1/?display-text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&ll=131.886795%2C43.122249&mode=search&oid=1230785050&ol=biz&sll=131.886795%2C43.122249&sspn=0.061626%2C0.025118&text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&z=15" },
        { title: 'МЛШ', content: '4', link: 'https://yandex.ru/map-widget/v1/?display-text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&ll=131.886795%2C43.122249&mode=search&oid=1230785050&ol=biz&sll=131.886795%2C43.122249&sspn=0.061626%2C0.025118&text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&z=15' },
        { title: 'ШОД', content: '5', link: '' },
        { title: 'АК', content: '6', link: '' },
        { title: 'ФОК «Лига спорта»', content: '7', link: '' }
    ];


    return (
        <section className={styles.section}>
            <div className='container'>
                <ul className={styles.tabs_wrapper}>
                    {items.map((n, i) => (
                        <button
                            className={`${styles.tabs_btn} ${i === active ? `${styles.active}` : ''}`}
                            onClick={openTab}
                            data-index={i}
                            key={i}
                        >{n.title}</button>
                    ))}
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
                            8 (423) 261-47-548, 8 (423) 261-47-378, 8 (423) 261-47-38
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

                    <div className={`${styles.map} active`}>
                        {items[active] && <TabContent {...items[active]} />}
                    </div>

                </div>
            </div>
        </section>
    )
}


export default Contacts;