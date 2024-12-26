import { Breadcrumbs, DocumentComponent } from "@/app/components";
import styles from "../info.module.css";
import Image from "next/image";

export const metadata = {
    title: "ДВЦНО | Педагогам",
    description: "Педагогам",
};

const documentData2 = [
    {
        title: "Твоя психологическая безопасность (Памятка)",
        link: "/",
    },
    {
        title: "Как защитить ребенка от интернет-рисков (Памятка)»",
        link: "/",
    },
    {
        title: "Родителям о психологической безопасности детей и подростков (Памятка)",
        link: "/",
    },
    {
        title: "Программа экстренной и пролонгированной психологической помощи детям,оказавшимся в трудной жизненной ситуации»",
        link: "/",
    },
    {
        title: "Методические комплексы для психологического сопровождения обучающихсяобщеобразовательных организаций, в том числе программы развитиясоциальноэмоциональных навыков учащихся",
        link: "/",
    },
    {
        title: "Профилактика интернет-рисков: методические рекомендации для педагогов и родителейПсихологическая безопасность детей и подростков в образовательной среде:рекомендации для руководителей, педагогов, психологовобразовательных организацийИнформационно-методические материалы по профилактике криминализацииобразовательной сред",
        link: "/",
    },
    {
        title: "Применение медиативных и восстановительных технологий в сферепредупреждения деструктивных проявлений среди несовершеннолетнихРабота с родителями обучающихся образовательных организаций по проведениюпрофилактической деятельности с несовершеннолетними, склонными к суицидальному поведению. Методические рекомендации для педагогов-психологов и социальных педагоговобразовательных организацийДополнительная общеразвивающая программа интерактивных занятий длядетей, подростков и молодежи по вопросам ненасильственных методов разрешения споров и конфликтов «Курс юногопереговорщика»",
        link: "/",
    },
];
const documentData = [
    {
        title: "Методические рекомендации для педагогов по оценке информационной безопасности информационной продукции",
        link: "/",
    },
    {
        title: "Методические рекомендации «Информационная безопасность детей»",
        link: "/",
    },
    {
        title: "Методические рекомендации по работе с родителями старших подростков по вопросам информационной безопасности детей",
        link: "/",
    },
    {
        title: "Письмо Министерства образования и науки РФ от 03.10.2017 г. N 09-1995 «Методические рекомендации по проведению мероприятий по повышению правовой грамотности детей, родителей (законных представителей) и педагогических работников, участвующих в воспитании детей»",
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
        <div className="container">
            <Breadcrumbs
                slug={'Информационная безопасность'}
                link={'pages/info-security'}
                title={'Педагогам'}
            />

            {/* <section className={styles.hero}>
                <h1 className={`title title-black`}>Педагогам</h1>

                <div className={styles.document_wrapper}>
                    <DocumentComponent title={'Памятка для педагогических работников по обеспечению информационной безопасности обучающихся'} />
                </div>
            </section>

            <section className={styles.method}>
                <div className={styles.title_wrapper}>
                    <h2 className={`title ${styles.half_title}`}>Методические рекомендации для педагогических работников</h2>
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

            <section className={styles.recommended}>
                <div className={styles.title_wrapper}>
                    <h2 className={`title ${styles.half_title}`}>Рекомендуемые интернет-ресурсы</h2>
                    <Image
                        src="/info-security/image-7.svg"
                        alt="Изображение"
                        width={121}
                        height={121}
                        className="dsv-image"
                    />
                </div>
                <div className={styles.page_content}>
                    <p>для несовершеннолетних, родителей (законных представителей) несовершеннолетних, наглядных информационных материалов по безопасному использованию сети «Интернет»</p>
                </div>

                <ul className={styles.document_list}>
                    {documentData2.map((item, index) => (
                        <li key={index}>
                            <DocumentComponent title={item.title} link={item.link} />
                        </li>
                    ))}
                </ul>
            </section> */}

            <section className={styles.recommended}>
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
                    <li className={styles.help_item}>
                        <div className={styles.help_count}>02</div>
                        <h3 className={styles.help_title}>Обратиться к специалисту на сайте психологической помощи подросткам:</h3>
                        <div className={styles.help_content} dangerouslySetInnerHTML={{ __html: sanitizedContent2 }}></div>
                    </li>
                </ul>
            </section>
        </div>
    )
}