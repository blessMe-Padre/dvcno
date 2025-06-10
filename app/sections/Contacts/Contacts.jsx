"use client"
import styles from './style.module.css';
import { useState, useEffect } from 'react';
import { TabContent, SocialIcon } from '../../components';

const Contacts = () => {
    const [active, setActive] = useState(0);
    const openTab = e => setActive(+e.target.dataset.index);

    const items = [
        { title: 'АНПОО «ДВЦНО', content: '1', link: 'https://yandex.ru/map-widget/v1/?display-text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&ll=131.886795%2C43.122249&mode=search&oid=1230785050&ol=biz&sll=131.886795%2C43.122249&sspn=0.061626%2C0.025118&text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&z=15' },
        { title: 'НШДС «КЕП»', content: '2', link: 'https://yandex.ru/map-widget/v1/?from=mapframe&ll=131.984750%2C43.225507&mode=search&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1024107892&sctx=ZAAAAAgBEAAaKAoSCdo5zQJtf2BAEXb%2FWIgOnUVAEhIJTupGvqSPrz8RIq629DL%2Fpj8iBgABAgMEBSgKOABA9J8NSAFqAnJ1nQHNzMw9oAEAqAEAvQG4mmVUwgEF9Mqq6AOCAhPQndCo0JTQoSDCq9Ca0JXQn8K7igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=131.984750%2C43.225507&source=mapframe&sspn=0.014269%2C0.006198&text=%D0%9D%D0%A8%D0%94%D0%A1%20%C2%AB%D0%9A%D0%95%D0%9F%C2%BB&utm_source=mapframe&z=17' },
        { title: 'НОШДС «ВШ»', content: '3', link: "https://yandex.ru/map-widget/v1/?from=mapframe&ll=131.928834%2C43.115584&mode=search&oid=1009443540&ol=biz&sctx=ZAAAAAgBEAAaKAoSCY2XbhKDf2BAEXEC02ndnEVAEhIJzuLFwhA5jT8RVkrP9BJjeT8iBgABAgMEBSgKOABA9J8NSABqAnJ1nQHNzMw9oAEAqAEAvQENb3Q4wgEF1MWr4QOCAhDQndCe0Kgg0JTQoSAi0JIiigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=131.928834%2C43.115584&source=mapframe&sspn=0.014369%2C0.006253&text=%D0%9D%D0%9E%D0%A8%D0%94%D0%A1%20%C2%AB%D0%92%D0%A8%C2%BB&utm_source=mapframe&z=16.99" },
        { title: 'МЛШ', content: '4', link: 'https://yandex.ru/map-widget/v1/?from=mapframe&ll=131.903280%2C43.126367&mode=search&oid=1712774694&ol=biz&sctx=ZAAAAAgBEAAaKAoSCY2XbhKDf2BAEXEC02ndnEVAEhIJzuLFwhA5jT8RVkrP9BJjeT8iBgABAgMEBSgKOABA8Z8NSABqAnJ1nQHNzMw9oAEAqAEAvQENb3Q4wgEF1MWr4QOCAhDQndCe0Kgg0JTQoSAi0JIiigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=131.903280%2C43.126367&source=mapframe&sspn=0.014269%2C0.006208&text=%D0%9D%D0%9E%D0%A8%D0%94%D0%A1%20%C2%AB%D0%92%D0%A8%C2%BB&utm_source=mapframe&z=17' },
        { title: 'ШОД', content: '5', link: 'https://yandex.ru/map-widget/v1/?from=mapframe&ll=131.916890%2C43.184775&mode=search&oid=111991908221&ol=biz&source=mapframe&utm_source=mapframe&z=17' },
        { title: 'АК', content: '6', link: 'https://yandex.ru/map-widget/v1/?from=mapframe&ll=131.916890%2C43.184775&mode=search&oid=111991908221&ol=biz&source=mapframe&utm_source=mapframe&z=17' },
        { title: 'ФОК «Лига спорта»', content: '7', link: 'https://yandex.ru/map-widget/v1/?from=mapframe&ll=131.916618%2C43.186070&mode=poi&poi%5Bpoint%5D=131.915838%2C43.185236&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D165181726435&source=mapframe&utm_source=mapframe&z=17.65' }
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
                        <h2 className={styles.title}>Контакты</h2>

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