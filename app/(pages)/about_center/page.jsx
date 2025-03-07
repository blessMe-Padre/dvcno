import styles from './style.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/app/components';

import pattern from '@/public/about_center/pattern.svg';
import center from '@/public/about_center/bg_pattern.png';
import center2 from '@/public/about_center/bg_pattern2.png';
import decor from '@/public/about_center/decor.svg';
import decor1 from '@/public/about_center/do_item_1.svg';
import decor2 from '@/public/about_center/do_item_2.svg';
import decor3 from '@/public/about_center/decor2.svg';
import label from '@/public/about_center/label.png';
import number_01 from '@/public/about_center/01.svg';
import number_02 from '@/public/about_center/02.svg';
import number_03 from '@/public/about_center/03.svg';
import purpose from '@/public/about_center/purpose.svg';
import purposeImage from '@/public/about_center/purpose_check.svg';

export const metadata = {
    title: "ДВЦНО | О центре",
    description: "Дальневосточный центр непрерывного образования",
}

export default function Page() {
    return (
        <>
            <section className={styles.section}>
                <div className='container'>
                    <Breadcrumbs title={"Обучение"} />
                    <h2 className={styles.title}>О центре</h2>

                    <div className={styles.wrapper_links}>
                        <Link
                            href="/about_center/mission"
                            className={styles.link}
                        >

                            <p>Миссия ДВЦНО</p>
                            <svg className={styles.svg} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" stroke="#FCCC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link >

                        <Link
                            href="/about_center/history"
                            className={styles.link}
                        >


                            <p>История АНПОО «ДВЦНО»</p>
                            <svg className={styles.svg} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.05507 1.43907L17.1536 1.43888M17.1536 1.43888L17.1536 14.3511M17.1536 1.43888L1.93782 16.6546" stroke="#FCCC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </Link>
                    </div>

                    <div className={styles.info}>
                        <h2 className={`${styles.title} ${styles.title_white}`}>АНПОО «ДВЦНО»</h2>
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
                                            <path d="M1.92041 1.31592L8.54242 1.31583M8.54242 1.31583L8.54242 7.84366M8.54242 1.31583L0.850022 9.00822" stroke="#433C8C" strokeWidth="1.01111" strokeLinecap="round" strokeLinejoin="round" />
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
                                            <path d="M1.92041 1.31592L8.54242 1.31583M8.54242 1.31583L8.54242 7.84366M8.54242 1.31583L0.850022 9.00822" stroke="#433C8C" strokeWidth="1.01111" strokeLinecap="round" strokeLinejoin="round" />
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
                                            <path d="M1.92041 1.31592L8.54242 1.31583M8.54242 1.31583L8.54242 7.84366M8.54242 1.31583L0.850022 9.00822" stroke="#433C8C" strokeWidth="1.01111" strokeLinecap="round" strokeLinejoin="round" />
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
                                            <path d="M1.92041 1.31592L8.54242 1.31583M8.54242 1.31583L8.54242 7.84366M8.54242 1.31583L0.850022 9.00822" stroke="#433C8C" strokeWidth="1.01111" strokeLinecap="round" strokeLinejoin="round" />
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
                                            <path d="M1.92041 1.31592L8.54242 1.31583M8.54242 1.31583L8.54242 7.84366M8.54242 1.31583L0.850022 9.00822" stroke="#433C8C" strokeWidth="1.01111" strokeLinecap="round" strokeLinejoin="round" />
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
                                            <path d="M1.92041 1.31592L8.54242 1.31583M8.54242 1.31583L8.54242 7.84366M8.54242 1.31583L0.850022 9.00822" stroke="#433C8C" strokeWidth="1.01111" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>

                                    </Link>
                                    <p className={styles.company_desc}>Служба контроля и безопасности</p>
                                </div>
                            </li>

                            <Image
                                src={center2}
                                width={270}
                                height={215}
                                objectFit='cover'
                                alt='center'
                                className={`${styles.img_small} dsv-image`}
                            />


                        </ul>

                        <div className={styles.img_wrapper}>
                            <Image
                                src={center}
                                width={430}
                                height={540}
                                objectFit='cover'
                                alt='center'
                                className={styles.img_big}
                            />


                        </div>
                    </div>

                </div>
            </section>

            <section className={styles.section_do}>
                <div className='container relative'>
                    <h2 className={styles.title}>Деятельность</h2>
                    <p className={styles.description}>
                        АНПОО «ДВЦНО» реализует образовательные программы: основные общеобразовательные программы, программы профессионального обучения, дополнительные общеобразовательные программы, дополнительные профессиональные программы
                    </p>

                    <Image
                        className={styles.decor}
                        src={decor}
                        width={350}
                        height={100}
                        alt='decor'
                    />

                    <div className={styles.do_info_wrapper}>
                        <div className={styles.do_info}>
                            <div className={styles.do_info_title_wrapper}>
                                <p className={styles.name_company_do}>Общее образование</p>
                                <div>
                                    <Image
                                        src={decor1}
                                        width={130}
                                        height={130}
                                        alt='общее образование'
                                    />
                                </div>
                            </div>

                            <ul className={styles.do_list}>
                                <li>Дошкольное образование</li>
                                <li>Основное общее образование</li>
                                <li>Дошкольное образование</li>
                                <li>Среднее общее образование</li>
                            </ul>
                        </div>

                        <div className={styles.do_info}>
                            <div className={styles.do_info_title_wrapper}>
                                <p className={styles.name_company_do}>профессиональное обучение</p>
                                <div>
                                    <Image
                                        src={decor2}
                                        width={130}
                                        height={130}
                                        alt='общее образование'
                                    />
                                </div>
                            </div>

                            <ul className={styles.do_list}>
                                <li>Дополнительное образование детей и взрослых</li>
                                <li>Дополнительное профессиональное образование</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </section>

            <section className={styles.section_strategy}>
                <div className='container relative'>
                    <div className={`${styles.title_strategy_wrapper}`}>
                        <div className='relative'>
                            <h2 className={`${styles.title} ${styles.title_white}`}>Стратегия развития</h2>
                            <Image
                                className={styles.title_decor}
                                src={decor3}
                                width={300}
                                height={15}
                                alt=''
                            />
                        </div>
                        <div>
                            <Image
                                className={styles.label}
                                src={label}
                                width={350}
                                height={180}
                            />
                        </div>
                    </div>

                    <ul className={styles.strategy_list}>
                        <li className={styles.strategy_item}>
                            <div>
                                <Image
                                    src={number_01}
                                    width={60}
                                    height={60}
                                    alt='01'
                                    className={styles.strategy_img_number}
                                />
                            </div>
                            <div>
                                <p className={styles.strategy_item_desc}>Международная деятельность, сотрудничество с учреждениями
                                    и предприятиями г. Владивостока, Приморского края, России, стран Европы, Азии, Канады, США</p>
                            </div>
                        </li>
                        <li className={styles.strategy_item}>
                            <div>
                                <Image
                                    src={number_02}
                                    width={60}
                                    height={60}
                                    alt='01'
                                    className={styles.strategy_img_number}
                                />
                            </div>
                            <div>
                                <p className={styles.strategy_item_desc}>Усиление вклада в социально-экономическое развитие города Владивостока и Приморского края путем повышения качества образования через программу «International Baccalaureate», формирования ключевых компетентностей, конкурентоспособности и социальной значимости</p>
                            </div>
                        </li>
                        <li className={styles.strategy_item}>
                            <div>
                                <Image
                                    src={number_03}
                                    width={60}
                                    height={60}
                                    alt='01'
                                    className={styles.strategy_img_number}
                                />
                            </div>
                            <div>
                                <p className={styles.strategy_item_desc}>Удовлетворение меняющихся образовательных потребностей и запросов государства и социума в получении доступного и качественного образования детей, взрослых и талантливой молодежи, соответствующего требованиям инновационного социально ориентированного развития
                                    Приморского края</p>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>

            <section className={styles.section_purpose}>
                <div className='container relative'>
                    <h2 className={styles.title}>Главные цели и задачи</h2>

                    <Image
                        className={styles.purpose_img}
                        src={purpose}
                        width={60}
                        height={60}
                        alt='purpose'
                    />

                    <ul className={styles.purpose_list}>
                        <li className={styles.purpose_item}>
                            <Image
                                src={purposeImage}
                                width={60}
                                height={60}
                                alt='purpose_check'
                            />
                            <p>Обеспечение качественного дошкольного, начального общего, основного общего, среднего общего образования</p>
                        </li>
                        <li className={styles.purpose_item}>
                            <Image
                                src={purposeImage}
                                width={60}
                                height={60}
                                alt='purpose_check'
                            />
                            <p>Подготовка учащихся начальной школы к поступлению
                                и успешному обучению
                                в основной школе</p>
                        </li>
                        <li className={styles.purpose_item}>
                            <Image
                                src={purposeImage}
                                width={60}
                                height={60}
                                alt='purpose_check'
                            />
                            <p>Подготовка учащихся средней школы к поступлению
                                и успешному обучению
                                в техникумах, колледжах и вузах</p>
                        </li>
                        <li className={styles.purpose_item}>
                            <Image
                                src={purposeImage}
                                width={60}
                                height={60}
                                alt='purpose_check'
                            />
                            <p>Воспитание целостной личности учащегося, личности, готовой к дальнейшему саморазвитию и самовоспитанию через приобщение к различным мировым культурам и на основе гуманистических ценностей</p>
                        </li>
                        <li className={styles.purpose_item}>
                            <Image
                                src={purposeImage}
                                width={60}
                                height={60}
                                alt='purpose_check'
                            />
                            <p>Формирование у обучающихся системы ценностей, развитие умений критически и творчески мыслить, успешно действовать в различных ситуациях, взаимодействовать с другими людьми, заботиться о здоровье и безопасности жизни</p>
                        </li>
                        <li className={styles.purpose_item}>
                            <Image
                                src={purposeImage}
                                width={60}
                                height={60}
                                alt='purpose_check'
                            />
                            <p>Создание для обучающихся образовательного пространства, способствующего воспитанию любознательного, умного, неравнодушного к проблемам окружающей жизни человека, стремящегося к созданию лучшего безопасного мира, знающего и любящего свою культуру и историю и уважающего культуры и историю других народов</p>
                        </li>
                        <li className={styles.purpose_item}>
                            <Image
                                src={purposeImage}
                                width={60}
                                height={60}
                                alt='purpose_check'
                            />
                            <p>Воспитание у обучающихся активной гражданской и жизненной позиции</p>
                        </li>
                        <li className={styles.purpose_item}>
                            <Image
                                src={purposeImage}
                                width={60}
                                height={60}
                                alt='purpose_check'
                            />
                            <p>Становление учащихся ответственными, активными, способными и желающими обучаться всю свою сознательную жизнь</p>
                        </li>
                        <li className={styles.purpose_item}>
                            <Image
                                src={purposeImage}
                                width={60}
                                height={60}
                                alt='purpose_check'
                            />
                            <p>Воспитание у обучающихся способности видеть и творить прекрасное</p>
                        </li>
                    </ul>

                </div>
            </section>


        </>
    )
}