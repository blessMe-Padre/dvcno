'use client'

import styles from "./style.module.css";
import Breadcrumbs from "@/app/components/Breadcrumbs/Breadcrumbs";
import { DocumentComponent, AnimateElement } from "@/app/components";
import useLangStore from '@/app/store/languageStore';

const languages = {
    ru: 'Платные образовательные услуги',
    en: 'Paid educational services',
    ch: '付費教育服務'
};
const languages2 = {
    ru: 'Сведения об образовательной организации',
    en: 'Information about the educational organization',
    ch: '教育機構資訊'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const data_order = data?.sections?.services?.[1]?.content?.[lang]?.list;
    const data_price = data?.sections?.cost?.[1]?.content?.[lang]?.list;
    const data_template = data?.sections?.template?.[1]?.content?.[lang]?.list;

    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs
                        slug={languages2[lang]}
                        link={'info'}
                        title={languages[lang]}
                    />

                    <AnimateElement element="h2" className={`title ${styles.title}`}>
                        {data?.sections?.services?.[0]?.content?.[lang]?.title ?? 'Платные образовательные услуги'}
                    </AnimateElement>


                    <div>
                        <ul className={styles.document_list}>
                            {data_order && data_order.length > 0 ?
                                (
                                    data_order.map((item, index) => (
                                        <AnimateElement element="li" key={index} animationName="fadeLeft" animationDelay={index * 100}>
                                            <DocumentComponent title={item.title} link={item.document} />
                                        </AnimateElement>
                                    ))
                                )
                                :
                                (<p>Данные не загружены</p>)
                            }
                        </ul>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <AnimateElement element="h2" className={`title ${styles.title}`}>
                        {data?.sections?.cost?.[0]?.content?.[lang]?.title ?? 'Стоимость обучения по образовательным программам'}
                    </AnimateElement>
                    <ul className={styles.document_list}>
                        {data_price && data_price.length > 0 ?
                            (
                                data_price.map((item, index) => (
                                    <AnimateElement element="li" key={index} animationName="fadeLeft" animationDelay={index * 100}>
                                        <DocumentComponent title={item.title} link={item.document} />
                                    </AnimateElement>
                                ))
                            ) : (
                                <p>Данные не загружены</p>
                            )
                        }
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <div className="container">
                    <AnimateElement element="h2" className={`title ${styles.title}`}>
                        {data?.sections?.template?.[0]?.content?.[lang]?.title
                            ?? 'Шаблоны договоров об оказании платных образовательных услуг 2020-2024 учебные года'
                        }
                    </AnimateElement>


                    <div>
                        <ul className={styles.document_list}>
                            {data_template && data_template.length > 0 ?
                                (

                                    data_template.map((item, index) => (
                                        <AnimateElement element="li" key={index} animationName="fadeLeft" animationDelay={index * 100}>
                                            <DocumentComponent title={item.title} link={item.document} />
                                        </AnimateElement>
                                    ))
                                ) :
                                (<p>Данные не загружены</p>)
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageContent