import Card from "@/app/components/Cards/Card/Card";
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";


import { DocumentComponent } from "@/app/components";

export const metadata = {
    title: "ДВЦНО | Организация питания в образовательной организации",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {


    const educationPages = [
        {
            id: 1,
            image: '/education/image-1.jpg',
            description: 'Начальная школа – детский сад «Классическая европейская прогимназия» (НШДС "КЕП")',
            link: '/education',
            slug: 'doshkolnoe-obrazovanie',
        },
        {
            id: 2,
            image: '/education/image-2.jpg',
            description: 'Начальная общеобразовательная школа-детский сад "Восточная школа" (НОШДС «ВШ»)',
            link: '/education',
            slug: 'nachalnoe-obshchee-obrazovanie',
        },
        {
            id: 3,
            image: '/education/image-3.jpg',
            description: 'Международная лингвистическая школа (МЛШ)',
            link: '/education',
            slug: 'osnovnoe-obshchee-obrazovanie',
        },
        {
            id: 4,
            image: '/education/image-4.jpg',
            description: 'Академический колледж (АК)',
            link: '/education',
            slug: 'srednee-obshchee-obrazovanie',
        },
        {
            id: 5,
            image: '/education/image-5.jpg',
            description: '«Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина» (ШОД)',
            link: '/education',
            slug: 'professionalnoe-obuchenie',
        },
        {
            id: 6,
            image: '/education/image-6.jpg',
            description: 'Физкультурно-оздоровительный комплекс с бассейном «Лига спорта» (ФОК «Лига спорта»)',
            link: '/education',
            slug: 'dopolnitelnoe-obrazovanie',
        },
    ];

    const data_documents = [
        {
            'title': 'Устав ДВЦНО',
            'link': '/'
        },

        {
            'title': 'Свидетельств о государственной аккредитации АНПОО ДВЦНО',
            'link': '/'
        },

        {
            'title': 'Свидетельство о постановке на налоговый учет',
            'link': '/'
        },

        {
            'title': 'Правила внутреннего распорядка обучающихся',
            'link': '/'
        },

        {
            'title': 'Правила внутреннего трудового распорядка',
            'link': '/'
        },

        {
            'title': 'Лицензия АНПОО ДВЦНО_Выписка из реестра лицензий',
            'link': '/'
        },
    ]


    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs
                        slug={'Сведения об образовательной организации'}
                        link={'info'}
                        title={'Организация питания в образовательной организации.'}
                    />
                    <h2 className={`title ${styles.title}`}>Организация питания в образовательной организации.</h2>

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

            <section className={styles.section}>
                <div className="container">
                    <h2 className={`title ${styles.title}`}>Документы</h2>


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