'use client'
import { useState } from 'react';
import { TabContent } from '../../components';
import styles from './style.module.css';

const ComponentMap = () => {


    const [active, setActive] = useState(0);
    
    const openTab = e => setActive(+e.target.dataset.index);

    const items = [
        { title: 'АНПОО «ДВЦНО', content: '1', link: 'https://yandex.ru/map-widget/v1/?display-text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&ll=131.886795%2C43.122249&mode=search&oid=1230785050&ol=biz&sll=131.886795%2C43.122249&sspn=0.061626%2C0.025118&text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&z=15' },
        { title: 'НШДС «КЕП»', content: '2', link: 'https://yandex.ru/map-widget/v1/?display-text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&ll=131.886795%2C43.122249&mode=search&oid=1230785050&ol=biz&sll=131.886795%2C43.122249&sspn=0.061626%2C0.025118&text=%D0%B4%D0%B2%D1%86%D0%BD%D0%BE&z=15' },
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
                            key={i}
                            className={`${styles.tabs_btn} ${i === active ? `${styles.active}` : ''}`}
                            onClick={openTab}
                            data-index={i}
                        >{n.title}</button>
                    ))}
                </ul>

                <div className={styles.map_wrapper}>
                    <div className={`${styles.map} active`}>
                        {items[active] && <TabContent {...items[active]} />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComponentMap;