"use client"
import styles from './style.module.css';
import { Breadcrumbs, AnimateElement } from "@/app/components";
import decor from '@/public/decor/image-1.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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

const tileLanguages = [{
    ru: 'Полное наименование организации:',
    en: 'Full name of the organization:',
    ch: '組織の完全な名称:'
}, {
    ru: 'Краткое наименование организации:',
    en: 'Short name of the organization:',
    ch: '組織の簡略な名称:'
},
{
    ru: 'Год создания учреждения:',
    en: 'Year of establishment of the institution:',
    ch: '機関の設立年:'
},
{
    ru: 'Юридический, почтовый и фактический адрес:',
    en: 'Legal, postal and actual address:',
    ch: '法的、郵送および実際の住所:'
},
{
    ru: 'Контакты:',
    en: 'Contacts:',
    ch: '連絡先:'
},
{
    ru: 'Режим работы:',
    en: 'Working hours:',
    ch: '営業時間:'
},
{
    ru: 'Учредитель:',
    en: 'Founder:',
    ch: '設立者:'
},
{
    ru: 'Руководитель:',
    en: 'Director:',
    ch: '責任者:'
}
];

const PageContent = ({ data }) => {
    const { lang } = useLangStore();
    const data_svedenya = data?.sections?.main?.[1]?.content[lang]?.[0];
    const data_address = data?.sections?.addresses?.[1]?.content[lang];
    const documents_data = data?.sections?.docs?.[1]?.content[lang];
    const bank_info = data?.sections?.bank?.[1]?.content[lang];

    const manager = data_svedenya.management_positions.split('<br />');

    const bank_images = data?.sections?.bank?.[1]?.content[lang]?.images;
    const bank_info_image_big = bank_images?.big;
    const bank_info_image_medium = bank_images?.medium;
    const bank_info_image_small = bank_images?.small;

    console.log(bank_images);

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 768);
            setIsTablet(width > 768 && width <= 1200);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const bankBackground = isMobile
        ? (bank_info_image_small || bank_info_image_medium || bank_info_image_big)
        : isTablet
            ? (bank_info_image_medium || bank_info_image_big || bank_info_image_small)
            : (bank_info_image_big || bank_info_image_medium || bank_info_image_small);


    return (
        <>
            <section className={styles.section}>
                <div className="container relative">
                    <Breadcrumbs
                        slug={languages2[lang]}
                        link={'info'}
                        title={languages[lang]}
                    />

                    <h2 className={styles.title}>{data?.sections?.main?.[0]?.content[lang]?.title ?? 'Основные сведения'}</h2>

                    <Image
                        className={styles.decor_img}
                        src={decor}
                        width={200}
                        heigth={80}
                        alt='decor'
                    />

                    <ul className={styles.list_svedenya}>
                        <li className={`${styles.svedenya_item} anim_hover_card`}>
                            <div>
                                <h3 className={styles.svedenya_item_name}>{tileLanguages[0][lang]}</h3>
                                <div className={styles.svedenya_item_desc} dangerouslySetInnerHTML={{ __html: data_svedenya.title }}></div>
                            </div>
                            <Image
                                className={`${styles.decor_svg} dsv-image`}
                                src='/osnovnye/svg_1.svg'
                                width={60}
                                height={60}
                                alt=''
                            />
                        </li>
                        <li className={`${styles.svedenya_item} anim_hover_card`}>
                            <div>
                                <h3 className={styles.svedenya_item_name}>{tileLanguages[1][lang]}</h3>
                                <div className={styles.svedenya_item_desc} dangerouslySetInnerHTML={{ __html: data_svedenya.subtitle }}></div>
                            </div>
                            <Image
                                className={`${styles.decor_svg} dsv-image`}
                                src='/osnovnye/svg_8.svg'
                                width={60}
                                height={60}
                                alt=''
                            />
                        </li>
                        <li className={`${styles.svedenya_item} anim_hover_card`}>
                            <div>
                                <h3 className={styles.svedenya_item_name}>{tileLanguages[2][lang]}</h3>
                                <div className={styles.svedenya_item_desc} dangerouslySetInnerHTML={{ __html: data_svedenya.description }}></div>
                            </div>
                            <Image
                                className={`${styles.decor_svg} dsv-image`}
                                src='/osnovnye/svg_10.svg'
                                width={60}
                                height={60}
                                alt=''
                            />
                        </li>
                        <li className={`${styles.svedenya_item} anim_hover_card`}>
                            <div>
                                <h3 className={styles.svedenya_item_name}>{tileLanguages[3][lang]}</h3>
                                <div className={styles.svedenya_item_desc} dangerouslySetInnerHTML={{ __html: data_svedenya.address }}></div>
                            </div>
                            <Image
                                className={`${styles.decor_svg} dsv-image`}
                                src='/osnovnye/svg_3.svg'
                                width={60}
                                height={60}
                                alt=''
                            />
                        </li>
                        <li className={`${styles.svedenya_item} anim_hover_card`}>
                            <div>
                                <h3 className={styles.svedenya_item_name}>{tileLanguages[4][lang]}</h3>
                                <div className={styles.svedenya_item_desc} dangerouslySetInnerHTML={{ __html: data_svedenya.phones }}></div>
                                <div className={styles.svedenya_item_desc} dangerouslySetInnerHTML={{ __html: data_svedenya.emails }}></div>
                            </div>
                            <Image
                                className={`${styles.decor_svg} dsv-image`}
                                src='/osnovnye/svg_4.svg'
                                width={60}
                                height={60}
                                alt=''
                            />
                        </li>
                        <li className={`${styles.svedenya_item} anim_hover_card`}>
                            <div>
                                <h3 className={styles.svedenya_item_name}>{tileLanguages[5][lang]}</h3>
                                <div className={styles.svedenya_item_desc} dangerouslySetInnerHTML={{ __html: data_svedenya.shedule }}></div>
                            </div>
                            <Image
                                className={`${styles.decor_svg} dsv-image`}
                                src='/osnovnye/svg_5.svg'
                                width={60}
                                height={60}
                                alt=''
                            />
                        </li>
                        <li className={`${styles.svedenya_item} anim_hover_card`}>
                            <div>
                                <h3 className={styles.svedenya_item_name}>{tileLanguages[6][lang]}</h3>
                                <div className={styles.svedenya_item_desc} dangerouslySetInnerHTML={{ __html: manager[0] }}></div>
                            </div>
                            <Image
                                className={`${styles.decor_svg} dsv-image`}
                                src='/osnovnye/svg_6.svg'
                                width={60}
                                height={60}
                                alt=''
                            />
                        </li>
                        <li className={`${styles.svedenya_item} anim_hover_card`}>
                            <div>
                                <h3 className={styles.svedenya_item_name}>{tileLanguages[7][lang]}</h3>
                                <div className={styles.svedenya_item_desc} dangerouslySetInnerHTML={{ __html: manager[1] }}></div>
                            </div>
                            <Image
                                className={`${styles.decor_svg} dsv-image`}
                                src='/osnovnye/svg_7.svg'
                                width={60}
                                height={60}
                                alt=''
                            />
                        </li>
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <div className='container'>
                    <AnimateElement element='h2' className={styles.title}>
                        {data?.sections?.addresses?.[0]?.content[lang]?.title ?? 'адреса мест осуществления образовательной деятельности'}
                    </AnimateElement>

                    <ul className={styles.list_svedenya_four}>
                        {data_address.map((item, index) => (
                            <AnimateElement element='li' className={`${styles.svedenya_item} anim_hover_card`} animationDelay={index * 100} key={index}>
                                <div className={styles.item_title_wrapper}>
                                    {item?.thumbnail && (
                                        <Image
                                            className={`dsv-image`}
                                            src={item.thumbnail ? process.env.NEXT_PUBLIC_API_SERVER + item.thumbnail : '/placeholder/placeholder.svg'}
                                            width={80}
                                            height={80}
                                            loading='lazy'
                                            alt='decor'
                                        />
                                    )}
                                    {item.title}
                                    <Image className={styles.decor2_img} src={decor2} width={50} height={50} alt='decor_2' />
                                </div>

                                <div className={styles.field_wrapper}>
                                    <b>Адрес:</b>
                                    <div className={styles.field_value} dangerouslySetInnerHTML={{ __html: item?.address }}></div>
                                </div>

                                <a
                                    href={item.link ? item.link : '/'}
                                    className={styles.link}
                                >Посмотреть на карте</a>
                            </AnimateElement>
                        ))}
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <div className='container'>
                    <AnimateElement element='h2' className={styles.title}>
                        {data?.sections?.docs?.[0]?.content[lang]?.title ?? "документы на осуществление образовательной деятельности"}
                    </AnimateElement>

                    <div className={styles.documents_wrapper}>
                        {documents_data.map((item, index) => (
                            <div
                                key={index}
                                className={`${styles.document_content} ${item.background_color === 'violet' ? styles.background_color_violet : styles.background_color_light_blue}`}
                            >
                                <p className={styles.document_name}>
                                    <span>{item.title}</span></p>

                                <div className={styles.document_content_text} dangerouslySetInnerHTML={{ __html: item.content }}></div>

                            </div>

                        ))}
                    </div>
                </div>
            </section>


            <section className={styles.section}>
                <div className='container relative'>
                    <h2 className={styles.title}>{data?.sections?.bank?.[0]?.content[lang]?.title ?? 'Банковские реквизиты АНПОО «ДВЦНО»'}</h2>

                    <Image
                        className={styles.decor3_img}
                        src={decor3}
                        width={200}
                        height={100}
                        alt=''
                    />

                    <div
                        className={styles.bank_info}
                        style={bankBackground ? {
                            backgroundImage: `url(${process.env.NEXT_PUBLIC_API_SERVER}${bankBackground})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        } : undefined}
                    >
                        <p className={styles.bank_name} dangerouslySetInnerHTML={{ __html: bank_info?.title }} />
                        <div dangerouslySetInnerHTML={{ __html: bank_info?.content }}></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PageContent