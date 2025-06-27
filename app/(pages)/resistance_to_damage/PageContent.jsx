'use client'

import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import decor from '@/public/damage/decor.svg';
import Image from "next/image";
import { DocumentComponent } from "@/app/components";
import useLangStore from '@/app/store/languageStore';

const languages = {
    ru: 'Anti-corruption',
    en: 'Counteracting the ideology of terrorism and extremism',
    ch: '反腐敗'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const data_damage = data?.sections?.main?.[1]?.content?.[lang]?.list;

    return (
        <div className="container">
            <Breadcrumbs
                title={languages[lang]}
            />
            <div className={styles.title_wrapper}>
                <h2 className={`title ${styles.title}`}>
                    {data?.sections?.main?.[0]?.content?.[lang] ?? 'Противодействие коррупции'}
                </h2>
                <Image
                    src={decor}
                    className={styles.decor}
                    width={150}
                    height={50}
                    alt='/'
                />
            </div>

            <ul className={styles.document_list}>
                {data_damage && data_damage.length > 0 ?
                    (
                        data_damage.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.document} />
                            </li>
                        ))
                    ) : (<p>Данные не загружены</p>)
                }
            </ul>
        </div>
    )
}

export default PageContent