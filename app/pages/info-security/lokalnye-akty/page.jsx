import { Breadcrumbs, DocumentComponent } from "@/app/components";
import styles from "../info.module.css";
import Image from "next/image";

export const metadata = {
    title: "ДВЦНО | Локальные акты",
    description: "Локальные акты",
};

const documentData = [
    {
        title: "Политика обработки персональных данных в АНПОО ДВЦНО_ЭЦП",
        link: "/",
    },
    {
        title: "Порядок посещения мероприятий, не предусмотренных учебным планом",
        link: "/",
    },
    {
        title: "Порядок посещения мероприятий, не предусмотренных учебным планом подпись",
        link: "/",
    },
    {
        title: "Положение о порядке и условиях допуска обучающихся на зрелищные мероприятия",
        link: "/",
    },
    {
        title: "Положение о порядке и условиях допуска обучающихся на зрелищные мероприятия подпись",
        link: "/",
    },
    {
        title: "Положение об обработке персональных данных обучающихся и третьих лиц",
        link: "/",
    },
    {
        title: "Положение о защите, хранении, обработке и передаче персональных данных работников АНПОО ДВЦНО",
        link: "/",
    },
    {
        title: "Положение об обработке персональных данных обучающихся и третьих лиц подпись",
        link: "/",
    },
]


export default function Page() {

    return (
        <div className="container">
            <Breadcrumbs
                slug={'Информационная безопасность'}
                link={'pages/info-security'}
                title={'Локальные акты'}
            />

            <div className={styles.title_wrapper}>
                <h2 className={`title ${styles.half_title}`}>Локальные акты</h2>
                <Image
                    src="/info-security/image-2.svg"
                    alt="Изображение"
                    width={125}
                    height={125}
                    className="dsv-image"
                />
            </div>

            <div className={styles.page_content}>
                <p>Персональные данные</p>
            </div>

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