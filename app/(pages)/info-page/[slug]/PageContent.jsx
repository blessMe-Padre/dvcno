'use client'

import useLangStore from '@/app/store/languageStore';
import Image from "next/image";
import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import { insertSafeContent } from '@/app/utils/insertSafeContent';
import styles from './style.module.css';

const content = `<p>content</p>`; // TODO: change to content from API

const PageContent = ({ data }) => {

    console.log(data);
    const { lang } = useLangStore();

    return (
        <div className='container'>
            <Breadcrumbs title={data?.title?.[lang]} />
            <h1>{data?.title?.[lang]}</h1>
            <div>
                {insertSafeContent(content)}
            </div>

        </div>
    )
}

export default PageContent;