import Card from "@/app/components/Cards/Card/Card";
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";

import fetchData from '../../utils/fetchData';

export const metadata = {
    title: "ДВЦНО | Обучение",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {
    const data = await fetchData('education');

    return (
        <div className="container">
            <Breadcrumbs title={"Обучение"} />
            <h2 className={`title ${styles.title}`}>Обучение</h2>
            <p className={styles.description}>Дальневосточный центр непрерывного образования (ДВЦНО) предлагает полный цикл образовательных услуг. От дошкольного образования до получения специальности (профессиональное обучение) и профессиональной переподготовки</p>

            <ul className={styles.list}>
                {data && data.length > 0 ? (
                    data.map((item) => (
                        <li key={item.id}>
                            <Card
                                image={item.image}
                                description={item.description}
                                link={`education/${item.slug}`}
                            />
                        </li>
                    ))
                ) : (
                    <p className="span-error-message">Данные отсутствуют.</p>
                )}
            </ul>

        </div>
    )
}