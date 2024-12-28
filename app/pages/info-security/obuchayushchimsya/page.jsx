import { Breadcrumbs, DocumentComponent } from "@/app/components";
import styles from "../info.module.css";
import Image from "next/image";

export const metadata = {
    title: "ДВЦНО | Обучающимся",
    description: "Обучающимся",
};
const documentDataHero = [
    {
        title: "Памятка для обучающихся об информационной безопасности детей",
        link: "/",
    },
    {
        title: "Памятки для учащихся",
        link: "/",
    },
];
const documentData2 = [
    {
        title: "Справочник по детской безопасности в Интернете https://safety.google/families/",
        link: "/",
    },
    {
        title: "Фонд Развития Интернет https://safety.google/families/",
        link: "/",
    },
    {
        title: "Центр безопасного Интернета в России http://www.fid.su/",
        link: "/",
    },
    {
        title: "Линия помощи «Дети Онлайн» http://detionline.com/",
        link: "/",
    },
    {
        title: "Горячая линия Центра безопасного Интернета https://rocit.ru/hotline",
        link: "/",
    },
];

const helpCardData1 = '<p>Горячая линия Центра защиты прав и интересов детей по оказанию психолого-педагогической, методической и консультативной помощи родителям(законным представителям): <strong>8 (800) 555-89-81</strong>;</p><p>Телефон доверия для детей, подростков и их родителей: <strong>8 (800) 2000-122;</strong></p><p>Московская служба психологической помощи населению: <strong>8 (499) 173-09-09;</strong></p><p>Телефон неотложной психологической помощи(г.Москва):</p><ul><li>051 — с городского телефона или 8(495) 051 — с мобильного телефона;</li><li>Неотложная психологическая помощь Государственного бюджетного учреждения города Москвы «Городской психолого - педагогический центр Департамента образования и науки города Москвы»: 8(800) 250 - 11 - 91;</li></ul><p>В экстренной ситуации:</p><ul><li>экстренная медико - психологическая помощь: 8(499) 791 - 20 - 50;</li><li>телефон горячей линии психологической помощи МЧС России: 8(495) 989 - 50 - 50;</li><li>Горячая линия «Ребенок в опасности» Следственного комитета РФ: 8 - 800 - 200 - 19 - 10</li></ul>';
const helpCardData2 = '<p><a href="https://мырядом.онлайн" target="_blank" rel="noopener noreferrer">мырядом.онлайн</a></p><p><a href="https://ПомощьРядом.рф (pomoschryadom.ru)" target="_blank" rel="noopener noreferrer">ПомощьРядом.рф (pomoschryadom.ru)</a></p><p><a href="https://твоятерритория.онлайн" target="_blank" rel="noopener noreferrer">твоятерритория.онлайн</a>/<p><p>Обратиться в организацию, которая специализируется на теме травли в школе: АНО БО «Журавлик» (программа «Травли NET»): <a href="tel:+79639952999">8 (963) 995 29 99</a><a href="mailto:info@zhuravlik.org">info@zhuravlik.org</a></p><p>Обратиться в центры психолого-педагогической, медицинской и социальной помощи (ППМС-центры). Ближайший к вам можно найти по ссылке: <a href="https://https://ovzrf.ru/navigator/" target="_blank" rel="noopener noreferrer">https://ovzrf.ru/navigator/</a></p>';

export default function Page() {

    return (
        <>
            <div className="container">
                <Breadcrumbs
                    slug={'Информационная безопасность'}
                    link={'pages/info-security'}
                    title={'Обучающимся'}
                />

                <section className={`${styles.hero} ${styles.hero_parents} ${styles.hero_student} section-dsv`}>
                    <h1 className={`title title-white`}>Обучающимся</h1>

                    <div className={styles.document_wrapper}>
                        <ul>
                            {documentDataHero.map((item, index) => (
                                <li key={index}>
                                    <DocumentComponent title={item.title} link={item.link} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>

            <section className={styles.recommended}>
                <div className="container">
                    <div className={styles.title_wrapper}>
                        <h2 className={`title ${styles.half_title} title-black`}>Рекомендуемые интернет-ресурсы</h2>
                        <Image
                            src="/info-security/image-7.svg"
                            alt="Изображение"
                            width={121}
                            height={121}
                            className="dsv-image"
                        />
                    </div>
                    <div className={styles.page_content}>
                        <p className="title-black">для несовершеннолетних, родителей (законных представителей) несовершеннолетних, наглядных информационных материалов по безопасному использованию сети «Интернет»</p>
                    </div>

                    <ul className={styles.document_list}>
                        {documentData2.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.link} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <div className="container">
                <div className={styles.image_wrapper}>
                    <Image
                        src="/info-security/student-1.jpg"
                        alt="Изображение"
                        width={1442}
                        height={1189}
                        className="dsv-image"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                    />
                </div>
                <div className={styles.image_wrapper}>
                    <Image
                        src="/info-security/student-2.jpg"
                        alt="Изображение"
                        width={1442}
                        height={1189}
                        className="dsv-image"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                    />
                </div>
                <div className={styles.image_wrapper}>
                    <Image
                        src="/info-security/student-3.jpg"
                        alt="Изображение"
                        width={1442}
                        height={1189}
                        className="dsv-image"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MiIgaGVpZ2h0PSIxMTg5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2MiIC8+PC9zdmc+" priority
                    />
                </div>
            </div>

        </>
    )
}