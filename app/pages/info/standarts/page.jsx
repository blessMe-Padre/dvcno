import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";


import { DocumentComponent } from "@/app/components";

export const metadata = {
    title: "ДВЦНО | Образовательные стандарты и требования",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {

    const data_documents = [
        {
            'title': 'ФОП СОО',
            'link': '/'
        },

        {
            'title': 'ФОП ООО',
            'link': '/'
        },

        {
            'title': 'ФОП НОО',
            'link': '/'
        }
    ]

    const data_standarts = [
        {
            'name': 'ФГОС ДО',
            'title': 'Приказ Минобрнауки России от 17.10.2013 N 1155',
            'link': '/',
            'background': 'green'
        },

        {
            'name': 'ФГОС НОО',
            'title': 'Приказ Минобрнауки России от 06.10.2009 N 373',
            'link': '/',
            'background': 'light-blue'
        },
         
        {
            'name': 'ФГОС НОО',
            'title': 'Приказ Минпросвещения России от 31.05.2021 N 286',
            'link': '/',
            'background': 'light-blue'
        },

        {
            'name': 'ФГОС ООО',
            'title': 'Приказ Минобрнауки России от 17.12.2010 N 1897',
            'link': '/',
            'background': 'yellow'
        },

        {
            'name': 'ФГОС ООО',
            'title': 'Приказ Минпросвещения России от 31.05.2021 N 287',
            'link': '/',
            'background': 'yellow'
        },

        {
            'name': 'ФГОС СОО',
            'title': 'Приказ Минобрнауки России от 17.05.2012 N 413',
            'link': '/',
            'background': 'violet'
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
                        slug={'Сведения об образовательной организации'}
                        link={'pages/about_center'}
                        title={'Образовательные стандарты и требования.'}
                    />

                    <h2 className={`title ${styles.title}`}>Образовательные стандарты и требования.</h2>


                    <ul>
                        {Object.entries(groupedStandards).map(([name, items]) => (
                            <li key={name}>
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

            <section className={styles.section}>
                <div className="container">
                    <h2 className={`title ${styles.title}`}>Федеральные образовательные программы</h2>

                       
                    <ul className={styles.document_list}>
                            {data_documents.map((item, index) => (
                                <li key={index}>
                                    <DocumentComponent title={item.title} link={item.link} />
                                </li>
                            ))}
                    </ul>
                </div>
            </section>
        </>
    )
}