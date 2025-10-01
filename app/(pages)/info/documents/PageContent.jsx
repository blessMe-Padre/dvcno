'use client'

import { Breadcrumbs } from "@/app/components";
import styles from './style.module.css';
import Image from "next/image";
import decor1 from '@/public/info/doc/decor1.svg';
import decor2 from '@/public/info/doc/decor2.svg';
import decor3 from '@/public/info/doc/decor3.svg';
import decor4 from '@/public/info/doc/decor4.svg';
import decor5 from '@/public/info/doc/decor5.svg';
import { DocumentComponent } from "@/app/components";

import useLangStore from '@/app/store/languageStore';

const PageContent = ({ data }) => {

    console.log('data', data);

    const { lang } = useLangStore();

    const data_docs = data?.sections?.documents?.[1]?.content[lang]?.list;
    const data_results = data?.sections?.report?.[1]?.content[lang]?.list;
    const data_acts = data?.sections?.acts?.[1]?.content[lang]?.list;
    const data_proccess = data?.sections?.graffic?.[1]?.content[lang]?.list;
    const data_predpicaniya = data?.sections?.orders?.[1]?.content[lang]?.list;

    return (
        <>
            <section>
                <div className="container">
                    <Breadcrumbs title={"Документы"} link={'info'} slug={"Сведения об образовательной организации"} />
                    <div className={styles.title_wrapper}>
                        <h2 className={styles.title}>{data?.sections?.documents?.[0]?.content[lang]?.title ?? 'Документы'}</h2>
                        <Image
                            src={decor1}
                            width={100}
                            height={100}
                            alt="image"
                        />
                    </div>

                    <ul className={styles.document_list}>
                        {data_docs.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.document} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <div className='container'>
                    <div className={styles.title_wrapper}>

                        <h2 className={styles.title}>{data?.sections?.report?.[0]?.content[lang]?.title ?? 'Отчет о результатах самообследования АНПОО "ДВЦНО" по годам'}
                        </h2>

                        <Image
                            src={decor2}
                            width={100}
                            height={100}
                            alt="image"
                        />
                    </div>


                    <ul className={styles.document_list}>
                        {data_results.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.document} />
                            </li>
                        ))}
                    </ul>
                </div>

            </section>

            <section className={`${styles.section} ${styles.section_custom}`}>
                <div className='container'>
                    <div className={styles.title_wrapper}>

                        <h2 className={styles.title}>{data?.sections?.acts?.[0]?.content[lang]?.title ?? 'Локально-нормативные акты АНПОО «ДВЦНО»'}
                        </h2>

                        <Image
                            src={decor4}
                            width={100}
                            height={100}
                            alt="image"
                        />
                        <Image
                            src={decor3}
                            width={100}
                            height={100}
                            alt="image"
                        />
                    </div>


                    <ul className={styles.document_list}>
                        {data_acts.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.document} />
                            </li>
                        ))}
                    </ul>
                </div>

            </section>

            <section className={styles.section}>
                <div className='container'>
                    <div className={styles.title_wrapper}>

                        <h2 className={styles.title}>{data?.sections?.data_proccess?.[0]?.content[lang]?.title ?? 'Графики оценочных процедур'}
                        </h2>

                        <Image
                            src={decor5}
                            width={100}
                            height={100}
                            alt="image"
                        />

                    </div>


                    <ul className={styles.document_list}>
                        {data_proccess.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.document} />
                            </li>
                        ))}
                    </ul>
                </div>

            </section>

            <section className={styles.section}>
                <div className='container'>
                    <div className={styles.title_wrapper}>

                        <h2 className={styles.title}>{data?.sections?.orders?.[0]?.content[lang]?.title ?? 'Предписания и отчеты об их устранении'}
                        </h2>

                        <Image
                            src={decor5}
                            width={100}
                            height={100}
                            alt="image"
                        />

                    </div>


                    <ul className={styles.document_list}>
                        {data_predpicaniya.map((item, index) => (
                            <li key={index}>
                                <DocumentComponent title={item.title} link={item.document} />
                            </li>
                        ))}
                    </ul>
                </div>

            </section>
        </>
    )
}

export default PageContent