import Card from "@/app/components/Cards/Card/Card";
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";


export const metadata = {
    title: "ДВЦНО | Международное сотрудничество",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {


    const educationPages = [
    {
        id: 1,
        image: '/education/image-1.jpg',
        description: 'Международная лингвистическая школа (МЛШ)',
        link: '/pages/education',
        slug: 'doshkolnoe-obrazovanie',
    },
    ];

    return (
        <>
            <section className={styles.section}> 
                <div className="container">
                    <Breadcrumbs
                        slug={'Сведения об образовательной организации'}
                        link={'pages/info'}
                        title={'Международное сотрудничество.'}
                    />
                    <h2 className={`title ${styles.title}`}>Международное сотрудничество.</h2>

                    <p className={styles.subtitle}>Структурные подразделения АНПОО «ДВЦНО» АК, НОШДС «ВШ», НШДС «КЕП», ШИОД не ведут деятельность в сфере международного сотрудничества.</p>
                    <ul className={styles.list}>
                        {educationPages && educationPages.length > 0 ? (
                            educationPages.map((item) => (
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
            </section>

        </>
    )
}