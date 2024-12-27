import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";


import { DocumentComponent } from "@/app/components";

export const metadata = {
    title: "ДВЦНО | Результаты СОУТ",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {

    const data_standarts = [


        {
            'name': 'Положение о системе управления охраной труда',
            'title': 'Положение о системе управления охраной труда',
            'link': '/',
            'background': 'green'
        },

        {
            'name': 'НШДС "КЕП" (Сводная ведомость и перечень мероприятий)',
            'title': 'Перечень мероприятий по СОУТ КЕП',
            'link': '/',
            'background': 'light-blue'
        },

        {
            'name': 'НШДС "КЕП" (Сводная ведомость и перечень мероприятий)',
            'title': 'Сводная ведомость результатов СОУТ КЕП',
            'link': '/',
            'background': 'light-blue'
        },
         
        {
            'name': 'МЛШ (Сводная ведомость и перечень мероприятий)',
            'title': 'Перечень мероприятий по СОУТ МЛШ',
            'link': '/',
            'background': 'yellow'
        },

        {
            'name': 'МЛШ (Сводная ведомость и перечень мероприятий)',
            'title': 'Сводная ведомость результатов СОУТ МЛШ',
            'link': '/',
            'background': 'yellow'
        },

        {
            'name': 'АК (Сводная ведомость и перечень мероприятий)',
            'title': 'Перечень мероприятий по СОУТ АК',
            'link': '/',
            'background': 'violet'
        },

        {
            'name': 'АК (Сводная ведомость и перечень мероприятий)',
            'title': 'Перечень мероприятий по СОУТ АК мед',
            'link': '/',
            'background': 'violet'
        },

        {
            'name': 'АК (Сводная ведомость и перечень мероприятий)',
            'title': 'Сводная ведомость результатов СОУТ АК',
            'link': '/',
            'background': 'violet'
        },

        {
            'name': 'НОШДС "ВШ" (Сводная ведомость и перечень мероприятий)',
            'title': 'Перечень мероприятий по СОУТ ВШ',
            'link': '/',
            'background': 'green'
        },

        {
            'name': 'НОШДС "ВШ" (Сводная ведомость и перечень мероприятий)',
            'title': 'Сводная ведомость результатов СОУТ ВШ',
            'link': '/',
            'background': 'green'
        },

        {
            'name': 'НОШДС "ВШ" (Сводная ведомость и перечень мероприятий)',
            'title': 'Перечень мероприятий по СОУТ ВШ 1',
            'link': '/',
            'background': 'green'
        },


        {
            'name': 'ФОК (Сводная ведомость и перечень мероприятий)',
            'title': 'Перечень мероприятий по СОУТ ФОК',
            'link': '/',
            'background': 'light-blue'
        },

        {
            'name': 'ФОК (Сводная ведомость и перечень мероприятий)',
            'title': 'Сводная ведомость результатов СОУТ ФОК',
            'link': '/',
            'background': 'light-blue'
        },

        {
            'name': 'ФОК (Сводная ведомость и перечень мероприятий)',
            'title': 'Перечень мероприятий по СОУТ ФОК мед',
            'link': '/',
            'background': 'light-blue'
        },


          {
            'name': 'ШИОД (Сводная ведомость и перечень мероприятий)',
            'title': 'Сводная ведомость результатов СОУТ ШИОД',
            'link': '/',
            'background': 'yellow'
        },

        {
            'name': 'ШИОД (Сводная ведомость и перечень мероприятий)',
            'title': 'Перечень мероприятий по СОУТ ШИОД ШИОД',
            'link': '/',
            'background': 'yellow'
        },

    ]


     const groupedStandards = data_standarts.reduce((acc, item) => {
        acc[item.name] = acc[item.name] || [];
        acc[item.name].push(item);
        return acc;
    }, {});

    return (
        <>
            <section className={styles.section}> 
                <div className="container">
                    <Breadcrumbs
                        title={'Результаты СОУТ'}
                    />

                    <h2 className={`title ${styles.title}`}>Результаты СОУТ</h2>


                    <ul>
                        {Object.entries(groupedStandards).map(([name, items]) => (
                            <li className={styles.item_object} key={name}>
                            {/*  Removed unnecessary console.log */}
                            <p className={`${styles.item_name} ${
                                items[0].background === 'yellow' ? styles.background_yellow : ''
                            } ${items[0].background === 'light-blue' ? styles.background_light_blue : ''} ${
                                items[0].background === 'green' ? styles.background_green : ''
                            } ${items[0].background === 'violet' ? styles.background_violet : ''}`}>
                                {name}
                            </p>
                            <ul className={styles.document_list}>
                                {items.map((item, index) => (
                                <DocumentComponent key={index} title={item.title} link={item.link} />
                                ))}
                            </ul>
                            </li>
                        ))}
                        </ul>

                </div>
            </section>
        </>
    )
}