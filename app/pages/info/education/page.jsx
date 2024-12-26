import styles from './style.module.css';

import Image from 'next/image';
import decor from '@/public/info/education/decor_5.png';
import decor_icon from '@/public/info/education/decor_icon.svg';

import { Breadcrumbs, DocumentComponent } from '@/app/components';
import date from '@/public/info/education/date.png';



export const metadata = {
    title: "ДВЦНО | Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда",
    description: "Дальневосточный центр непрерывного образования",
};


export default function page() {

    const data_education = [
        {
            'title': '<p>уровни общего образования</p>',
            'desc': '<p style="margin-bottom: 5px;"> Дошкольное образование(3- 7 лет),</p >  <p style="margin-bottom: 5px;">Начальное общее образование(1 - 4 классы), </p>  <p style="margin-bottom: 5px;">Основное общее образование (5-9 классы), </p>  <p style="margin-bottom: 5px;">Среднее общее образование(10-11 классы), </p>  <p style="margin-bottom: 5px;">Дополнительное образование </p>',
            'background': 'yellow',
            'img': '/info/education/decor_1.svg',
            'bg': '/info/education/bg_1.png'
        },

        {
            'title': '<p>Формы обучения</p>',
            'desc': '<p style="margin-bottom: 5px; color: #fff;">Очная,</p><p style="margin-bottom: 5px; color: #fff;">Очно-заочная, </p> <p style="margin-bottom: 5px; color: #fff;">Заочная,</p> ',
            'background': 'green',
            'img': '/info/education/decor_12.svg',
            'bg': '/info/education/bg_2.png'

        },

        {
            'title': '<p>Языки образования</p>',
            'desc': '<p style="margin-bottom: 5px; color: #ffff;">Русский,</p>  <p style="margin-bottom: 5px; color: #ffff;">Английский,</p>  <p style="margin-bottom: 5px; color: #ffff;">Китайский,</p>  <p style="margin-bottom: 5px; color: #ffff;">Корейский,</p>',
            'background': 'light-blue',
            'img': '/info/education/decor_13.svg',
            'bg': '/info/education/bg_3.png'

        }
    ]


    const data_programs = [
        {
            'title': 'Дошкольное образование',
            'desc': "[НОШДС, ВШНШДС, КЕП]",
            'img': '/info/education/programm1.png',
        },

        {
            'title': 'Дошкольное образование',
            'desc': "[НОШДС, ВШНШДС, КЕП]",
            'img': '/info/education/programm2.png',
        },
         
        {
            'title': 'Основное общее образование',
            'desc': "[НОШДС, ВШНШДС, КЕП]",  
            'img': '/info/education/programm3.png',
        },
          
        {
            'title': 'Среднее общее образование',
            'desc': "[НОШДС, ВШНШДС, КЕП]",
            'img': '/info/education/programm4.png',
        }
    ]

    const data_calendars = [
        {
            'title': 'Календарные учебные графики АК',
            'link': '/',
        },
        {
            'title': 'Календарные учебные графики КЕП',
            'link': '/',
        },
        {
            'title': 'Календарные учебные графики ШОД',
            'link': '/',
        },
        {
            'title': 'Календарные учебные графики ВШ',
            'link': '/',
        },
        {
            'title': 'Календарные учебные графики МЛШ',
            'link': '/',
        },
    ]

    const data_amount = [
        {
            'title': 'Численность обучающихся АНПОО ДВЦНО ЭЦП', 'link': '/'}
    ]

    return (
        <>
            <section className={styles.section}>
                <div className='container'>
                        <Breadcrumbs
                            slug={'Сведения об образовательной организации'}
                            link={'pages/info'}
                            title={'Образование'}
                    />
                    

                    <h2 className={styles.title}>Образование</h2>
                
                    
                    <ul className={styles.education_list}>
                        {data_education.map((item, index) => (
                            <li 
                                style={{backgroundImage: 'url(' + item.bg}}
                                className={`${styles.item} 
                                ${item.background === 'yellow' ? styles.background_yellow : ''}
                                ${item.background === 'light-blue' ? styles.background_light_blue : ''}
                                ${item.background === 'green' ? styles.background_green : ''}`}>
                                <p className={styles.item_title}>
                                    <p dangerouslySetInnerHTML={{ __html: item.title}}></p>

                                    <Image
                                        className={styles.decor}
                                        src={item.img}
                                        width={50}
                                        height={50}
                                        alt='decor'
                                    />

                                </p>
                                
                                <div style={{ position: 'relative', zIndex: 1}} dangerouslySetInnerHTML={{ __html: item.desc }}>
                                    
                                </div>

                                
                            </li>
                        ))}
                    </ul>
                </div>
            </section>


            <section className={`${styles.section} ${styles.section_custom}`}>
                <div className="container">
                    <div className={styles.title_wrapper}>
                        <h2 className={styles.title}>
                            Образовательные <br /> программы АНПОО «ДВЦНО»
                        </h2>

                        <Image
                            className={styles.decor2}
                            src={decor}
                            width={300}
                            height={100}
                            alt=''
                        />
                    </div>

                    <ul className={styles.list_programs}>
                        {data_programs.map((item, index) => (
                            <li key={index} className={styles.item_program}>
                                <div>
                                    <Image 
                                        src={item.img}
                                        width={280}
                                        height={220}
                                        alt=''
                                    />
                                </div>

                                <ul className={styles.item_info}>
                                    <Image
                                        src={decor_icon}
                                        width={25}
                                        height={25}
                                        alt=''
                                    />
                                    <p className={styles.item_title_program}>{item.title}</p>
                                    {item.desc.replace(/[\[\]]/g,'').split(', ').map((name, index) => (
                                        <li className={styles.item_item} key={index}>{name}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>


            <section className={`${styles.section} ${styles.back_gray}`}>
                <div className="container">
                     <div className={styles.title_wrapper}>
                        <h2 className={styles.title}>
                            Календарные учебные  <br /> графики 2023-2024
                        </h2>

                        <Image
                            className={styles.decor2}
                            src={decor}
                            width={300}
                            height={100}
                            alt=''
                        />
                    </div>

                    <div className={styles.documents_list}>
                        {data_calendars.map((item, index) => (
                            <DocumentComponent title={item.title} background={'white'} /> 
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                     <div className={styles.title_wrapper}>
                        <h2 className={styles.title}>
                            Численность обучающихся по программам
                        </h2>

                        <Image
                            className={styles.date}
                            src={date}
                            width={300}
                            height={100}
                            alt=''
                        />
                        <Image
                            className={styles.decor2}
                            src={decor}
                            width={300}
                            height={100}
                            alt=''
                        />
                    </div>


                    <p className={styles.subtitle}>В том числе численность обучающихся, являющихся иностранными гражданами</p>
                    <div className={styles.documents_list}>
                        {data_amount.map((item, index) => (
                            <DocumentComponent key={index} title={item.title} background={'white'} /> 
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
} 