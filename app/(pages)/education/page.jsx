import Card from "@/app/components/Cards/Card/Card";
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";

export const metadata = {
    title: "ДВЦНО | Обучение",
    description: "Дальневосточный центр непрерывного образования",
};

const fetchData = async () => {
    // Проверяем, выполняется ли код на сервере
    if (typeof window === 'undefined') {
        // Возвращаем заглушку для серверного рендеринга
        return [];
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL_FRONT}/api/education/`);
        if (!res.ok) {
            throw new Error(`Ошибка HTTP: ${res.status}`);
        }
        const result = await res.json();
        return result;
    } catch (error) {
        console.error("Ошибка при загрузке:", error);
        return [];
    }
};

export default async function Page() {
    const data = await fetchData();
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