'use client'

import styles from './style.module.css';
import Image from 'next/image';
import decor from '@/public/info/structura/decor.svg';
import decor2 from '@/public/info/structura/decor2.svg';
import decor3 from '@/public/info/structura/decor3.svg';
import doc from '@/public/info/structura/doc.svg';
import useLangStore from '@/app/store/languageStore';

const data_director = [
    {
        'job': 'Директор АНПОО «ДВЦНО»',
        'name': 'Ширшикова Светлана Валентиновна',
        'address': '690014, г. Владивосток, ул. Гоголя, д. 41',
        'phone': '8 (423) 240-41-91',
        'email': 'Svetlana.Shirshikova@vvsu.ru',
        'url': 'https://dvcno.ru/'
    },

    {
        'job': 'Заместитель директора в сфере образования',
        'name': 'Романова Анна Николаевна',
        'address': '690014, г. Владивосток, ул. Гоголя, д. 41',
        'phone': '8 (423) 240-41-91',
        'email': 'dvcno-vl@yandex.ru',
        'url': 'https://dvcno.ru/'
    }
]

const data_division = [
    {
        'img': '/info/address_1.png',
        'job': 'Директор школы',
        'title': 'Начальная общеобразовательная школа-детский сад "Восточная школа" (НОШДС «ВШ») ',
        'name': 'Дутко Светлана Олеговна',
        'address': '690024, г. Владивосток, ул. Десятая, д. 10 (станция «Санаторная»)',
        'phone2': '8 (423) 261-47-37',
        'phone1': '8 (423) 261-47-54',
        'phone_1_robot': '+74232614737',
        'phone_2_robot': '+74232614754',
        'email': "odarenok@list.ru",
        'url': 'https://odarenok.su/',
        'name_document': 'Положения',
        'link': '/'
    },

    {
        'img': '/info/address_2.png',
        'job': 'Директор школы',
        'title': 'Начальная общеобразовательная школа-детский сад "Восточная школа" (НОШДС «ВШ») ',
        'name': 'Степаненко Анастасия Александровна',
        'address': '690066, г. Владивосток, ул. Тунгусская, д. 59',
        'phone1': '8 (423) 240-41-85',
        'phone_1_robot': '+74232404185',
        'email': "odarenok@list.ru",
        'url': 'https://odarenok.su/',
        'name_document': 'Положения',
        'link': '/'
    },

    {
        'img': '/info/address_3.png',
        'job': 'Директор школы',
        'title': 'Международная лингвистическая школа (МЛШ) ',
        'name': 'Шевченко Ольга Станиславовна',
        'address': '690106, г. Владивосток,  Партизанский пр-т, д. 44, корп. 4',
        'phone1': '8 (423) 240-42-83',
        'phone2': '8 (423) 240-42-84',
        'phone_1_robot': '+74232404283',
        'phone_2_robot': '+74232404284',
        'email': "mlsh@vvsu.ru",
        'url': ' https://mlsh.ru',
        'name_document': 'Положения',
        'link': '/'
    },

    {
        'img': '/info/address_4.png',
        'job': 'Директор школы',
        'title': '«Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина» (ШОД)',
        'name': 'Дутко Светлана Олеговна',
        'address': '690014, г. Владивосток, ул. Гоголя, д. 41',
        'phone1': '8 (423) 240-41-56',
        'phone2': '8 (423) 240-40-62',
        'phone_1_robot': '+74232404156',
        'phone_2_robot': '+74232404062',
        'email': "2404252@mail.ru, ac@vvsu.ru",
        'url': ' https://ac.dvcno.ru/',
        'name_document': 'Положения',
        'link': '/'
    },

    {
        'img': '/info/address_5.png',
        'job': 'Директор школы',
        'title': '«Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина» (ШОД) ',
        'name': 'Дутко Светлана Олеговна',
        'address': '690022, г. Владивосток, ул. Чапаева, д. 5',
        'phone1': '8 (423) 265-85-62',
        'phone_1_robot': '+74232658562',
        'email': "dvcno_shiod@rambler.ru",
        'url': ' http://giftedschool.dvcno.ru',
        'name_document': 'Положения',
        'link': '/'
    },

    {
        'img': '/info/address_6.png',
        'title': 'Физкультурно-оздоровительный комплекс с бассейном «Лига спорта» (ФОК «Лига спорта»)',
        'job': 'Директор школы',
        'name': 'Колесников Алексей Аркадьевич',
        'job_2': 'Директор школы',
        'name_2': 'Вахрушева Ольга Владимировна',
        'address': '690022, г. Владивосток, ул. Чапаева, д. 5',
        'phone1': '8 (423) 294-93-04',
        'phone_1_robot': '+74232949304',
        'phone_2_robot': '+74232949306',
        'phone2': '8 (423) 294-93-06',
        'email': "dvcno_shiod@rambler.ru",
        'url': ' http://giftedschool.dvcno.ru',
        'name_document': 'Положения',
        'link': '/'
    }
]

const data_manager = [
    {
        'title': 'Отдел документационного обеспечения образовательных процессов',
        'job': 'Начальник отдела',
        'name': 'Жаврид Татьяна Владимировна',
        'address': '690014, г. Владивосток, ул. Гоголя, д. 41',
        'phone1': '8 (423) 240-43-41',
        'phone_1_robot': '+74232404341',
        'email': "tatiana.zhavrid@mail.ru",
        'email2': "dvcno-vl@yandex.ru",
        'url': ' http://giftedschool.dvcno.ru',
        'name_document': 'Положения',
        'link': '/'
    },

    {
        'title': 'Юридический отдел',
        'job': 'Начальник отдела',
        'name': 'Каленский Виктор Викторович',
        'address': '690014, г. Владивосток, ул. Гоголя, д. 41',
        'phone1': '8 (914) 321-37-61',
        'phone_1_robot': '+79143213761',
        'email': "kalenopro@mail.ru",
        'url': ' https://dvcno.ru/',
        'name_document': 'Положения',
        'link': '/'
    },

    {
        'title': 'Служба контроля и безопасности (СКБ)',
        'job': 'Руководитель службы',
        'name': 'Плетнева Татьяна Юрьевна',
        'address': '690014, г. Владивосток, ул. Гоголя, д. 41',
        'phone1': '8 (423) 240-43-46',
        'phone_1_robot': '+74232404346',
        'email': "Tatyana.Pletneva@vvsu.ru",
        'url': ' https://dvcno.ru/',
        'name_document': 'Положения',
        'link': '/'
    },

    {
        'title': 'Отдел имущественных отношений',
        'job': 'Начальник отдела',
        'name': 'Каленский Виктор Викторович',
        'address': '690014, г. Владивосток, ул. Гоголя, д. 41',
        'phone1': '8 (914) 321-37-61',
        'phone_1_robot': '+79143213761',
        'email': "kalenopro@mail.ru",
        'url': ' https://dvcno.ru/',
        'name_document': 'Положения',
        'link': '/'
    },

    {
        'title': 'Отдел связи и информационных технологий',
        'job': 'Начальник отдела',
        'name': 'Каленский Виктор Викторович',
        'address': '690014, г. Владивосток, ул. Гоголя, д. 41',
        'phone1': '8 (914) 321-37-61',
        'phone_1_robot': '+79143213761',
        'email': "kalenopro@mail.ru",
        'url': ' https://dvcno.ru/',
        'name_document': 'Положения',
        'link': '/'
    },

    {
        'title': 'Отдел кадров',
        'job': 'Начальник отдела',
        'name': 'Каленский Виктор Викторович',
        'address': '690014, г. Владивосток, ул. Гоголя, д. 41',
        'phone1': '8 (914) 321-37-61',
        'phone_1_robot': '+79143213761',
        'email': "kalenopro@mail.ru",
        'url': ' https://dvcno.ru/',
        'name_document': 'Положения',
        'link': '/'
    },

    {
        'title': 'Бухгалтерия',
        'job': 'Начальник отдела',
        'name': 'Каленский Виктор Викторович',
        'address': '690014, г. Владивосток, ул. Гоголя, д. 41',
        'phone1': '8 (914) 321-37-61',
        'phone_1_robot': '+79143213761',
        'email': "kalenopro@mail.ru",
        'url': ' https://dvcno.ru/',
        'name_document': 'Положения',
        'link': '/'
    },

    {
        'title': 'Отдел строительства, эксплуатации и ремонта',
        'job': 'Начальник отдела',
        'name': 'Каленский Виктор Викторович',
        'address': '690014, г. Владивосток, ул. Гоголя, д. 41',
        'phone1': '8 (914) 321-37-61',
        'phone_1_robot': '+79143213761',
        'email': "kalenopro@mail.ru",
        'url': ' https://dvcno.ru/',
        'name_document': 'Положения',
        'link': '/'
    }
]

const languages = {
    ru: 'Обучение',
    en: 'Training',
    ch: '教育'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();

    console.log(data);
    const data_director = data?.sections?.manager?.[1]?.content[lang];
    const data_division = data?.sections?.structure?.[1]?.content[lang];
    const data_manager = data?.sections?.departments?.[1]?.content[lang];

    return (
        <section className={styles.section}>
            <div className='container relative'>
                <h2 className={styles.title}>{data?.sections?.main?.[0]?.content[lang] ?? 'Структура и органы управления образовательной организацией'}
                </h2>

                <Image
                    className={styles.decor}
                    src={decor}
                    width={200}
                    height={200}
                    alt=''
                />

                <div className={styles.list_director}>
                    <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: data?.sections?.manager?.[0]?.content[lang] ?? 'Дирекция' }}></div>
                    <ul className={styles.list}>
                        {data_director.map((item, index) => (
                            <li className={styles.item} key={index}>
                                <div className={styles.item_title_wrapper}>
                                    {item.title}
                                    <Image
                                        className={`${styles.decor2} dsv-image`}
                                        src={decor2}
                                        width={25}
                                        height={25}
                                        alt={'decor2'}
                                    />

                                    <Image
                                        className={`${styles.decor3} dsv-image`}
                                        src={decor3}
                                        width={50}
                                        height={50}
                                        alt={'decor3'}
                                    />
                                </div>

                                <div className={styles.info} dangerouslySetInnerHTML={{ __html: item?.content }}></div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.list_division}>
                    <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: data?.sections?.structure?.[0]?.content[lang] ?? 'Cтруктурные подразделения' }}></div>
                    <ul className={styles.list}>
                        {data_division.map((item, index) => (
                            <li className={styles.item} key={index}>
                                <div className={styles.item_title_wrapper}>
                                    <Image
                                        className={`dsv-image`}
                                        src={process.env.NEXT_PUBLIC_API_SERVER + item.image}
                                        width={120}
                                        height={90}
                                        alt='decor'
                                    />

                                    {item.title}

                                    <Image
                                        className={`${styles.decor3} dsv-image`}
                                        src={decor3}
                                        width={50}
                                        height={50}
                                        alt={'decor3'}
                                    />
                                </div>

                                <div className={styles.info} dangerouslySetInnerHTML={{ __html: item?.content }}></div>

                                <a href={process.env.NEXT_PUBLIC_API_SERVER + item.link} className={styles.doc} download="filename">
                                    <Image src={doc} width={50} height={50} alt='image' />
                                    Положения
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.list_division}>
                    <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: data?.sections?.departments?.[0]?.content[lang] ?? 'Органы управления' }}></div>

                    <ul className={styles.list}>
                        {data_manager.map((item, index) => (
                            <li className={styles.item} key={index}>
                                <div className={styles.item_title_wrapper}>
                                    {item.title}
                                    <Image
                                        className={`${styles.decor2} dsv-image`}
                                        src={decor2}
                                        width={25}
                                        height={25}
                                        alt={'decor2'}
                                    />

                                    <Image
                                        className={`${styles.decor3} dsv-image`}
                                        src={decor3}
                                        width={50}
                                        height={50}
                                        alt={'decor3'}
                                    />
                                </div>

                                <div className={styles.info} dangerouslySetInnerHTML={{ __html: item?.content }}></div>

                                <a href={process.env.NEXT_PUBLIC_API_SERVER + item.link} className={styles.doc} download="filename">
                                    <Image src={doc} width={50} height={50} alt='image' />
                                    Положения
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default PageContent