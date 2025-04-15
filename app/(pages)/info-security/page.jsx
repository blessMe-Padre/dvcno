'use client';

import Image from 'next/image';
import styles from './info.module.css';
import { Breadcrumbs } from '@/app/components';
import useTranslationsStore, { TRANSLATION_SECTIONS } from '@/app/store/translationsStore';
import { useEffect } from 'react';
import Head from 'next/head';

const links = [
    {
        title: 'Локальные акты',
        link: '/info-security/lokalnye-akty'
    },
    {
        title: 'Нормативное регулирование',
        link: '/info-security/normativnoe-regulirovanie'
    },
    {
        title: 'Педагогическим работникам',
        link: '/info-security/pedagogicheskim-rabotnikam'
    },
    {
        title: 'Обучающимся',
        link: '/info-security/obuchayushchimsya'
    },
    {
        title: 'Родителям',
        link: '/info-security/roditelyam'
    },
    {
        title: 'Детские безопасные сайты',
        link: '/info-security/detskie-bezopasnye-sajty'
    }
];

const pageTextData = '<p>На сайте федерального государственного бюджетного научного учреждения "Центр защиты прав и интересов детей" Минобрнауки России организована работа по оказанию консультативной помощи подросткам и родителям (законным представителям) в области информационной безопасности в сети "Интернет" "Твой безопасный кибермаршрут".</p><p>В письме Министерства образования и науки РФ от 14 мая 2018 г. N 08-1184 "О направлении информации" предлагаются методические рекомендации о размещении на информационных стендах, официальных Интернет-сайтах и других информационных ресурсах общеобразовательных организаций и органов, осуществляющихся управление в сфере образования, информации о безопасном поведении и использовании сети "Интернет".</p><p>Методические рекомендации направлены на качественное повышение уровня информационной деятельности общеобразовательных организаций и органов, осуществляющих управление в сфере образования, в части информирования учащихся, их родителей (законных представителей) и педагогических работников об основных аспектах информационной безопасности.</p><p>В связи с проблемами информационной безопасности обучающихся рекомендуем педагогам и родителям (законным представителям) ознакомиться с Федеральным списком запрещённых экстремистских материалов, опубликованных на официальном сайте Министерства юстиции Российской Федерации.</p>';

export default function Page() {
    const { getTranslation, fetchTranslations } = useTranslationsStore();
    const sanitizedContent = pageTextData || '';

    useEffect(() => {
        // Загружаем переводы при монтировании компонента
        fetchTranslations()
    }, [fetchTranslations]);

    // Получаем заголовок напрямую из store
    const pageTitle = getTranslation('info_security', TRANSLATION_SECTIONS.HEADERS);

    return (
        <>
            <Head>
                <title>ДВЦНО | {pageTitle}</title>
                <meta name="description" content={pageTitle} />
            </Head>
            
            <div className="container">
                <Breadcrumbs title={pageTitle} />

                <div className={styles.title_wrapper}>
                    <h2 className={`title ${styles.half_title}`}>
                        {pageTitle}
                    </h2>
                    <Image
                        src="/info-security/image-1.svg"
                        alt="Изображение"
                        width={125}
                        height={125}
                        className="dsv-image"
                    />
                </div>

                <ul className={styles.link_wrapper}>
                    {links && links?.map((link, index) => (
                        <li key={index}>
                            <a href={link.link} className={styles.link}>
                                <span>{link.title}</span>
                                <Image
                                    src="/info-security/arrow-icon.svg"
                                    alt="Изображение"
                                    width={22}
                                    height={22}
                                    className="dsv-image"
                                />
                            </a>
                        </li>
                    ))}
                </ul>

                <div className={styles.page_content} dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
            </div>
        </>
    );
}