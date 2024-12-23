import Image from 'next/image';
import styles from '../education.module.css';
import { Division } from '@/app/sections';
import { Breadcrumbs, SlideMain, Accordion } from '@/app/components';

const data = {
    title: "Дополнительное образование в ДВЦНО",
    images: [
        {
            sliderBgBig: '/education/hero-bg-5-l.png',

        },
        {
            sliderBgMedium: '/education/hero-bg-5-m.png',

        },
        {
            sliderBgSmall: '/education/hero-bg-5-s.png',

        }
    ],

    description: "Это мотивированное образование, позволяющее обучающемуся приобрести устойчивую потребность в познании и творчестве, максимально реализовать себя, самоопределиться профессионально и личностно",
    listItems: [
        'НШДС «Классическая европейская прогимназия»',
        'Начальная общеобразовательная школа-детский сад "Восточная школа" ',
        'Международная лингвистическая школа',
        'Академический колледж (АК)',
        '«Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина»',
        'Физкультурно-оздоровительный комплекс с бассейном «Лига спорта» (ФОК «Лига спорта»)',
    ],
    textPattern: 'Здесь создают творцов будущего',
    link: "#",
}


const accordionData = [
    {
        title: 'Менеджмент в образовании',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nobis ducimus perferendis, magni fugiat aliquid dignissimos accusamus modi amet placeat aperiam dolore itaque voluptatem magnam facere aspernatur ex ratione! Deleniti?'
    },
    {
        title: 'Педагогика и психология',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nobis ducimus perferendis, magni fugiat aliquid dignissimos accusamus modi amet placeat aperiam dolore itaque voluptatem magnam facere aspernatur ex ratione! Deleniti?'
    },
    {
        title: 'Образование и педагогика',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nobis ducimus perferendis, magni fugiat aliquid dignissimos accusamus modi amet placeat aperiam dolore itaque voluptatem magnam facere aspernatur ex ratione! Deleniti?'
    },
]

export const metadata = {
    title: "ДВЦНО | Дополнительное образование в ДВЦНО",
    description: "Дополнительное образование в ДВЦНО",
};

export default function doshkolnoeObrazovanie() {
    return (
        <>
            <div className='container'>
                <Breadcrumbs
                    slug={'Образование'}
                    link={'education'}
                    title={'Дополнительное образование в ДВЦНО'}
                />
                <section className={styles.hero_section}>
                    <SlideMain item={data} />
                </section>
            </div>
            <div className="container">
                <h2 className={`title ${styles.half_title}`}>Перечень реализуемых дополнительных программ </h2>

                <Accordion
                    color='#37a4da'
                    title='Программы профессиональной переподготовки'
                    accordionData={accordionData}
                />
            </div>
        </>
    )
}
