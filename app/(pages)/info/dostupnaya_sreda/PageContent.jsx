'use client'
import Card from "@/app/components/Cards/Card/Card";
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import useLangStore from '@/app/store/languageStore';

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
    const { lang } = useLangStore();
    const educationPages = data?.sections?.section?.[0]?.content?.[lang];

    return (
        <div className="container">
            <Breadcrumbs
                slug={languages2[lang]}
                link={'info'}
                title={languages[lang]}
            />
            <h2 className={`title ${styles.title} ${styles.text_white}`}>
                {data?.sections?.title?.[0]?.content?.[lang] ??
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

        </div>
    )
}

export default PageContent