import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';

import missionBg from '@/public/about_center/mission_bg.png';

import Image from 'next/image';

export const metadata = {
    title: "ДВЦНО | Миссия",
    description: "Дальневосточный центр непрерывного образования",
}

export default function Page() { 
    return (
        <section className={styles.section}>
            <div className={`${styles.bg} container relative`}>
                <Breadcrumbs title={"Миссия"} />
                <h2 className={styles.title}>Миссия</h2>
               
            </div>
        </section>
    )
}