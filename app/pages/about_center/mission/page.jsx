import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';

import missionBg2 from '@/public/about_center/mission-bg-2.png';
import missionBg3 from '@/public/about_center/mission-bg-2-m.png';
import missionBgSmall from '@/public/about_center/mission-bg-2-small.png';
import pattern2 from '@/public/about_center/pattern_2.png';

import decor from '@/public/about_center/decor_mission.svg';
import icon from '@/public/about_center/icon.svg';

import Image from 'next/image';

export const metadata = {
    title: "ДВЦНО | Миссия",
    description: "Дальневосточный центр непрерывного образования",
}

const data = [
    {
        'title': 'Свобода творческого мышления',
        'image': '/about_center/add_1.png'
    },
    {
        'title': 'Поддержка научных исследований',
        'image': '/about_center/add_2.svg'
    },
    {
        'title': 'Хранение духовного наследия России',
        'image': '/about_center/add_3.svg'
    },
    {
        'title': 'Уважение личности как взрослого, так и ребенка',
        'image': '/about_center/add_4.svg'
    },
    {
        'title': 'Профессионализм',
        'image': '/about_center/add_5.svg'
    },
    {
        'title': 'Корпоративный дух дружелюбия',
        'image': '/about_center/add_6.svg'
    },
    {
        'title': 'Здоровый образ жизни',
        'image': '/about_center/add_7.svg'
    },
    {
        'title': 'Стремление к новому',
        'image': '/about_center/add_8.svg'
    },
]


export default function Page() { 

    return (
        <>
            <section className={styles.section}>
            <div className={`${styles.bg} container relative`}>
                <Breadcrumbs title={"Миссия"} />

                <div className={styles.wrapper}>
                    <div className={styles.wrapper_title}>
                        <h2 className={`${styles.title} ${styles.color_white}`}>Миссия ДВЦНО </h2>
                        <Image 
                            src={decor}
                            width={400}
                            height={20}
                            alt='decor'
                            className={styles.decor}
                        />
                        <Image 
                            src={icon}
                            width={400}
                            height={150}
                            alt='icon'
                            className={styles.icon}
                        />
                    </div>

                    
                    <div className={styles.info}>
                        <div className={styles.info_content}>

                            <p className={styles.text}>
                                <span style={{ fontWeight: '700'}}> МИССИЯ ДВЦНО </span>- удовлетворение образовательных потребностей и запросов государства и социума в получении доступного и качественного образования детей, взрослых и талантливой молодежи, соответствующего требованиям инновационного социально ориентированного развития Приморского края.
                            </p>

                            <p className={styles.text}>
                                <span style={{ fontWeight: '700'}}> Инновационное оказание услуг</span> в области образования от дошкольного до профессионального, разностороннее развитие личностей, их адаптации к жизни в обществе, стимулирование к познанию и творчеству, подготовка высокообразованных, конкурентоспособных, ориентированных на саморазвитие и непрерывное профессиональное образование специалистов
                            </p>
                        </div>

                        <div className={styles.bg2}>
                            <Image
                                className={styles.bg2_img}
                                src={missionBg2}
                                width={620}
                                height={680}
                                alt=''
                            />
                            <Image
                                className={styles.missionBg3}
                                src={missionBg3}
                                width={400}
                                height={400}
                                alt=''
                            />

                            <Image
                                className={styles.bg3_img}
                                src={missionBgSmall}
                                width={335}
                                height={435}
                                alt=''
                            />
                            <Image 
                                    src={icon}
                                    width={50}
                                    height={50}
                                    alt='icon'
                                    className={styles.icon1}
                                />
                        </div>

                        
                    </div>
                        
                </div>
            </div>
            </section>

            <section className={styles.section}>
                <div className='container'>
                    <h2 className={styles.title}>ЦЕННОСТИ АНПОО ДВЦНО </h2>

                    <ul className={styles.add_list}>
                        {data.map((item, index) => {
                            return (
                                <li key={index}
                                    className={styles.item}>
                                    
                                    <Image 
                                        src={pattern2}
                                        width={100}
                                        height={100}
                                        alt='pattern2'
                                        className={styles.pattern2}
                                    />
                                    
                                    <div className={styles.item_content}>

                                        <Image
                                            src={item.image}
                                            width={60}
                                            height={60}
                                            alt='logo'
                                        />
                                        <p className={styles.item_title}>{item.title}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}