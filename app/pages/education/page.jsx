import Card from "@/app/components/Cards/Card/Card";
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";

// import fetchData from '../../utils/fetchData';

export const metadata = {
    title: "ДВЦНО | Обучение",
    description: "Дальневосточный центр непрерывного образования",
};

const educationPages = [
    {
        id: 1,
        image: '/education/image-1.jpg',
        description: 'Дошкольное образование',
        link: '/pages/education',
        slug: 'doshkolnoe-obrazovanie',
    },
    {
        id: 2,
        image: '/education/image-2.jpg',
        description: 'Начальное общее образование',
        link: '/pages/education',
        slug: 'nachalnoe-obshchee-obrazovanie',
    },
    {
        id: 3,
        image: '/education/image-3.jpg',
        description: 'Основное общее образование',
        link: '/pages/education',
        slug: 'osnovnoe-obshchee-obrazovanie',
    },
    {
        id: 4,
        image: '/education/image-4.jpg',
        description: 'Среднее общее образование',
        link: '/pages/education',
        slug: 'srednee-obshchee-obrazovanie',
    },
    {
        id: 5,
        image: '/education/image-5.jpg',
        description: 'Профессиональное обучение',
        link: '/pages/education',
        slug: 'professionalnoe-obuchenie',
    },
    {
        id: 6,
        image: '/education/image-6.jpg',
        description: 'Дополнительное образование',
        link: '/pages/education',
        slug: 'dopolnitelnoe-obrazovanie',
    },
];

const fetchData = async () => {
    try {
        const res = await fetch(`https://inside-dev.ru/api/education/`, {
            next: { revalidate: 10 }
        });
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