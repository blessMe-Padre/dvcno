import { Breadcrumbs, DocumentComponent } from "@/app/components";
import styles from "../info.module.css";
import Image from "next/image";

export const metadata = {
    title: "ДВЦНО | Родителям",
    description: "Родителям",
};
const documentDataHero = [
    {
        title: "Памятка для родителей по информационной безопасности детей",
        link: "/",
    },
    {
        title: "Памятка для родителей Безопасности ребенка в Интернете",
        link: "/",
    },
    {
        title: "Памятка для родителей «Чтобы помочь своим детям вы должны знать…»",
        link: "/",
    },
    {
        title: "Памятки для родителей",
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
const documentData = [
    {
        title: "Наглядно-методическое пособие для родителей «Формула семьи»",
        link: "/",
    },
    {
        title: "Видео про безопасность в интернете в рамках акции",
        link: "/",
    },
    {
        title: "Статья об осознанном родительстве",
        link: "/",
    },
    {
        title: "Блог «Лаборатории Касперского»Онлайн-родительское собрание «Пространство социальных сетей − без риска для детей» (Сценарий ипрезентация)",
        link: "/",
    },
    {
        title: "По безопасному использованию сети«Интернет» в целях предотвращения преступлений, совершаемых с ееиспользованием, как самими несовершеннолетними, так и в отношении них от29.12.2021 № б/н",
        link: "/",
    },
];

const helpCardData1 = '<p>Горячая линия Центра защиты прав и интересов детей по оказанию психолого-педагогической, методической и консультативной помощи родителям(законным представителям): <strong>8 (800) 555-89-81</strong>;</p><p>Телефон доверия для детей, подростков и их родителей: <strong>8 (800) 2000-122;</strong></p><p>Московская служба психологической помощи населению: <strong>8 (499) 173-09-09;</strong></p><p>Телефон неотложной психологической помощи(г.Москва):</p><ul><li>051 — с городского телефона или 8(495) 051 — с мобильного телефона;</li><li>Неотложная психологическая помощь Государственного бюджетного учреждения города Москвы «Городской психолого - педагогический центр Департамента образования и науки города Москвы»: 8(800) 250 - 11 - 91;</li></ul><p>В экстренной ситуации:</p><ul><li>экстренная медико - психологическая помощь: 8(499) 791 - 20 - 50;</li><li>телефон горячей линии психологической помощи МЧС России: 8(495) 989 - 50 - 50;</li><li>Горячая линия «Ребенок в опасности» Следственного комитета РФ: 8 - 800 - 200 - 19 - 10</li></ul>';

const helpCardData2 = '<p><a href="https://мырядом.онлайн" target="_blank" rel="noopener noreferrer">мырядом.онлайн</a></p><p><a href="https://ПомощьРядом.рф (pomoschryadom.ru)" target="_blank" rel="noopener noreferrer">ПомощьРядом.рф (pomoschryadom.ru)</a></p><p><a href="https://твоятерритория.онлайн" target="_blank" rel="noopener noreferrer">твоятерритория.онлайн</a>/<p><p>Обратиться в организацию, которая специализируется на теме травли в школе: АНО БО «Журавлик» (программа «Травли NET»): <a href="tel:+79639952999">8 (963) 995 29 99</a><a href="mailto:info@zhuravlik.org">info@zhuravlik.org</a></p><p>Обратиться в центры психолого-педагогической, медицинской и социальной помощи (ППМС-центры). Ближайший к вам можно найти по ссылке: <a href="https://https://ovzrf.ru/navigator/" target="_blank" rel="noopener noreferrer">https://ovzrf.ru/navigator/</a></p>';

const sanitizedContent1 = helpCardData1 || '';
const sanitizedContent2 = helpCardData2 || '';

export default function Page() {

    return (
        <>
            <div className="container">
                <Breadcrumbs
                    slug={'Информационная безопасность'}
                    link={'pages/info-security'}
                    title={'Родителям'}
                />

                <section className={`${styles.hero} ${styles.hero_parents}`}>
                    <h1 className={`title title-white`}>Родителям</h1>

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

                <section className={styles.method}>
                    <div className={styles.title_wrapper}>
                        <h2 className={`title ${styles.half_title}`}>Методические рекомендации родителям</h2>
                        <Image
                            src="/info-security/image-6.svg"
                            alt="Изображение"
                            width={121}
                            height={121}
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
                <section>
                    <div className={styles.title_wrapper}>
                        <h2 className={`title ${styles.half_title}`}>КУДА ОБРАТИТЬСЯ, ЕСЛИ НУЖНА ПОМОЩЬ?</h2>
                        <Image
                            src="/info-security/image-8.svg"
                            alt="Изображение"
                            width={121}
                            height={121}
                            className="dsv-image"
                        />
                    </div>
                    <div className={styles.page_content}>
                        <p>Просить помощи у специалистов, если не справляетесь сами – нормально. Вы можете:</p>
                    </div>

                    <ul className={styles.help_list}>
                        <li className={styles.help_item}>
                            <div className={styles.help_count}>01</div>
                            <h3 className={styles.help_title}>Позвонить на горячие линии:</h3>
                            <div className={styles.help_content} dangerouslySetInnerHTML={{ __html: sanitizedContent1 }}></div>
                        </li>
                        <li className={`${styles.help_item} ${styles.help_item_bg}`}>
                            <div className={`${styles.help_count} ${styles.help_count_green}`}>02</div>
                            <h3 className={styles.help_title}>Обратиться к специалисту на сайте психологической помощи подросткам:</h3>
                            <div className={styles.help_content} dangerouslySetInnerHTML={{ __html: sanitizedContent2 }}></div>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}