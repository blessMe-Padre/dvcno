import Image from 'next/image';
import styles from '../education.module.css';
import { Division } from '@/app/sections';
import { Breadcrumbs, SlideMain } from '@/app/components';

const data = {
    title: "Среднее общее образование в ДВЦНО",
    images: [
        {
            sliderBgBig: '/education/hero-bg-4-l.png',

        },
        {
            sliderBgMedium: '/education/hero-bg-4-m.png',

        },
        {
            sliderBgSmall: '/education/hero-bg-4-s.png',

        }
    ],

    description: "Это третий, завершающий уровень, направленный на подготовку школьников к получению высшего  или среднего профессионального образования",
    listItems: [
        'Международная лингвистическая школа',
        'Академический колледж (АК)',
        '«Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина»',
    ],
    textPattern: 'Здесь создают творцов будущего',
    link: "#",
}

const divisionData = [
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
    title: "ДВЦНО | Среднее общее образование в ДВЦНО",
    description: "Дальневосточный центр непрерывного образования",
};

export default function doshkolnoeObrazovanie() {
    return (
        <>
            <div className='container'>
                <Breadcrumbs
                    slug={'Обучение'}
                    link={'education'}
                    title={'Среднее общее образование в ДВЦНО'}
                />
                <section className={styles.hero_section}>
                    <SlideMain item={data} />
                </section>
            </div>

            <section className={`${styles.section} section-dsv`}>
                <div className='container'>
                    <div className={styles.row}>
                        <div>
                            <h2 className={`${styles.title} ${styles.text_white}`}>Отделение Лицейских классов
                                <span className={`${styles.sticker} ${styles.sticker_new}`}>10-11 классов</span>
                            </h2>
                            <ul className={styles.list}>
                                <li>основное общее образование.</li>
                                <li>среднее общее образование</li>
                            </ul>
                            <p className={styles.text}>Выпускники отделения Лицейских классов при успешной сдаче ЕГЭ по русскому языку и математике получают аттестат государственного образца.</p>
                            <p className={styles.text}>После 9 и 11 классов ребята могут выбрать индивидуальную образовательную траекторию: продолжить обучение по программам среднего профессионального образования АНПОО «ДВЦНО» и высшего профессионального образования во ВГУЭС.</p>

                        </div>
                        <div className={styles.image_wrapper}>
                            <Image
                                aria-hidden
                                src="/education/image-11.jpg"
                                alt="Дошкольные группы"
                                width={671}
                                height={619}
                                className={`${styles.image} dsv-image`}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Division divisionData={divisionData} />

        </>
    )
}
