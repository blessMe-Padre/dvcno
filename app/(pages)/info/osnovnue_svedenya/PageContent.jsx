"use client"
import styles from './style.module.css';
import { Breadcrumbs } from '@/app/components';
import decor from '@/public/decor/image-1.png';
import Image from 'next/image';

import decor2 from '@/public/info/svedenya/decor.svg';
import decor3 from '@/public/info/decor_3.svg';

import useLangStore from '@/app/store/languageStore';

const languages = {
    ru: 'Основные сведения',
    en: 'Basic information',
    ch: '基本訊息'
};
const languages2 = {
    ru: 'Сведения об образовательной организации',
    en: 'Information about the educational organization',
    ch: '教育機構資訊'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const data_svedenya = data?.sections?.main?.[1]?.content[lang];
    const data_address = data?.sections?.addresses?.[1]?.content[lang];
    const documents_data = data?.sections?.docs?.[1]?.content[lang];
    const bank_info = data?.sections?.bank?.[1]?.content[lang];

    return (
        <>
            <section className={styles.section}>
                <div className="container relative">
                    <Breadcrumbs
                        slug={languages2[lang]}
                        link={'info'}
                        title={languages[lang]}
                    />

                    <h2 className={styles.title}>{data?.sections?.main?.[0]?.content[lang] ?? 'Основные сведения'}</h2>

                    <Image
                        className={styles.decor_img}
                        src={decor}
                        width={200}
                        heigth={80}
                        alt='decor'
                    />

                    <ul className={styles.list_svedenya}>
                        {data_svedenya.map((item, index) => (
                            <li className={`${styles.svedenya_item} anim_hover_card`} key={index}>
                                <p className={styles.svedenya_item_name}>{item.title}</p>
                                <p className={styles.svedenya_item_desc} dangerouslySetInnerHTML={{ __html: item.content }}></p>

                                <Image
                                    className={`${styles.decor_svg} dsv-image`}
                                    src={item.image ? process.env.NEXT_PUBLIC_API_SERVER + item.image : '/placeholder/placeholder.svg'}
                                    width={200}
                                    height={80}
                                    alt=''
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <div className='container'>
                    <h2 className={styles.title}>{data?.sections?.addresses?.[0]?.content[lang] ?? 'адреса мест осуществления образовательной деятельности'}
                    </h2>
                    <ul className={styles.list_svedenya_four}>
                        {data_address.map((item, index) => (
                            <li className={`${styles.svedenya_item} anim_hover_card`} key={index}>
                                <div className={styles.item_title_wrapper}>
                                    <Image
                                        className={`dsv-image`}
                                        src={process.env.NEXT_PUBLIC_API_SERVER + item.image}
                                        width={120}
                                        height={90}
                                        alt='decor'
                                    />
                                    {item.title}


                                    <Image className={styles.decor2_img} src={decor2} width={50} height={50} alt='decor_2' />
                                </div>

                                <div className={styles.field_wrapper}>
                                    <div className={styles.field_value} dangerouslySetInnerHTML={{ __html: item?.content }}></div>
                                </div>

                                <a
                                    href={item.link}
                                    className={styles.link}
                                >Посмотреть на карте</a>

                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <div className='container'>
                    <h2 className={styles.title}>{data?.sections?.docs?.[0]?.content[lang] ?? "документы на осуществление образовательной деятельности"}</h2>

                    <div className={styles.documents_wrapper}>
                        {documents_data.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.document_content} ${item.background_color === 'violet' ? styles.background_color_violet : styles.background_color_light_blue}`}
                            >
                                <p className={styles.document_name}>
                                    <span>{item.title}</span></p>

                                <ul className={styles.document_info} >
                                    <li>
                                        <a href={item.link}>
                                            <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                                        </a>
                                    </li>

                                    <li>
                                        <time>{item.time}</time>
                                    </li>
                                </ul>
                            </div>

                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className='container relative'>
                    <h2 className={styles.title}>{data?.sections?.bank?.[0]?.content[lang] ?? 'Банковские реквизиты АНПОО «ДВЦНО»'}</h2>

                    <Image
                        className={styles.decor3_img}
                        src={decor3}
                        width={200}
                        height={100}
                        alt=''
                    />

                    <div className={styles.bank_info}>
                        <p className={styles.bank_name} dangerouslySetInnerHTML={{ __html: bank_info?.title }} />
                        <div dangerouslySetInnerHTML={{ __html: bank_info?.content }}></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageContent