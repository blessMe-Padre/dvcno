import styles from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/app/components';

import pattern from '@/public/about_center/pattern.svg';

export const metadata = {
    title: "О центре",
    description: "Дальневосточный центр непрерывного образования",
}

export default function Page() { 
    return (
        <section className={styles.section}>
            <div className='container'>
                <Breadcrumbs title={"Обучение"} />
                <h2 className={styles.title}>О центре</h2>

                <div className={styles.wrapper_links}>
                    <Link
                        href="/pages/about_center/mission"
                        className={styles.link}
                        >
                        
                        <p>Миссия ДВЦНО</p>
                        <svg className={styles.svg} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" stroke="#FCCC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link >

                    <Link
                        href="/pages/about_center/history"
                        className={styles.link}
                    >
                        
                       
                        <p>История АНПОО «ДВЦНО»</p>
                        <svg className={styles.svg} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" stroke="#FCCC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </Link>
                </div>

                <div className={styles.info}>
                    <h2 className={styles.title}>АНПОО «ДВЦНО»</h2>
                    <Image
                        src={pattern}
                        width={50}
                        height={50}
                    />
                    <ul className={styles.list_company}>
                        <p className={styles.subtitle}>Структура организации:</p>
                        <li className={styles.list_item}>
                            <div>
                                <Link href={'/'} className={styles.company_name}>
                                    НШДС «КЕП»
                                    <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.92041 1.31592L8.54242 1.31583M8.54242 1.31583L8.54242 7.84366M8.54242 1.31583L0.850022 9.00822" stroke="#433C8C" stroke-width="1.01111" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </Link>
                                <p className={styles.company_desc}>Начальная школа-детский сад «Классическая Европейская прогимназия»</p>
                            </div>
                        </li>
                        <li className={styles.list_item}>
                            <div>
                                <Link href={'/'} className={styles.company_name}>
                                    НОШДС «ВШ»
                                    <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.92041 1.31592L8.54242 1.31583M8.54242 1.31583L8.54242 7.84366M8.54242 1.31583L0.850022 9.00822" stroke="#433C8C" stroke-width="1.01111" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </Link>
                                <p className={styles.company_desc}>Начальная общеобразовательная школа-детский сад «Восточная школа»</p>
                            </div>
                        </li>
                        <li className={styles.list_item}>
                            <div>
                                <Link href={'/'} className={styles.company_name}>
                                    МЛШ 
                                    <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.92041 1.31592L8.54242 1.31583M8.54242 1.31583L8.54242 7.84366M8.54242 1.31583L0.850022 9.00822" stroke="#433C8C" stroke-width="1.01111" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </Link>
                                <p className={styles.company_desc}>Международная лингвистическая школа</p>
                            </div>
                        </li>
                        <li className={styles.list_item}>
                            <div>
                                <Link href={'/'} className={styles.company_name}>
                                    АК
                                    <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.92041 1.31592L8.54242 1.31583M8.54242 1.31583L8.54242 7.84366M8.54242 1.31583L0.850022 9.00822" stroke="#433C8C" stroke-width="1.01111" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </Link>
                                <p className={styles.company_desc}>Академический колледж</p>
                            </div>
                        </li>
                        <li className={styles.list_item}>
                            <div>
                                <Link href={'/'} className={styles.company_name}>
                                    ЦРУСО
                                    <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.92041 1.31592L8.54242 1.31583M8.54242 1.31583L8.54242 7.84366M8.54242 1.31583L0.850022 9.00822" stroke="#433C8C" stroke-width="1.01111" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </Link>
                                <p className={styles.company_desc}>Центр развития и управления системой образования</p>
                            </div>
                        </li>
                        <li className={styles.list_item}>
                            <div>
                                <Link href={'/'} className={styles.company_name}>
                                    СКИБ
                                    <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.92041 1.31592L8.54242 1.31583M8.54242 1.31583L8.54242 7.84366M8.54242 1.31583L0.850022 9.00822" stroke="#433C8C" stroke-width="1.01111" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </Link>
                                <p className={styles.company_desc}>Служба контроля и безопасности</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}