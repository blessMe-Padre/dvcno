'use client'

import useLangStore from '@/app/store/languageStore';
import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';

import styles from './style.module.css';

const PageContent = ({ data }) => {
    const { lang } = useLangStore();

    return (
        <div className='container'>
            <Breadcrumbs title={data?.title?.[lang]} />
            <h1 className='visually-hidden'>{data?.title?.[lang]}</h1>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: data?.sections?.main?.[0]?.content?.[lang] }} />
        </div>
    )
}

export default PageContent;