'use client'
import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';
import { ComponentMap, ContactsList } from '@/app/components';
import useLangStore from '@/app/store/languageStore';


const data_contacts = [
    {
        'name': 'АНПОО «ДВЦНО',
        'title': 'АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ПРОФЕССИОНАЛЬНАЯ ОБРАЗОВАТЕЛЬНАЯ ОРГАНИЗАЦИЯ «ДАЛЬНЕВОСТОЧНЫЙ ЦЕНТР НЕПРЕРЫВНОГО ОБРАЗОВАНИЯ»',
        'url': 'https://dvcno.ru',
        'address': '690990 г. Владивосток, ул. Гоголя, 41',
        'phone': '+ 7 (423) 240-41-91',
        'phone2': '+ 7 (423) 240-43-41',
        'phone_bot': '+74232404191',
        'phone_bot2': '+74232404341',
        'mail': 'Svetlana.Shirshikova@vvsu.ru',
        'mail2': 'dvcno-vl@yandex.ru',
        'works_of_clock': '<p>Пн-чт: с 8.30-17.30</p> <p>Пт: с 8:30-16:15</p> <p>Обед: с 12:30-13:15</p> <p>Выходные дни: Сб, Вс</p>',
        'socials_vk': '/',
        'socials_tg': '/',
        'background': 'violet',
        'href': '#item_1'

    },

    {
        'name': 'НШДС «КЕП»',
        'title': 'Начальная школа-детский сад «Классическая Европейская прогимназия»',
        'url': 'https://odarenok.su',
        'address': '690024, г. Владивосток, ул. Десятая, д. 10 (станция «Санаторная»)',
        'phone': '8 (423) 261-47-548,',
        'phone2': '8 (423) 261-47-378,',
        'phone3': '8 (423) 261-47-38',
        'phone_bot': '+742326147548',
        'phone_bot2': '+742326147378',
        'phone_bot3': '+74232614738',
        'mail': 'odarenok@list.ru',
        'works_of_clock': '<p>Пн-чт: с 8.30-17.30</p> <p>Пт: с 8:30-16:15</p> <p>Обед: с 12:30-13:15</p> <p>Выходные дни: Сб, Вс</p>',
        'socials_vk': '/',
        'socials_tg': '/',
        'background': 'green',
        'href': '#item_2'

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
        'background': 'purple',
        'href': '#item_3'
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
        'background': 'light-blue',
        'href': '#item_4'
    },

    {
        'name': 'ШОД',
        'title': 'Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина (ШОД)',
        'url': 'https://giftedschool.dvcno.ru',
        'address': '690022, г. Владивосток, ул. Чапаева, д. 5',
        'phone': '8 (423) 265-85-62,',
        'phone_bot': '+74232658562',
        'mail': 'dvcno_shiod@rambler.ru',
        'works_of_clock': '<p>Пн-чт: с 8.30-17.30</p> <p>Пт: с 8:30-16:15</p> <p>Обед: с 12:30-13:15</p> <p>Выходные дни: Сб, Вс</p>',
        'socials_vk': '/',
        'socials_tg': '/',
        'background': 'light-blue',
        'href': '#item_5'
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
        'background': 'yellow',
        'href': '#item_6'
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
        'background': 'green',
        'href': '#item_7'
    },
]

const languages = {
    ru: 'Контакты',
    en: 'Contacts',
    ch: '聯絡方式'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();

    console.log(data);


    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs
                        link={'/'}
                        title={languages[lang]}
                    />
                    <h2 className={styles.title}>Контакты</h2>
                    <ContactsList data={data_contacts} />
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

export default PageContent