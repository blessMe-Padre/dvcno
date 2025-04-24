import Image from 'next/image';
import styles from '../education.module.css';
import { Division } from '@/app/sections';
import { Breadcrumbs, SlideMain } from '@/app/components';

const data = {
    title: "Начальное общее образование в ДВЦНО",
    images: [
        {
            sliderBgBig: '/education/hero-bg-2-l.png',

        },
        {
            sliderBgMedium: '/education/hero-bg-2-m.png',

        },
        {
            sliderBgSmall: '/education/hero-bg-2-s.png',

        }
    ],

    description: "Это первый уровень образования, направленный на формирование личности обучающегося, развитие его индивидуальных способностей, положительной мотивации и умений в учебной деятельности.",
    listItems: [
        'НШДС «Классическая европейская прогимназия»',
        'Начальная общеобразовательная школа-детский сад "Восточная школа"',
        'Международная лингвистическая школа',
        'Академический колледж (АК)',
        '«Общеобразовательная школа для одарённых детей им.Н.Н.Дубинина»',
    ],

    textPattern: 'Здесь создают творцов будущего',
    link: "#",
}

const divisionData = [
    {
        image: '/division/image-1.jpg',
        title: 'Начальная общеобразовательная школа-детский сад «Восточная школа»',
        address: 'Приморский край, г. Владивосток, ул. Десятая д.10',
        week: '8:30 - 18:00 (5-дневная учебная неделя)',
        site: 'vostok.vvsu.ru',
        phone_robot: '+74232404185',
        phone: '240-41-85',
        map_link: 'https://yandex.ru/maps/-/CHET5OYs',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit!',
    },
    {
        image: '/division/image-2.jpg',
        title: 'НШДС «Классическая европейская прогимназия»',
        address: 'Приморский край, г. Владивосток, ул. Десятая д.10',
        week: '8:30 - 18:00 (5-дневная учебная неделя)',
        site: 'odarenok.su',
        phone_robot: '+74232614737',
        phone: '2261-47-37',
        map_link: 'https://yandex.ru/maps/-/CHET5OYs',
        description: 'Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit!',
    },
    {
        image: '/division/image-3.jpg',
        title: 'Международная лингвистическая школа (МЛШ)',
        address: '690990 г. Владивосток, ул. Партизанский проспект д. 44',
        week: '8.15 - 19.00 (5–дневная учебная неделя)',
        site: 'mlsh.ru',
        phone_robot: '+74232404284',
        phone: '8 (423) 240-42-84',
        map_link: 'https://yandex.ru/maps/-/CHET5OYs',
        description: 'Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit!',
    },
    {
        image: '/division/image-4.jpg',
        title: 'Академический колледж',
        address: '690990 Приморский край, г. Владивосток, ул. Гоголя д. 39-а',
        week: ' 8:30 - 18:00 (5-дневная учебная неделя)',
        site: 'ac-dvcno.ru',
        phone_robot: '+74232404155',
        phone: '8 (423 )240-41-55',
        map_link: 'https://yandex.ru/maps/-/CHET5OYs',
        description: 'Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit!',
    },
    {
        image: '/division/image-5.jpg',
        title: '«Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина» (ШОД)',
        address: '690022, г. Владивосток, ул. Чапаева, д. 5',
        week: ' 8:30 - 18:00 (5-дневная учебная неделя)',
        site: 'giftedschool.dvcno.ru',
        phone_robot: '+74232658562',
        phone: '8 (423) 265-85-62',
        map_link: 'https://yandex.ru/maps/-/CHET5OYs',
        description: 'Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit! Lorem ipsum, <h2>dolor sit amet</h2> consectetur adipisicing elit. Magni reiciendis mollitia quos praesentium maiores beatae similique voluptatibus facere quidem velit!',
    },
]

export const metadata = {
    title: "ДВЦНО | Начальное общее образование",
    description: "Дальневосточный центр непрерывного образования",
};

export default function page() {
    return (
        <>
            <div className='container'>

                <Breadcrumbs
                    slug={'Обучение'}
                    link={'education'}
                    title={'Начальное общее образование'}
                />

                <section className={`${styles.hero_section} section-dsv`}>
                    <SlideMain item={data} />
                </section>
            </div>

            <section className={`${styles.section} section-dsv`}>
                <div className='container'>
                    <div className={styles.row}>
                        <div>
                            <h2 className={`${styles.title} ${styles.text_white}`}>Начальное общее образование <span className={styles.sticker}>1-4 класс</span></h2>
                            <p className={styles.text}>Младший школьный возраст – это период становления и активного развития мышления ребёнка. Основная образовательная программа НШДС соответствует требованиям ФГОС начального общего образования.</p>

                            <p className={styles.text}>Федеральный государственный образовательный стандарт устанавливает требования к результатам обучающихся, освоивших основную образовательную программу начального общего образования:</p>
                            <ul className={styles.list}>
                                <li>личностным, включающим готовность и способность обучающихся к саморазвитию, сформированность мотивации к обучению и познанию, ценностно-смысловые установки обучающихся, отражающие их индивидуально-личностные позиции, социальные компетенции, личностные качества; сформированность основ гражданской идентичности.</li>
                                <li>метапредметным, включающим освоенные обучающимися универсальные учебные действия (познавательные, регулятивные и коммуникативные), обеспечивающие овладение ключевыми компетенциями, составляющими основу умения учиться, и межпредметными понятиями.</li>
                                <li>предметным, включающим освоенный обучающимися в ходе изучения учебного предмета опыт специфической для данной предметной области деятельности по получению нового знания, его преобразованию и применению, а также систему основополагающих элементов научного знания, лежащих в основе современной научной картины мира.</li>
                            </ul>

                            <p className={styles.text}>Благодаря обучению в начальной школе в режиме полного дня успешно решается еще и целый ряд образовательных задач:</p>

                            <ul className={styles.list}>
                                <li>овладение на практическом уровне иностранным языком;</li>
                                <li>знакомство с культурой и традициями России и зарубежных стран;</li>
                                <li>воплощение бережного подхода к здоровью учеников в ходе обучения;</li>
                                <li>интеграция основного и дополнительного образования;</li>
                                <li>формирование обучения по индивидуальным запросам.</li>
                            </ul>
                        </div>
                        <div className={styles.image_wrapper}>
                            <Image
                                aria-hidden
                                src="/education/image-9.jpg"
                                alt="Дошкольные группы"
                                width={671}
                                height={619}
                                className={`${styles.image} dsv-image`}
                            />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.image_wrapper}>
                            <Image
                                aria-hidden
                                src="/education/image-10.jpg"
                                alt="Подготовительный класс"
                                width={671}
                                height={619}
                                className={`${styles.image} dsv-image`}
                            />
                        </div>
                        <div>
                            <h2 className={`${styles.title} ${styles.text_white}`}>Дополнительное образование <span className={styles.sticker}>3-10 лет</span></h2>
                            <p className={styles.text}>В НШДС дошкольники и младшие школьники имеют возможность обучаться и по программам дополнительного образования. Это целый ряд секций, кружков и студий, которые не только развивают способности и интересы учащихся, но и способствуют сохранению и укреплению их здоровья. Развита проектная деятельность.</p>
                            <p className={styles.text}>Основные направления дополнительного образования детей:.</p>

                            <ul className={styles.list}>
                                <li>художественно-эстетическое;</li>
                                <li>физкультурно-оздоровительное;</li>
                                <li>естественно-научное;</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <Division divisionData={divisionData} />

        </>
    )
}
