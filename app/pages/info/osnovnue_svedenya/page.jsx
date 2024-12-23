import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';
import decor from '@/public/decor/image-1.png';
import Image from 'next/image';


export default function page() {
    

    const data = [
        {
            'title': 'Полное наименование организации:',
            'desc': 'Автономная некоммерческая профессиональная образовательная организация «Дальневосточный центр непрерывного образования»'
        },

        {
            'title': 'Краткое наименование организации:',
            'desc': 'АНПОО «ДВЦНО»'
        },

        {
            'title': 'Год создания учреждения:',
            'desc': 'Автономная некоммерческая профессиональная образовательная организация «Дальневосточный центр непрерывного образования» создана в 2004 году как «Институт непрерывного образования»'
        },

         {
            'title': 'Юридический, почтовый:',
            'desc': '690014, г. Владивосток, ул. Гоголя, д. 41'
        },
         
        {
            'title': 'Контакты:',
            'desc': '8 (423) 240-41-91 - дирекция <br>, 8 (423) 240-43-41 - отдел образовательных программ и проектов <br>, dvcno-vl@yandex.ru <br>, Svetlana.Shirshikova@vvsu.ru'

        },

        {
            'title': 'Режим работы:',
            'desc': 'Понедельник-четверг с 8.30-17.30 <br>, Пятница с 8:30-16:15 <br>, Обед с 12:30-13:15 <br>, Выходные дни: суббота, воскресенье'

        },

        {
            'title': 'Учредитель:',
            'desc': 'Заброда Елена Владимировна'

        },
         
        {
            'title': 'Руководитель:',
            'desc': 'Директор - Ширшикова Светлана Валентиновна'
        },



    ]

    return (
        <section>
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
            </div>
        </section>
    )
}