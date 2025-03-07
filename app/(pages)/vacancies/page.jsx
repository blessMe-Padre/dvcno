import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import decor2 from '@/public/vacancies/decor.svg';
import arrow from '@/public/vacancies/arrow.svg';
import Image from "next/image";

export const metadata = {
    title: "ДВЦНО | Вакансии",
    description: "Дальневосточный центр непрерывного образования",
};

export default async function Page() {

    const data_vacancies = [
        {
            'job': 'Специалист по безопасности',
            'title': 'АНПОО "ДВЦНО"',
            'address': 'г. Владивосток, улица Гоголя 41',
            'price': '150 000₽',
            'link': '/'
        },

        {
            'job': 'Специалист по безопасности',
            'title': 'АНПОО "ДВЦНО"',
            'address': 'г. Владивосток, улица Гоголя 41',
            'price': '150 000₽',
            'link': '/'
        },

        {
            'job': 'Специалист по безопасности',
            'title': 'АНПОО "ДВЦНО"',
            'address': 'г. Владивосток, улица Гоголя 41',
            'price': '150 000₽',
            'link': '/'
        },
    ]

    return (
        <section className={styles.section}>
            <div className="container">
                <Breadcrumbs title={'Вакансии'} />
                    <h2 className={`title ${styles.title}`}>Вакансии</h2>
                
                    <ul className={styles.vacancies_list}>
                        {data_vacancies.map((item, index) => (
                            <li key={index} className={styles.vacancies_item}>
                                <div className="relative">
                                    <p className={styles.item_job}>{item.job}</p>
                                    <Image
                                        className={styles.decor2}
                                        src={decor2}
                                        width={50}
                                        height={50}
                                        alt=""
                                    />
                                </div>

                                <div className={styles.vacancies_item_info}>
                                    <p className={styles.vacancies_item_info_name}>{item.title}</p>
                                    <p className={styles.vacancies_item_info_address}>{item.address}</p>
                                </div>

                                <div>
                                    <p className={styles.vacancies_item_info_price}>{item.price}</p>
                                </div>

                                <div className={styles.button_wrapper}>
                                    <button className={styles.button}>
                                        <p>Откликнуться</p>
                                        <Image
                                            src={arrow}
                                            width={25}
                                            height={25}
                                            alt=""
                                            />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

            </div>
        </section>
    )
}