import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";

import decor from '@/public/damage/decor.svg';

import Image from "next/image";

import { DocumentComponent } from "@/app/components";

export const metadata = {
    title: "ДВЦНО | Противодействие идеологии терроризма и экстремизма",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {

    const data_damage = [
        {
            'title': 'Террористический акт',
            'link': '/'
        },
        {
            'title': 'Террористический акт',
            'link': '/'
        },
        {
            'title': 'Террористический акт',
            'link': '/'
        },
        {
            'title': 'Террористический акт',
            'link': '/'
        },
        {
            'title': 'Террористический акт',
            'link': '/'
        },
        {
            'title': 'Террористический акт',
            'link': '/'
        },
        {
            'title': 'Террористический акт',
            'link': '/'
        },

    ]

    return (
        <div className="container">
            <Breadcrumbs
                title={'Террористический акт'}
            />
            <div className={styles.title_wrapper}>
                <h2 className={`title ${styles.title}`}>Противодействие идеологии терроризма и экстремизма</h2>
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