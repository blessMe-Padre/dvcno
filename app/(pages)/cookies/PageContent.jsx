'use client'
import styles from './style.module.css';
import { Breadcrumbs, AnimateElement } from '@/app/components';
import useLangStore from '@/app/store/languageStore';

const languages = {
    ru: 'Куки',
    en: 'Cookies',
    ch: 'Cookies'
};

const PageContent = ({ data }) => {
    const { lang } = useLangStore();

    return (
        <>
            <section className={styles.section}>
                <div className="container">
                    <Breadcrumbs
                        link={'/'}
                        title={languages[lang]}
                    />
                    <div className="api_content">
                        <p>Мы очень много работаем над сайтом «Компас». Делаем его современным, удобным, функциональным и, конечно, информативным.</p>
                        <p>Знаем, как для вас важно, чтобы ничего не зависало, информация была актуальной, все продукты в каталогах соответствовали представленным в магазинах по цене, наличию и еще очень много других факторов.</p>
                        <p>Мы хотим еще быстрее отвечать на запросы, реагировать на проблемы с сайтом и выбирать правильный вектор его развития. Для этого нам очень нужны ваши cookie.</p>
                    </div>
                    <button className={`${styles.button} ${styles.button_reject}`}>Отклонить</button>

                </div>
            </section>
        </>
    )
}

export default PageContent