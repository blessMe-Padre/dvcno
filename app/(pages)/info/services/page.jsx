import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";


import { DocumentComponent } from "@/app/components";

export const metadata = {
    title: "ДВЦНО | Платные образовательные услуги",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {


    const data_order = [
        {
            'title': 'Порядок оказания платных образовательных услуг',
            'link': '/'
        }
    ]

    const data_price = [
        {
            'title': 'Начальная школа – детский сад «Классическая европейская прогимназия» (НШДС "КЕП")',
            'link': '/'
         },
        {
            'title': 'Международная лингвистическая школа (МЛШ)',
            'link': '/'
         },
        {
            'title': '«Общеобразовательная школа для одарённых детей им. Н.Н. Дубинина» (ШОД)',
            'link': '/'
         },
        {
            'title': 'Начальная общеобразовательная школа-детский сад "Восточная школа" (НОШДС «ВШ»)',
            'link': '/'
         },
        {
            'title': 'Академический колледж (АК)',
            'link': '/'
         },
         
        {
            'title': 'Физкультурно-оздоровительный комплекс с бассейном «Лига спорта» (ФОК «Лига спорта»)',
            'link': '/'
         },
         

    ]

    const data_template = [
        {
            'title': 'Шаблоны договоров АК на 2023-2024 учебные года',
            'link': '/'
         },
        {
            'title': 'Шаблоны договоров КЕП на 2023-2024 учебные года',
            'link': '/'
         },
        {
            'title': 'Шаблоны договоров ШОД на 2023-2024 учебные года',
            'link': '/'
         },
        {
            'title': 'Шаблоны договоров ВШ на 2023-2024 учебные года',
            'link': '/'
         },
        {
            'title': 'Шаблоны договоров МЛШ на 2023-2024 учебные года',
            'link': '/'
         },
         
        {
            'title': 'Физкультурно-оздоровительный комплекс с бассейном «Лига спорта» (ФОК «Лига спорта»)',
            'link': '/'
         },
         

    ]

    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs
                        slug={'Платные образовательные услуги'}
                        link={'pages/info'}
                        title={'Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда.'}
                        />
                    
                    <h2 className={`title ${styles.title}`}>Платные образовательные услуги</h2>

                
                    <div>
                        <ul className={styles.document_list}>
                            {data_order.map((item, index) => (
                                <li key={index}>
                                    <DocumentComponent title={item.title} link={item.link} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <h2 className={`title ${styles.title}`}>Стоимость обучения по образовательным программам</h2>

                
                    <div>
                        <ul className={styles.document_list}>
                            {data_price.map((item, index) => (
                                <li key={index}>
                                    <DocumentComponent title={item.title} link={item.link} />
                                </li>
                            ))}
                        </ul>
                    </div>    
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <h2 className={`title ${styles.title}`}>Шаблоны договоров об оказании платных образовательных услуг 2020-2024 учебные года</h2>

                
                    <div>
                        <ul className={styles.document_list}>
                            {data_template.map((item, index) => (
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