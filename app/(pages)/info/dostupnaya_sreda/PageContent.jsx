'use client'
import Card from "@/app/components/Cards/Card/Card";
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import useLangStore from '@/app/store/languageStore';
import DocumentLinkComponent from "@/app/components/DocumentsLink/DocumentsLink";
import DocumentComponent from "@/app/components/Documents/Documents";

const languages = {
    ru: 'Доступная среда.',
    en: 'Accessible environment',
    ch: '無障礙環境'
};
const languages2 = {
    ru: 'Сведения об образовательной организации',
    en: 'Information about the educational organization',
    ch: '教學人員'
};

const PageContent = ({ data }) => {
    console.log(data);
    const { lang } = useLangStore();
    const educationPages = data?.sections?.section?.[0]?.content?.[lang];
    const electronic_libraries = data?.sections?.electronic_libraries;
    const accessible_environment = data?.sections?.accessible_environment;
    const agreement = data?.sections?.agreement;

    return (
        <div className="container">
            <Breadcrumbs
                slug={languages2[lang]}
                link={'info'}
                title={languages[lang]}
            />
            <h2 className={`title ${styles.title} ${styles.text_white}`}>
                {data?.sections?.title?.[0]?.content?.[lang]?.title ??
                    'Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда.'
                }
            </h2>

            <ul className={styles.list}>
                {educationPages && educationPages.length > 0 ? (
                    educationPages.map((item, index) => (
                        <li key={index}>
                            <Card
                                image={item.image}
                                description={item.title}
                                link={item.link}
                            />
                        </li>
                    ))
                ) : (
                    <p className="span-error-message">Данные отсутствуют.</p>
                )}
            </ul>

            <section className={styles.document_section}>
                <h2 className='title mb-30'>{electronic_libraries?.[0]?.content?.[lang]?.title ?? 'Электронные библиотеки и электронные образовательные ресурсы'}</h2>
                <h3 className={styles.document_section_subtitle}>{electronic_libraries?.[1]?.content?.[lang]?.title ?? 'Электронные библиотеки:'}</h3>
                <ul className={styles.document_list}>
                    {electronic_libraries?.[2]?.content?.[lang]?.map((item, index) => (
                        <li key={index}>
                            <DocumentLinkComponent title={item?.title} link={item?.link} />
                        </li>

                    ))}
                </ul>

                <h3 className={styles.document_section_subtitle}>{electronic_libraries?.[3]?.content?.[lang]?.title ?? 'Электронные библиотеки:'}</h3>
                <ul className={styles.document_list}>
                    {electronic_libraries?.[4]?.content?.[lang]?.map((item, index) => (
                        <li key={index}>
                            <DocumentLinkComponent title={item?.title} link={item?.link} />
                        </li>

                    ))}
                </ul>
                <h3 className={styles.document_section_subtitle}>{electronic_libraries?.[5]?.content?.[lang]?.title ?? 'Электронные библиотеки:'}</h3>
                <ul className={styles.document_list}>
                    {electronic_libraries?.[6]?.content?.[lang]?.map((item, index) => (
                        <li key={index}>
                            <DocumentLinkComponent title={item?.title} link={item?.link} />
                        </li>

                    ))}
                </ul>
                <h3 className={styles.document_section_subtitle}>{electronic_libraries?.[7]?.content?.[lang]?.title ?? 'Электронные библиотеки:'}</h3>
                <ul className={styles.document_list}>
                    {electronic_libraries?.[8]?.content?.[lang]?.map((item, index) => (
                        <li key={index}>
                            <DocumentLinkComponent title={item?.title} link={item?.link} />
                        </li>

                    ))}
                </ul>
            </section>

            <section className={styles.document_section}>
                <h2 className='title mb-30'>{accessible_environment?.[0]?.content?.[lang]?.title ?? 'Доступная среда:'}</h2>

                <ul className={styles.document_list}>
                    {accessible_environment?.[1]?.content?.[lang]?.map((item, index) => (
                        <li key={index} className={styles.document_item_sreda}>
                            {item.link ?
                                <a href={item?.link} target="_blank" rel="noopener noreferrer">{item?.title}</a>
                                :
                                <span>{item?.title}</span>}

                            <a href={process.env.NEXT_PUBLIC_API_SERVER + item?.document} download target="_blank">Паспорт доступности</a>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={styles.document_section}>
                <h2 className='title mb-30'>{agreement?.[0]?.content?.[lang]?.title ?? 'Договор о предоставлении телекоммуникационных услуг'}</h2>

                <ul className={styles.document_list}>
                    {agreement?.[1]?.content?.[lang]?.list?.map((item, index) => (
                        <li key={index}>
                            <DocumentComponent title={item?.title} link={item?.document} />
                        </li>

                    ))}
                </ul>
            </section>
        </div>
    )
}

export default PageContent