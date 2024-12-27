import styles from './style.module.css';
import { ComponentMap } from '@/app/components';

import decor from '@/public/contacts/decor.svg';
import Image from 'next/image';
import Link from 'next/link';


export default function page() {


    const data_contacts = [
        {
            'name': 'АНПОО «ДВЦНО',
            'title': 'АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ПРОФЕССИОНАЛЬНАЯ ОБРАЗОВАТЕЛЬНАЯ ОРГАНИЗАЦИЯ «ДАЛЬНЕВОСТОЧНЫЙ ЦЕНТР НЕПРЕРЫВНОГО ОБРАЗОВАНИЯ»',
            'url': 'https://dvcno.ru',
            'address': '690990 г. Владивосток, ул. Гоголя, 41',
            'phone': '+ 7 (423) 240-41-91',
            'phone2':'+ 7 (423) 240-43-41',
            'phone_bot': '+74232404191',
            'phone_bot2': '+74232404341',
            'mail': 'Svetlana.Shirshikova@vvsu.ru',
            'mail2': 'dvcno-vl@yandex.ru',
            'works_of_clock': '<p>Пн-чт: с 8.30-17.30</p> <p>Пт: с 8:30-16:15</p> <p>Обед: с 12:30-13:15</p> <p>Выходные дни: Сб, Вс</p>',
            'socials_vk': '/',
            'socials_tg': '/',
            'background': 'violet'

        },

        {
            'name': 'НШДС «КЕП»',
            'title': 'Начальная школа-детский сад «Классическая Европейская прогимназия»',
            'url': 'https://odarenok.su',
            'address': '690024, г. Владивосток, ул. Десятая, д. 10 (станция «Санаторная»)',
            'phone': '8 (423) 261-47-548,',
            'phone2':'8 (423) 261-47-378,',
            'phone3':'8 (423) 261-47-38',
            'phone_bot': '+742326147548',
            'phone_bot2':'+742326147378',
            'phone_bot3':'+74232614738',
            'mail': 'odarenok@list.ru',
            'works_of_clock': '<p>Пн-чт: с 8.30-17.30</p> <p>Пт: с 8:30-16:15</p> <p>Обед: с 12:30-13:15</p> <p>Выходные дни: Сб, Вс</p>',
            'socials_vk': '/',
            'socials_tg': '/',
            'background': 'light-blue'

        },

        {
            'name': 'НОШДС «ВШ»',
            'title': 'Начальная общеобразовательная школа-детский сад «Восточная школа»',
            'url': 'https://vostok-school.ru',
            'address': '690066, г. Владивосток, ул. Тунгусская, д. 59',
            'phone': '8 (423) 240-41-85,',
            'phone_bot': '+74232404185',
            'mail': 'vostok@vvsu.ru',
            'works_of_clock': '<p>Пн-чт: с 8.30-17.30</p> <p>Пт: с 8:30-16:15</p> <p>Обед: с 12:30-13:15</p> <p>Выходные дни: Сб, Вс</p>',
            'socials_vk': '/',
            'socials_tg': '/',
            'background': 'green'
        },

        {
            'name': 'МЛШ',
            'title': 'Международная лингвистическая школа (МЛШ)',
            'url': 'https://mlsh.ru',
            'address': '690106, г. Владивосток, Партизанский пр-т, д. 44, корп. 4',
            'phone': '8 (423) 240-42-84,',
            'phone2': '8 (423) 240-42-83',
            'phone_bot': '+74232404284',
            'phone_bot2': '+74232404283',
            'mail': 'mlsh@vvsu.ru',
            'works_of_clock': '<p>Пн-чт: с 8.30-17.30</p> <p>Пт: с 8:30-16:15</p> <p>Обед: с 12:30-13:15</p> <p>Выходные дни: Сб, Вс</p>',
            'socials_vk': '/',
            'socials_tg': '/',
            'background': 'purple'
        },

        {
            'name': 'АК',
            'title': 'Академический колледж (АК)',
            'url': 'https://ac.dvcno.ru',
            'address': '690066, г. Владивосток, ул. Тунгусская, д. 59',
            'phone': '8 (423) 240-42-52,',
            'phone_bot': '+74232404252',
            'mail': 'ac@vvsu.ru',
            'works_of_clock': '<p>Пн-чт: с 8.30-17.30</p> <p>Пт: с 8:30-16:15</p> <p>Обед: с 12:30-13:15</p> <p>Выходные дни: Сб, Вс</p>',
            'socials_vk': '/',
            'socials_tg': '/',
            'background': 'light-blue'
        },

        {
            'name': 'ФОК «Лига спорта»',
            'title': 'Физкультурно-оздоровительный комплекс «Лига спорта»',
            'url': 'https://sport-city-club.ru',
            'address': '690022, г. Владивосток, ул. Чапаева, д. 5, стр.2 ',
            'phone': '8 (423)294-93-04,',
            'phone2': '8 (423)294-93-06',
            'phone_bot': '+74232949304',
            'phone_bot2': '+74232949306',
            'mail': 'aak9978@gmail.com, morena.pro@mail.ru',
            'works_of_clock': '<p>Пн-чт: с 8.30-17.30</p> <p>Пт: с 8:30-16:15</p> <p>Обед: с 12:30-13:15</p> <p>Выходные дни: Сб, Вс</p>',
            'socials_vk': '/',
            'socials_tg': '/',
            'background': 'green'
        },


        


    ]

    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.title}>Контакты</h2>

                    <ul className={styles.contact_list_btn}>

                        {data_contacts.map((item, index) => (
                            <>
                            
                                <button className={styles.item_btn}>
                                    {item.name}
                                </button>

                               
                            </>
                        ))}

                    </ul>
                    <ul className={styles.contact_list}>
                        {data_contacts.map((item, index) => (
                            <li className={styles.contact_item}>
                                <div className={`${styles.contact_name_wrapper}                                                 
                                        ${item.background === 'yellow' ? styles.bg_yellow : ''}
                                        ${item.background === 'light-blue' ? styles.bg_light_blue : ''}
                                        ${item.background === 'purple' ? styles.bg_purple : ''}
                                        ${item.background === 'green' ? styles.bg_green : ''}
                                        ${item.background === 'violet' ? styles.bg_violet : ''}
                                    `}>
                                        
                                    <Image className={styles.decor} src={decor} width={50} height={50} alt='' />
                                    <p  className={styles.contact_name}>
                                        {item.title}</p>
                               </div>

                                <ul className={styles.contact_info}>
                                    <li className={styles.info_item}>
                                        <div className={styles.info_item_url}>
                                            <p>Сайт</p>
                                            <p>{item.url}</p>
                                        </div>                                            

                                    </li>

                                    <li className={styles.info_item}>
                                        <div className={styles.info_item_works}>
                                            <p>График работы:</p>
                                            <p dangerouslySetInnerHTML={{ __html: {item}}}></p>
                                        </div>                                    
                                    </li>

                                     <li className={styles.info_item}>
                                        <div className={styles.info_item_address}>
                                            <p>Адрес</p>
                                            <p>{item.address}</p>
                                        </div>                                 
                                    </li>


                                    <li className={styles.info_item}>
                                        <div className={styles.info_item_phone}>
                                            <p>Телефон</p>
                                            <a href={item.phone_bot}><p>{item.phone}</p></a>
                                            <a href={item.phone_bot2}><p>{item.phone2}</p></a>

                                        </div>                             
                                    </li>

                                    <li className={styles.info_item}>
                                         <div className={styles.info_item_email}>
                                            <p>Электронная почта</p>
                                            <Link href={'item.mail'}><p>{item.mail}</p></Link>
                                            <Link href={'item.mail2'}><p>{item.mail2}</p></Link>
                                        </div>                          
                                    </li>

                                    <li className={styles.info_item}>
                                         <div className={styles.info_item_socials}>
                                            <p>Мы в социальных сетях</p>
                                            {item.socials_tg}
                                            {item.socials_vk}

                                        </div>                          
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            

            <section className={styles.section}>
                <div className="container">
                    <h2 className={styles.title}>Схема проезда</h2>
                    <ComponentMap />
                </div>
            </section>
        </>
    )
}