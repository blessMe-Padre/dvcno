import { Breadcrumbs, DocumentComponent } from "@/app/components";
import styles from "../style.module.css";
import Image from "next/image";

export const metadata = {
    title: "ДВЦНО | ОГЭ",
    description: "ОГЭ",
};

const links = [
    {
        title: 'ОГЭ',
        link: '/pages/gia/oge'
    },
    {
        title: 'ЕГЭ',
        link: '/pages/gia/ege'
    },
]


const documentData = [
    {
        title: "Сроки проведения",
        link: "/",
    },
    {
        title: "Расписание проведения ОГЭ и ГВЭ-9 в 2022 году",
        link: "/",
    },
    {
        title: "Приказы об утверждении расписания ОГЭ и ГВЭ-9",
        link: "/",
    },
];
const documentData2 = [
    {
        title: "http://obrnadzor.gov.ru/gia/gia-9/poleznaya-informacziya/",
        link: "/",
    },
    {
        title: "http://obrnadzor.gov.ru/gia/gia-11/poleznaya-informacziya/",
        link: "/",
    },
    {
        title: "https://fipi.ru/ege",
        link: "/",
    },
    {
        title: "https://fipi.ru/oge",
        link: "/",
    },
];


export default function Page() {
    return (
        <div className="container">
            <Breadcrumbs
                slug={'ГИА'}
                link={'pages/gia'}
                title={'ОГЭ'}
            />

            <section className={`${styles.hero} ${styles.hero_oge}`}>
                <div className={styles.title_wrapper}>
                    <h2 className={`title ${styles.half_title}`}>ОГЭ</h2>
                    <Image
                        src="/gia/image-3.svg"
                        alt="Изображение"
                        width={125}
                        height={125}
                        className={`${styles.title_img} dsv-image`}
                    />
                </div>

                <ul className={styles.hero_list}>
                    {documentData.map((item, index) => (
                        <li key={index}>
                            <DocumentComponent title={item.title} link={item.link} />
                        </li>
                    ))}
                </ul>

            </section>

            <section className={styles.method}>
                <div className={styles.title_wrapper}>
                    <h2 className={`title ${styles.half_title}`}>Памятка</h2>
                    <Image
                        src="/gia/image-2.svg"
                        alt="Изображение"
                        width={227}
                        height={122}
                        className="dsv-image"
                    />
                </div>

                <ul className={styles.document_list}>
                    {documentData.map((item, index) => (
                        <li key={index}>
                            <DocumentComponent title={item.title} link={item.link} />
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.use_info}>
                <h2 className={`title ${styles.half_title} title-white`}>Полезная информация</h2>
                <svg width="302" height="18" viewBox="0 0 302 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 14.1279C49.5326 16.1054 146.926 17.0941 167.297 14.1279C191.215 10.6452 119.677 5.51891 159.148 3.00441C199.891 0.408926 247.617 3.00441 300 8.93693" stroke="#433C8C" strokeWidth="3" strokeLinecap="round" />
                </svg>
            </section>

            <ul className={styles.document_list}>
                {documentData.map((item, index) => (
                    <li key={index}>
                        <DocumentComponent title={item.title} link={item.link} />
                    </li>
                ))}
            </ul>

        </div>
    )
}