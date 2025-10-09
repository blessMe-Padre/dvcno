'use client'
import { useState } from 'react';
import { TabContent } from '../../components';
import styles from './style.module.css';
import useLangStore from '@/app/store/languageStore';

const ComponentMap = ({ data }) => {
    const [active, setActive] = useState(0);
    const openTab = e => setActive(+e.target.dataset.index);
    const { lang } = useLangStore();
    const items2 = data?.sections?.header?.[1]?.content[lang];

    return (
        <section className={styles.section}>
            <div className='container'>
                <ul className={styles.tabs_wrapper}>
                    {items2.map((n, i) => (
                        <button
                            key={i}
                            className={`${styles.tabs_btn} ${i === active ? `${styles.active}` : ''}`}
                            onClick={openTab}
                            data-index={i}
                        >{n.subtitle}</button>
                    ))}
                </ul>

                <div className={styles.map_wrapper}>
                    <div className={`${styles.map} active`}>
                        {items2[active] && <TabContent {...items2[active]} link={items2[active].link_to_place} />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComponentMap;