'use client'

import Card from "@/app/components/Cards/Card/Card";
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import useLangStore from '@/app/store/languageStore';


const languages = {
    ru: 'Педагогический состав',
    en: 'Teaching staff',
    ch: '教學人員'
};
const languages2 = {
    ru: 'Сведения об образовательной организации',
    en: 'Information about the educational organization',
    ch: '教育機構資訊'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const educationPages = data?.sections?.list?.[0]?.content?.[lang];

    return (
        <div className="container">
            <Breadcrumbs
                slug={languages2[lang]}
                link={'info'}
                title={languages[lang]}
            />
            <h2 className={`title ${styles.title}`}>
                {data?.sections?.header?.[0]?.content?.[lang] ?? 'Педагогический состав'}
            </h2>

            <ul className={styles.list}>
                {educationPages && educationPages.length > 0 ? (
                    educationPages.map((item) => (
                        <li key={item.id}>
                            <Card
                                image={item.image}
                                description={item.title}
                                link={`education/${item.link}`}
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