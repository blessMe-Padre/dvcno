import { Breadcrumbs } from "@/app/components";
import styles from "./info.module.css";
import Image from "next/image";

export const metadata = {
    title: "ДВЦНО | Информационная безопасность",
    description: "Информационная безопасность",
};

const links = [
    {
        title: 'Локальные акты',
        link: 'lokalnye-akty'
    },
    {
        title: 'Нормативное регулирование',
        link: 'normativnoe-regulirovanie'
    },
    {
        title: 'Педагогам',
        link: 'pedagogam'
    },
    {
        title: 'Родителям',
        link: 'roditelyam'
    },
    {
        title: 'Обучающимся',
        link: 'obuchayushchimsya'
    },
    {
        title: 'Детские безопасные сайты',
        link: 'detskie-bezopasnye-sajty'
    },

]

const pageTextData = '<p>На сайте федерального государственного бюджетного научного учреждения "Центр защиты прав и интересов детей" Минобрнауки России организована работа по оказанию консультативной помощи подросткам и родителям (законным представителям) в области информационной безопасности в сети "Интернет" "Твой безопасный кибермаршрут".</p><p>В письме Министерства образования и науки РФ от 14 мая 2018 г. N 08-1184 "О направлении информации" предлагаются методические рекомендации о размещении на информационных стендах, официальных Интернет-сайтах и других информационных ресурсах общеобразовательных организаций и органов, осуществляющихся управление в сфере образования, информации о безопасном поведении и использовании сети "Интернет".</p><p>Методические рекомендации направлены на качественное повышение уровня информационной деятельности общеобразовательных организаций и органов, осуществляющих управление в сфере образования, в части информирования учащихся, их родителей (законных представителей) и педагогических работников об основных аспектах информационной безопасности.</p><p>В связи с проблемами информационной безопасности обучающихся рекомендуем педагогам и родителям (законным представителям) ознакомиться с Федеральнымсписком запрещённых экстремистских материалов, опубликованных на официальном сайте Министерства юстиции Российской Федерации.</p>'

export default function Page() {
    const sanitizedContent = pageTextData || '';

    return (
        <div className="container">
            <Breadcrumbs title={"Информационная безопасность"} />

            <div className={styles.title_wrapper}>
                <h2 className={`title ${styles.half_title}`}>Информационная безопасность</h2>
                <Image
                    src="/info-security/image-1.svg"
                    alt="Изображение"
                    width={125}
                    height={125}
                    className="dsv-image"
                />
            </div>

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

            <div className={styles.page_content} dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>

        </div>
    )
}