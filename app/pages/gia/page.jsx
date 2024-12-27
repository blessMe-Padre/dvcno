import { Breadcrumbs, DocumentComponent } from "@/app/components";
import styles from "./style.module.css";
import Image from "next/image";

export const metadata = {
    title: "ДВЦНО | ГИА",
    description: "ГИА",
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

const pageTextData = ' <p>Совместными приказами Минпросвещения России и Рособрнадзора утверждено расписание единого государственного экзамена (ЕГЭ), основного государственного экзамена (ОГЭ) и государственного выпускного экзамена (ГВЭ) на 2022 год.</p><p>Проведение ЕГЭ разделено на три периода: досрочный (с 21 марта по 15 апреля), основной (с 26 мая по 2 июля) и дополнительный (5-20 сентября).</p>                <p>Основной период ЕГЭ-2022 начнется 26 мая с экзаменов по географии, литературе и химии. Проведение трех экзаменов разделено на два дня: ЕГЭ по русскому языку пройдет 30 и 31 мая, по информатике и ИКТ – 20 и 21 июня, устная часть ЕГЭ по иностранным языкам – 16 и 17 июня.</p>                <p>ЕГЭ по профильной и базовой математике также пройдет в разные дни (2 и 3 июня соответственно). 6 июня в основной период ЕГЭ пройдут экзамены по истории и физике, 9 июня – по обществознанию, 14 июня – по биологии и письменная часть ЕГЭ по иностранным языкам. С 23 июня по 2 июля в расписании предусмотрены резервные дни для сдачи ЕГЭ по всем предметам.</p>                <p>В дополнительный период в сентябре ЕГЭ пройдет только по обязательным предметам (русскому языку и базовой математике) для тех выпускников, которые не получили аттестат.</p>                <p>Проведение ОГЭ также разделено на три периода: досрочный (с 21 апреля по 17 мая), основной (с 20 мая по 2 июля) и дополнительный (с 5 по 15 сентября).</p>';

const documentData = [
    {
        title: "Как участвовать в ГИА-11",
        link: "/",
    },
    {
        title: "Памятка о правилах проведения ГИА в 2022 году",
        link: "/",
    },
    {
        title: "Как участвовать в ГИА-9",
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
    const sanitizedContent = pageTextData || '';

    return (
        <div className="container">
            <Breadcrumbs title={"ГИА"} />

            <h1 className={`title ${styles.half_title}`}>ГИА</h1>

            <ul className={styles.link_wrapper}>
                {links && links?.map((link, index) => (
                    <li key={index}>
                        <a href={link.link} className={styles.link}>
                            <span>{link.title}</span>
                            <Image
                                src="/info-security/arrow-icon.svg"
                                alt="Изображение"
                                width={22}
                                height={22}
                                className="dsv-image"
                            />
                        </a>
                    </li>
                ))}
            </ul>

            <section className={styles.hero}>
                <div className={styles.title_wrapper}>
                    <h2 className={`title ${styles.half_title}`}>ГИА</h2>
                    <Image
                        src="/gia/image-1.svg"
                        alt="Изображение"
                        width={125}
                        height={125}
                        className={`${styles.title_img} dsv-image`}
                    />
                </div>

                <div className={styles.subtitle}>
                    <p>Утверждено расписание ЕГЭ, ОГЭ и ГВЭ на 2022 год</p>
                </div>

                <div className={styles.page_content} dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
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