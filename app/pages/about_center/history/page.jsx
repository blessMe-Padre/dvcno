import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';

import decor from '@/public/about_center/decor2.svg';
import Image from 'next/image';

export const metadata = {
    title: "ДВЦНО | История",
    description: "Дальневосточный центр непрерывного образования",
}

export default function Page() { 
    return (
        <>
            <section>
                <div className='container'>
                    <Breadcrumbs
                        slug={'О центре'}
                        link={'pages/about_center'}
                        title={'История'}
                        />
                    <div className={styles.title_wrapper}>
                        <h2 className={styles.title}>История АНПОО «ДВЦНО»</h2>

                        <Image 
                            className={styles.decor}
                            src={decor}
                            width={300}
                            height={100}
                            alt=''
                            />
                    </div>
                </div>
            </section>

            <section className={styles.list}>
                <div className='container'>
                    <ul className={styles.list_wrapper}>
                        <li className={styles.list_content}>
                            1
                        </li>

                        <li className={styles.list_content}>
                            <div className={styles.list_content_wrapper}>
                                <div className={styles.list_content_year}>2004 год</div>
                                <p className={styles.list_content_desc}>Создание «Института непрерывного образования»</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}