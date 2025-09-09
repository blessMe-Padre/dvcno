'use client'

import useLangStore from '@/app/store/languageStore';
import Image from "next/image";
import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import { insertSafeContent } from '@/app/utils/insertSafeContent';
import styles from './style.module.css';

const PageContent = ({ data }) => {
    const { lang } = useLangStore();

    return (
        <div className='container'>
            <Breadcrumbs title={data?.title?.[lang]} />
            <h1>{data?.title?.[lang]}</h1>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: data?.sections?.main?.[2]?.content?.[lang] }} />
        </div>
    )
}

export default PageContent;