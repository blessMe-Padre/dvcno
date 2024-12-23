import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';
import decor from '@/public/decor/image-1.png';
import Image from 'next/image';


export default function page() {
    

    const data_svedenya = [
        {
            'title': 'Полное наименование организации:',
            'desc': 'Автономная некоммерческая профессиональная образовательная организация «Дальневосточный центр непрерывного образования»',
            'img': '/info/svg_1.svg'
        },

        {
            'title': 'Краткое наименование организации:',
            'desc': 'АНПОО «ДВЦНО»',
            'img': '/info/svg_8.svg'

        },

        {
            'title': 'Год создания учреждения:',
            'desc': 'Автономная некоммерческая профессиональная образовательная организация «Дальневосточный центр непрерывного образования» создана в 2004 году как «Институт непрерывного образования»',
            'img': '/info/svg_3.svg'

        },

         {
            'title': 'Юридический, почтовый:',
            'desc': '690014, г. Владивосток, ул. Гоголя, д. 41',
            'img': '/info/svg_4.svg'

        },
         
        {
            'title': 'Контакты:',
            'desc': '8 (423) 240-41-91 - дирекция <br>, 8 (423) 240-43-41 - отдел образовательных программ и проектов <br>, dvcno-vl@yandex.ru <br>, Svetlana.Shirshikova@vvsu.ru',
            'img': '/info/svg_5.svg'


        },

        {
            'title': 'Режим работы:',
            'desc': 'Понедельник-четверг с 8.30-17.30 <br>, Пятница с 8:30-16:15 <br>, Обед с 12:30-13:15 <br>, Выходные дни: суббота, воскресенье',
            'img': '/info/svg_6.svg'


        },

        {
            'title': 'Учредитель:',
            'desc': 'Заброда Елена Владимировна',
            'img': '/info/svg_7.svg'

        },
         
        {
            'title': 'Руководитель:',
            'desc': 'Директор - Ширшикова Светлана Валентиновна',
            'img': '/info/svg_7.svg'

        },



    ]


    const data_address = [
        {
            'title': 'Начальная школа – детский сад «Классическая европейская прогимназия» (НШДС "КЕП")',
            'address': 'Адрес: <br> 690024, г. Владивосток, ул. Десятая, д. 10 (станция «Санаторная»)',
            'link': '/',
            'img': '/address_1.png'
        },

        {
            'title': 'Начальная общеобразовательная школа-детский сад "Восточная школа"',
            'address': 'Адрес: <br> 690066, г. Владивосток, ул. Тунгусская, д. 59',
            'link': '/',
            'img': '/address_2.png'
        },

        {
            'title': 'Международная лингвистическая школа (МЛШ)',
            'address': 'Адрес: <br> 690106, г. Владивосток,  Партизанский пр-т, д. 44, корп. 4',
            'link': '/',
            'img': '/address_3.png'
        },

        {
            'title': 'Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина (ШОД)',
            'address': 'Адрес: <br> 690022, г. Владивосток, ул. Чапаева, д. 5',
            'link': '/',
            'img': '/address_3.png'
        },

        {
            'title': 'Академический колледж (АК)',
            'address': 'Адрес: <br> 690014, г. Владивосток, ул. Гоголя, д. 41',
            'link': '/',
            'img': '/address_3.png'
        },

        {
            'title': 'Физкультурно-оздоровительный комплекс «Лига спорта»',
            'address': 'Адрес: <br> 690022, г. Владивосток, ул. Чапаева, д. 5, стр. 2',
            'link': '/',
            'img': '/address_3.png'
        },


    ]

    return (
        <>
            <section className={styles.section}>
                <div className="container relative">
                    <Breadcrumbs
                        slug={'Сведения об образовательной организации'}
                        link={'pages/about_center'}
                        title={'Основные сведения'}
                    />

                    <h2 className={styles.title}>
                        Основные сведения
                    </h2>

                    <Image
                        className={styles.decor_img}
                        src={decor}
                        width={200}
                        heigth={80}
                        alt='decor'
                    />

                    <ul className={styles.list_svedenya}>
                        {data_svedenya.map((item, index) => (
                            <li key={index}>
                                {/* <Image
                                    src={item.img}
                                    width={40}
                                    heigth={40}
                                    alt='svg'
                                /> */}
                                {item.title}
                                {item.desc}
                                {/* {item.title} */}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>


            <section className={styles.section}>
                    <div className='container'>
                        <h2 className={styles.title}>
                            адреса мест осуществления образовательной деятельности </h2>
                    
                     <ul className={styles.list_svedenya}>
                         {data_address.map((item, index) => (
                            <li key={index}>
                                {/* <Image
                                    src={item.img}
                                    width={40}
                                    heigth={40}
                                    alt='svg'
                                /> */}
                                {item.title}
                                 {item.address}
                            </li>
                        ))}
                    </ul>
                    </div>
            </section>

            
            <section className={styles.section}>
                    <div className='container'>
                        <h2 className={styles.title}>
                            документы на осуществление образовательной деятельности </h2>
                    
                     <ul className={styles.list_svedenya}>
                         {data_address.map((item, index) => (
                            <li key={index}>
                                {/* <Image
                                    src={item.img}
                                    width={40}
                                    heigth={40}
                                    alt='svg'
                                /> */}
                                {item.title}
                                 {item.address}
                            </li>
                        ))}
                    </ul>
                    </div>
            </section>
        </>
    )
}