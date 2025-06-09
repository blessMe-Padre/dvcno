'use client'
import useLangStore from '@/app/store/languageStore';

import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import Image from 'next/image';
import styles from './style.module.css';

const PageContent = ({ page }) => {
    console.log(page);

    const { lang } = useLangStore();

    const sanitizedContent = page?.content?.[lang] || '';
    if (!page) {
        notFound();
    }

    return (
        <div className='container'>
            <Breadcrumbs title={page.title?.[lang]} />

            <h1 className={styles.title}>{page.title?.[lang]}</h1>

            <header className={styles.header}>

                <div className={styles.item}>
                    <Image
                        src={'/icons/clock.svg'}
                        alt={"время"}
                        width={25}
                        height={25}
                    />
                    <div className={styles.tag}>Время чтения: {page.time_to_read?.[lang] || '2 минуты'}</div>
                </div>
            </header>

            <div className={styles.image_wrapper}>
                <Image
                    src={page.images[0].slide ? process.env.NEXT_PUBLIC_API_SERVER + page.images[0].slide : '/placeholder/placeholder.svg'}
                    alt={page.title}
                    width={1460}
                    height={723}
                    className={styles.image}
                />
            </div>

            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            ></div>
        </div>
    )
}

export default PageContent