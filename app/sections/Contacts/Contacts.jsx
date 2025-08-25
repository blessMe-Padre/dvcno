"use client"
import styles from './style.module.css';
import { useState, useEffect } from 'react';
import { TabContent, SocialIcon } from '../../components';
import { AnimateElement } from "@/app/components";

const Contacts = () => {
    const [active, setActive] = useState(0);
    const openTab = e => setActive(+e.target.dataset.index);

    const items = [
        { title: 'АНПОО «ДВЦНО', content: '1', link: 'https://yandex.ru/map-widget/v1/?display-text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&ll=131.886795%2C43.122249&mode=search&oid=1230785050&ol=biz&sll=131.886795%2C43.122249&sspn=0.061626%2C0.025118&text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&z=15', address: '690990 г. Владивосток, ул. Гоголя, 41', phones: '+ 7 (423) 240-41-91 - Дирекция, 240-43-41 - Отдел образовательных программ и проектов', site: 'https://dvcno.ru', emails: 'Svetlana.Shirshikova@vvsu.ru, dvcno-vl@yandex.ru', telegram: '', vk: '' },
        { title: 'НШДС «КЕП»', content: '2', link: 'https://yandex.ru/map-widget/v1/?from=mapframe&ll=131.984750%2C43.225507&mode=search&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1024107892&sctx=ZAAAAAgBEAAaKAoSCdo5zQJtf2BAEXb%2FWIgOnUVAEhIJTupGvqSPrz8RIq629DL%2Fpj8iBgABAgMEBSgKOABA9J8NSAFqAnJ1nQHNzMw9oAEAqAEAvQG4mmVUwgEF9Mqq6AOCAhPQndCo0JTQoSDCq9Ca0JXQn8K7igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=131.984750%2C43.225507&source=mapframe&sspn=0.014269%2C0.006198&text=%D0%9D%D0%A8%D0%94%D0%A1%20%C2%AB%D0%9A%D0%95%D0%9F%C2%BB&utm_source=mapframe&z=17', address: '690024, г. Владивосток, ул. Десятая, д. 10 (станция «Санаторная»)', phones: '8 (423) 261-47-548, 8 (423) 261-47-378, 8 (423) 261-47-38', site: 'https://odarenok.su', emails: 'odarenok@list.ru', telegram: '', vk: '' },
        { title: 'НОШДС «ВШ»', content: '3', link: "https://yandex.ru/map-widget/v1/?from=mapframe&ll=131.928834%2C43.115584&mode=search&oid=1009443540&ol=biz&sctx=ZAAAAAgBEAAaKAoSCY2XbhKDf2BAEXEC02ndnEVAEhIJzuLFwhA5jT8RVkrP9BJjeT8iBgABAgMEBSgKOABA9J8NSABqAnJ1nQHNzMw9oAEAqAEAvQENb3Q4wgEF1MWr4QOCAhDQndCe0Kgg0JTQoSAi0JIiigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=131.928834%2C43.115584&source=mapframe&sspn=0.014369%2C0.006253&text=%D0%9D%D0%9E%D0%A8%D0%94%D0%A1%20%C2%AB%D0%92%D0%A8%C2%BB&utm_source=mapframe&z=16.99", address: '690066, г. Владивосток, ул. Тунгусская, д. 59', phones: '8 (423) 240-41-85', site: 'https://vostok-school.ru', emails: 'vostok@vvsu.ru', telegram: '', vk: '' },
        { title: 'МЛШ', content: '4', link: 'https://yandex.ru/map-widget/v1/?from=mapframe&ll=131.903280%2C43.126367&mode=search&oid=1712774694&ol=biz&sctx=ZAAAAAgBEAAaKAoSCY2XbhKDf2BAEXEC02ndnEVAEhIJzuLFwhA5jT8RVkrP9BJjeT8iBgABAgMEBSgKOABA8Z8NSABqAnJ1nQHNzMw9oAEAqAEAvQENb3Q4wgEF1MWr4QOCAhDQndCe0Kgg0JTQoSAi0JIiigIAkgIAmgIMZGVza3RvcC1tYXBz&sll=131.903280%2C43.126367&source=mapframe&sspn=0.014269%2C0.006208&text=%D0%9D%D0%9E%D0%A8%D0%94%D0%A1%20%C2%AB%D0%92%D0%A8%C2%BB&utm_source=mapframe&z=17', address: '690106, г. Владивосток, Партизанский пр-т, д. 44, корп. 4', phones: '8 (423) 240-42-84, 8 (423) 240-42-83', site: 'https://mlsh.ru', emails: 'mlsh@vvsu.ru', telegram: '', vk: '' },
        { title: 'АК', content: '5', link: 'https://yandex.ru/map-widget/v1/?l=trf%2Ctrfe&ll=131.929267%2C43.115604&mode=search&oid=1009443540&ol=biz&z=18.66', address: '690066, г. Владивосток, ул. Тунгусская, д. 59', phones: '+7 (423) 240-42-52', site: 'dvcno.ru', emails: 'ac@vvsu.ru, 404252@mail.ru', emails: 'ac@vvsu.ru, 404252@mail.ru', telegram: '', vk: '' },
        { title: 'ШОД', content: '6', link: 'https://yandex.ru/map-widget/v1/?from=mapframe&ll=131.916890%2C43.184775&mode=search&oid=111991908221&ol=biz&source=mapframe&utm_source=mapframe&z=17', address: '690022, г. Владивосток, ул. Чапаева, д. 5', phones: '+7 (423) 265-85-62, +7 (423) 231-61-36', site: 'https://giftedschool.dvcno.ru', emails: 'dvcno_shiod@rambler.ru', telegram: '', vk: '' },
        { title: 'ФОК «Лига спорта»', content: '7', link: 'https://yandex.ru/map-widget/v1/?from=mapframe&ll=131.916618%2C43.186070&mode=poi&poi%5Bpoint%5D=131.915838%2C43.185236&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D165181726435&source=mapframe&utm_source=mapframe&z=17.65', address: '690022, г. Владивосток, ул. Чапаева, д. 5, стр. 2', phones: '8 (423)294-93-04, 8 (423)294-93-06', site: 'https://sport-city-club.ru', emails: 'aak9978@gmail.com, morena.pro@mail.ru', telegram: '', vk: '' }
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
                        <AnimateElement element="h2" className={styles.title}>
                            Контакты
                        </AnimateElement>

                        <div className={styles.info}>
                            <p>Адрес</p>
                            <address>{items[active].address}</address>
                        </div>
                         
                        <div className={styles.info}>
                            <p>Телефон</p>
                            {items[active].phones}
                        </div>

                        <div className={styles.info}>
                            <p>E-mail:</p>
                            <a href='mailto:{items[active].emails}'>{items[active].emails}</a>
                        </div>

                        <div className={styles.info}>
                            <p>Сайт</p>
                            <a href='{items[active].site}'>{items[active].site}</a>
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
                        {items[active] && <TabContent {...items[active]} />}
                    </div>

                </div>
            </div>
        </section>
    )
}


export default Contacts;