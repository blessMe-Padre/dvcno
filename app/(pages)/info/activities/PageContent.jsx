'use client'
import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import { DocumentComponent } from "@/app/components";
import useLangStore from '@/app/store/languageStore';

const languages = {
    ru: 'Финансово-хозяйственная деятельность',
    en: 'Financial and economic activities',
    ch: '管理'
};
const languages2 = {
    ru: 'Сведения об образовательной организации',
    en: 'Information about the educational organization',
    ch: '教育機構資訊'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const data_activities = data?.sections?.list?.[0]?.content?.[lang]?.list;

    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs
                        slug={languages2[lang]}
                        link={'info'}
                        title={languages[lang]}
                    />

                    <h2 className={`title ${styles.title}`}>
                        {data?.sections?.header?.[0]?.content?.[lang] ?? 'Финансово-хозяйственная деятельность'}
                    </h2>


                    <p className={styles.subtitle}>
                        {data?.title?.[lang] ?? 'План финансово-хозяйственной деятельности'}
                    </p>

                    <div>
                        <ul className={styles.document_list}>
                            {data_activities && data_activities.length > 0 ?
                                (

                                    data_activities.map((item, index) => (
                                        <li key={index}>
                                            <DocumentComponent title={item.title} link={item.document} />
                                        </li>
                                    ))
                                ) : (<p>Данные не загружены</p>)
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageContent