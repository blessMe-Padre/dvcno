import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';
import decor from '@/public/decor/image-1.png';
import Image from 'next/image';

import decor2 from '@/public/info/svedenya/decor.svg';
import decor3 from '@/public/info/decor_3.svg';


export const metadata = {
    title: "ДВЦНО | Основные сведения",
    description: "Дальневосточный центр непрерывного образования",
};


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
            'img': "/info/svg_7.svg"

        },



    ]

    const data_address = [
        {
            'title': 'Начальная школа – детский сад «Классическая европейская прогимназия» (НШДС "КЕП")',
            'address': '690024, г. Владивосток, ул. Десятая, д. 10 (станция «Санаторная»)',
            'img': '/info/address_1.png',
            'link': '/'
        },

        {
            'title': 'Начальная общеобразовательная школа-детский сад "Восточная школа"',
            'address': '690066, г. Владивосток, ул. Тунгусская, д. 59',
            'img': '/info/address_2.png',
            'link': '/'
        },

        {
            'title': 'Международная лингвистическая школа (МЛШ)',
            'address': ' 690106, г. Владивосток,  Партизанский пр-т, д. 44, корп. 4',
            'img': '/info/address_3.png',
            'link': '/'
        },

        {
            'title': 'Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина (ШОД)',
            'address': '690022, г. Владивосток, ул. Чапаева, д. 5',
            'img': '/info/address_5.png',
            'link': '/',
        },

        {
            'title': 'Академический колледж (АК)',
            'address': '690014, г. Владивосток, ул. Гоголя, д. 41',
            'link': '/',
            'img': '/info/address_5.png',
        },

        {
            'title': 'Физкультурно-оздоровительный комплекс «Лига спорта»',
            'address': '690022, г. Владивосток, ул. Чапаева, д. 5, стр. 2',
            'link': '/',
            'img': '/info/address_6.png',
        },


    ]
    
    const bank_info = [
    {
        'address': '<span style="font-weight: 600;">690014 </span>, г. Владивосток, ул. Гоголя, д. 41. Тел. 8(423)240-41-91',
        'bank_inn': '<span style="font-weight: 600;">ИНН </span> 2536144181, ',
        'bank_kpp': '<span style="font-weight: 600;">КПП </span> 253601001, ',
        'bank_p_c': '<span style="font-weight: 600;">р/с </span> 40703810800100000021 в ПАО СКБ Приморья',
        'bank_name': '<span style="font-weight: 600;">«Примсоцбанк» </span>: ',
        'bank_bik': '<span style="font-weight: 600;">БИК </span> 040507803',
        'bank_k_c': '<span style="font-weight: 600;"к/с </span> 30101810200000000803',
        'bank_okpo': '<span style="font-weight: 600;">ОКПО </span> 73243973',
    },
    ];

    const documents_data = [
        {
            'title': 'Лицензия на право ведения образовательной деятельности',
            'desc': 'Лицензия на право ведения образовательной деятельности (с приложением)',
            'time': 'Срок действия: бессрочно.',
            'background_color': 'violet',
            'link': '/'
        },

        {
            'title': 'Государственная аккредитация',
            'desc': 'Свидетельство о государственной аккредитации № 33',
            'time': 'Срок действия государственной аккредитации - бессрочно.',
            'background_color': 'violet',
            'background_color': 'light-blue',
            'link' : '/'
        },
    ]

    return (
        <>
            <section className={styles.section}>
                <div className="container relative">
                    <Breadcrumbs
                        slug={'Сведения об образовательной организации'}
                        link={'pages/info'}
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
                            <li className={styles.svedenya_item} key={index}>
                            {console.log(item.img)}
                                <p className={styles.svedenya_item_name}>{item.title}</p>
                                <p className={styles.svedenya_item_desc} dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                                
                                <Image
                                    className={`${styles.decor_svg} dsv-image`}
                                    src={item.img ? item.img : '/placeholder/placeholder.png'}
                                    width={200}
                                    height={80}
                                    alt=''
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>


            <section className={styles.section}>
                    <div className='container'>
                        <h2 className={styles.title}>
                            адреса мест осуществления образовательной деятельности </h2>
                    
                    <ul className={styles.list_svedenya_four}>
                         {data_address.map((item, index) => (
                            <li className={styles.svedenya_item} key={index}>
                                <div className={styles.item_title_wrapper}>
                                    <Image
                                        className={`dsv-image`}
                                        src={item.img}
                                        width={120}
                                        height={90}
                                        alt='decor'
                                    />
                                     {item.title}
                                     

                                     <Image className={styles.decor2_img} src={decor2} width={50} height={50} alt='decor_2' />
                                </div>
                                 
                                    <div className={styles.field_wrapper}>
                                        <p className={styles.field}>Адрес:</p>
                                        <p className={styles.field_value}>{item.address}</p> 
                                     </div>

                                    <a
                                        href={item.link}
                                        className={styles.link}
                                        >Посмотреть на карте</a>
                                        
                            </li>
                        ))}
                    </ul>
                    </div>
            </section>

            
            <section className={styles.section}>
                    <div className='container'>
                        <h2 className={styles.title}>
                            документы на осуществление образовательной деятельности </h2>
                        
                    
                        <div className={styles.documents_wrapper}>
                        {documents_data.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.document_content} ${item.background_color === 'violet' ? styles.background_color_violet : styles.background_color_light_blue}`}
                            >
                                <p className={styles.document_name}>
                                    <span>{item.title}</span></p>
                                
                                <ul className={styles.document_info} >
                                    <li>
                                        <a href={item.link}>
                                            <p dangerouslySetInnerHTML={{__html: item.desc}}></p>
                                        </a>
                                    </li>

                                    <li>
                                        <time>{item.time}</time>
                                    </li>
                                </ul>
                            </div>
                                
                           ))}
                        </div>
                    </div>
            </section>

            <section className={styles.section}>
                    <div className='container relative'>
                        <h2 className={styles.title}>
                            Банковские реквизиты АНПОО «ДВЦНО»
                    </h2>
                    
                    <Image
                        className={styles.decor3_img}
                        src={decor3}
                        width={200}
                        height={100}
                        alt=''
                    />
                    
                        <div className={styles.bank_info}>
                            <p className={styles.bank_name}>
                                Автономная некоммерческая профессиональная образовательная организация «Дальневосточный центр непрерывного образования»
                        </p>
                        
                            <ul className={styles.bank_info_list}>
                            {bank_info.map((item, index) => (

                                <>
                                    <li dangerouslySetInnerHTML={{ __html: item.address}}></li>
                                    <li dangerouslySetInnerHTML={{ __html: item.bank_inn}}></li>
                                    <li dangerouslySetInnerHTML={{ __html: item.bank_kpp}}></li>
                                    <li dangerouslySetInnerHTML={{ __html: item.bank_p_c}}></li>
                                    <li dangerouslySetInnerHTML={{ __html: item.bank_name}}></li>
                                    <li dangerouslySetInnerHTML={{ __html: item.bank_bik}}></li>
                                    <li dangerouslySetInnerHTML={{ __html: item.bank_k_c}}></li>
                                    <li dangerouslySetInnerHTML={{ __html: item.bank_okpo}}></li>
                                </>
                                    
                                ))}
                            </ul>

                        </div>
                    

                    </div>
            </section>
        </>
    )
}