import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";

import decor from '@/public/damage/decor.svg';

import Image from "next/image";

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
            <div className={styles.title_wrapper}>
                <h2 className={`title ${styles.title}`}>Противодействие коррупции</h2>
                <Image 
                    src={decor}
                    className={styles.decor}
                    width={150}
                    height={50}
                    alt='/'
                />
            </div>

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