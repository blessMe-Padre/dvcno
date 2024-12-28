import { Breadcrumbs, DocumentComponent } from "@/app/components";
import styles from "../style.module.css";
import Image from "next/image";

export const metadata = {
    title: "ДВЦНО | ОГЭ",
    description: "ОГЭ",
};

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
        title: "Расписание проведения ЕГЭ и ГВЭ-11 в 2022 году",
        link: "/",
    },
    {
        title: "Приказы об утверждении расписания ЕГЭ и ГВЭ-11",
        link: "/",
    },
    {
        title: "Приказ ГВЭ-9 и ГВЭ-11",
        link: "/",
    },
];
const documentData3 = [
    {
        title: "Сроки проведения итогового собеседования по русскому языку",
        link: "/",
    },
];
const documentData4 = [
    {
        title: "Расписание проведения ЕГЭ и ГВЭ-11 в 2022 году",
        link: "/",
    },
    {
        title: "Приказы об утверждении расписания ЕГЭ и ГВЭ-11",
        link: "/",
    },
    {
        title: "Приказ ГВЭ-9 и ГВЭ-11",
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

            <section className={`${styles.hero} ${styles.hero_oge} section-dsv`}>
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
                <div className={styles.title_wrapper_between}>
                    <h2 className={`title ${styles.half_title}`}>информация</h2>
                    <Image
                        src="/gia/image-4.svg"
                        alt="Изображение"
                        width={146}
                        height={78}
                        className="dsv-image"
                    />
                </div>

                <ul className={styles.document_list}>
                    {documentData2.map((item, index) => (
                        <li key={index}>
                            <DocumentComponent title={item.title} link={item.link} />
                        </li>
                    ))}
                </ul>
            </section>

            <div className={styles.image_wrapper}>
                <Image
                    src="/gia/image-5.jpg"
                    alt="Изображение"
                    width={1442}
                    height={960}
                    className="dsv-image"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                />
            </div>

            <section className={`${styles.hero} ${styles.hero_total} section-dsv`}>
                <div className={styles.title_wrapper}>
                    <h2 className={`title ${styles.half_title} title-white`}>Итоговое собеседование</h2>
                    <Image
                        src="/gia/image-5.svg"
                        alt="Изображение"
                        width={125}
                        height={125}
                        className={`${styles.title_img} dsv-image`}
                    />
                </div>

                <ul className={styles.hero_list}>
                    {documentData3.map((item, index) => (
                        <li key={index}>
                            <DocumentComponent title={item.title} link={item.link} />
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.method}>
                <div className={styles.title_wrapper_between}>
                    <h2 className={`title ${styles.half_title}`}>Материалы для подготовки к ОГЭ</h2>
                    <Image
                        src="/gia/image-4.svg"
                        alt="Изображение"
                        width={146}
                        height={78}
                        className="dsv-image"
                    />
                </div>

                <ul className={styles.document_list}>
                    {documentData4.map((item, index) => (
                        <li key={index}>
                            <DocumentComponent title={item.title} link={item.link} />
                        </li>
                    ))}
                </ul>
            </section>

        </div>
    )
}