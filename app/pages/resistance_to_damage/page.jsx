import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";

import { DocumentComponent } from "@/app/components";

export const metadata = {
    title: "ДВЦНО | Противодействие коррупции",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {


    const data_damage = [
        {
            'title': 'Правовая основа противодействия коррупции',
            'link': '/'
        },

        {
            'title': 'Правовая основа противодействия коррупции',
            'link': '/'
        },

        {
            'title': 'Правовая основа противодействия коррупции',
            'link': '/'
        },

        {
            'title': 'Правовая основа противодействия коррупции',
            'link': '/'
        },

        {
            'title': 'Правовая основа противодействия коррупции',
            'link': '/'
        },

        {
            'title': 'Правовая основа противодействия коррупции',
            'link': '/'
        },

        {
            'title': 'Правовая основа противодействия коррупции',
            'link': '/'
        },

        {
            'title': 'Правовая основа противодействия коррупции',
            'link': '/'
        },
    ]



    return (
        <div className="container">
            <Breadcrumbs
                title={'Противодействие коррупции.'}
            />
            <h2 className={`title ${styles.title}`}>Противодействие коррупции</h2>

                 <ul className={styles.document_list}>
                    {data_damage.map((item, index) => (
                        <li key={index}>
                            <DocumentComponent title={item.title} link={item.link} />
                        </li>
                    ))}
                </ul>

        </div>
    )
}