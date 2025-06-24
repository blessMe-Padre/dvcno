'use client'
import Card from "@/app/components/Cards/Card/Card";
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";

import useLangStore from '@/app/store/languageStore';

const languages = {
    ru: 'Вакантные места для приёма (перевода) обучающихся',
    en: 'Vacancies for admission (transfer) of students',
    ch: '入學（插班）學生名額'
};
const languages2 = {
    ru: 'Сведения об образовательной организации',
    en: 'Information about the educational organization',
    ch: '教育機構資訊'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const educationPages = data?.sections?.main?.[1]?.content?.[lang];

    return (
        <div className="container">
            <Breadcrumbs
                slug={languages2[lang]}
                link={'info'}
                title={languages[lang]}
            />

            <h2 className={`title ${styles.title}`}>
                {data?.sections?.main?.[0]?.content?.[lang] ?? 'Вакантные места для приёма (перевода) обучающихся'}
            </h2>

            <ul className={styles.list}>
                {educationPages && educationPages.length > 0 ? (
                    educationPages.map((item) => (
                        <li key={item.id}>
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