import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";


import { DocumentComponent } from "@/app/components";

export const metadata = {
    title: "ДВЦНО | Финансово-хозяйственная деятельность",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {


    const data_activities = [
        {
            'title': 'Финансовый план доходов и расходов АНПОО ДВЦНО 2022 год',
            'link': '/'
        },

        {
            'title': 'Финансовый план доходов и расходов АНПОО ДВЦНО 2018 год',
            'link': '/'
        },

        {
            'title': 'Финансовый план доходов и расходов АНПОО ДВЦНО 2015 год',
            'link': '/'
        },

        {
            'title': 'Финансовый план доходов и расходов АНПОО ДВЦНО 2017 год',
            'link': '/'
        },

        {
            'title': 'Финансовый план доходов и расходов АНПОО ДВЦНО 2014 год',
            'link': '/'
        },

        {
            'title': 'Финансовый план доходов и расходов АНПОО ДВЦНО и выполнение 2020 год',
            'link': '/'
        },

        {
            'title': 'Финансовый план доходов и расходов АНПОО ДВЦНО 2016 год',
            'link': '/'
        },

        {
            'title': 'Финансовый план доходов и расходов АНПОО ДВЦНО и выполнение 2019 год',
            'link': '/'
        },

        {
            'title': 'Финансовый план доходов и расходов 2016 год',
            'link': '/'
        }
    ]

    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs
                        slug={'Сведения об образовательной организации'}
                        link={'info'}
                        title={'Финансово-хозяйственная деятельность.'}
                    />

                    <h2 className={`title ${styles.title}`}>Финансово-хозяйственная деятельность</h2>


                    <p className={styles.subtitle}>
                        План финансово-хозяйственной деятельности
                    </p>

                    <div>
                        <ul className={styles.document_list}>
                            {data_activities.map((item, index) => (
                                <li key={index}>
                                    <DocumentComponent title={item.title} link={item.link} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}