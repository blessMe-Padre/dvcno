'use client'
import Image from "next/image"
import styles from './style.module.css';
import { Cookies, Popup, SocialIcon } from "..";
import fetchApiServerData from '@/app/utils/fetchApiServerData';
import getMenu from '../../utils/getMenu';
import Link from "next/link";
import { useEffect, useState } from 'react';
import useLangStore from '@/app/store/languageStore';


const Footer = () => {
    const { lang } = useLangStore();
    const [popupActive, setPopupActive] = useState(false);
    const [menu, setMenu] = useState([]);
    const [socialLinks, setSocialLinks] = useState([]);

    // departments/82hpy5dfwda

    useEffect(() => {
        const fetchData = async () => {
            const menu = await getMenu();
            const footerMenu = menu.data.find(item => item?.alias === 'menu_footer');
            setMenu(footerMenu?.items);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchSocialLinks = async () => {
            const data = await fetchApiServerData('departments/82hpy5dfwda');
            setSocialLinks(data?.data?.social);
        };
        fetchSocialLinks();
    }, []);

    const linksRender = socialLinks?.map((item) => {
        let name = item.name;
        let link = item.link;

        switch (name) {
            case 'tg':
                return (
                    <a href={link}>
                        <svg
                            width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="25" />
                            <path d="M22.4405 28.413L22.0471 34.4021C22.6099 34.4021 22.8537 34.1404 23.1461 33.8261L25.785 31.0965L31.2531 35.4307C32.256 36.0356 32.9626 35.717 33.2331 34.4321L36.8224 16.2289L36.8234 16.2279C37.1415 14.6233 36.2872 13.9959 35.3102 14.3895L14.2125 23.1318C12.7726 23.7367 12.7944 24.6055 13.9677 24.9991L19.3616 26.8149L31.8903 18.33C32.48 17.9075 33.0161 18.1413 32.5751 18.5639L22.4405 28.413Z" fill="white" />
                        </svg>
                    </a>
                )
                break;
            case 'vk':
                return (
                    <a href={link}>
                        <svg
                            width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="25" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.4036 18.2958C37.5835 17.6909 37.4036 17.2456 36.5424 17.2456H33.6987C32.9751 17.2456 32.6414 17.63 32.4605 18.0543C32.4605 18.0543 31.0143 21.5947 28.9657 23.8944C28.3027 24.5613 28.0016 24.7729 27.6398 24.7729C27.4588 24.7729 27.1869 24.5613 27.1869 23.9554V18.2958C27.1869 17.5691 26.9876 17.2456 26.3853 17.2456H21.9134C21.4616 17.2456 21.1897 17.5824 21.1897 17.9025C21.1897 18.5904 22.2145 18.75 22.3196 20.6863V24.8936C22.3196 25.8164 22.1539 25.9837 21.792 25.9837C20.8279 25.9837 18.4825 22.4266 17.0905 18.3567C16.8207 17.5646 16.5477 17.2456 15.8208 17.2456H12.975C12.1625 17.2456 12 17.63 12 18.0543C12 18.8098 12.9641 22.5629 16.4903 27.5268C18.8411 30.9166 22.1506 32.7544 25.1655 32.7544C26.9735 32.7544 27.1967 32.3467 27.1967 31.6433V29.081C27.1967 28.2646 27.3678 28.1017 27.9409 28.1017C28.3634 28.1017 29.086 28.3144 30.7738 29.9484C32.7021 31.8859 33.0195 32.7544 34.105 32.7544H36.9486C37.7611 32.7544 38.1685 32.3467 37.9345 31.5403C37.6766 30.7382 36.7558 29.574 35.5349 28.1926C34.8719 27.4061 33.8775 26.5586 33.5752 26.1343C33.1538 25.5904 33.2741 25.3478 33.5752 24.8637C33.5752 24.8637 37.0418 19.9607 37.4025 18.2958H37.4036Z" fill="white" />
                        </svg>
                    </a>
                )
                break;
            case 'wa':
                return (
                    <a href={link}>
                        <svg
                            width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="25" />
                            <path d="M25.0028 13.9768H24.9972C18.9193 13.9768 13.9768 18.9207 13.9768 25C13.9768 27.4113 14.7539 29.6463 16.0753 31.461L14.7016 35.5561L18.9386 34.2016C20.6817 35.3563 22.7609 36.0232 25.0028 36.0232C31.0807 36.0232 36.0232 31.0779 36.0232 25C36.0232 18.9221 31.0807 13.9768 25.0028 13.9768ZM31.4169 29.5429C31.1509 30.2939 30.0955 30.9167 29.2536 31.0986C28.6776 31.2212 27.9253 31.319 25.3927 30.2691C22.1533 28.927 20.0671 25.6352 19.9045 25.4216C19.7488 25.2081 18.5955 23.6786 18.5955 22.0968C18.5955 20.5149 19.3988 19.7447 19.7226 19.414C19.9886 19.1426 20.4281 19.0185 20.8498 19.0185C20.9862 19.0185 21.1088 19.0254 21.219 19.0309C21.5429 19.0447 21.7054 19.064 21.919 19.5752C22.185 20.2159 22.8326 21.7978 22.9097 21.9604C22.9883 22.1229 23.0668 22.3434 22.9566 22.557C22.8532 22.7774 22.7623 22.8753 22.5997 23.0627C22.4371 23.2501 22.2828 23.3934 22.1202 23.5945C21.9714 23.7695 21.8033 23.9569 21.9907 24.2807C22.1781 24.5977 22.8257 25.6545 23.7792 26.5033C25.0096 27.5987 26.0072 27.9487 26.3641 28.0975C26.6301 28.2077 26.947 28.1816 27.1413 27.9749C27.3879 27.709 27.6924 27.268 28.0024 26.834C28.2229 26.5226 28.5012 26.484 28.7934 26.5942C29.091 26.6976 30.6659 27.4761 30.9897 27.6373C31.3135 27.7999 31.5271 27.8771 31.6056 28.0135C31.6828 28.1499 31.6828 28.7906 31.4169 29.5429Z" fill="white" />
                        </svg>
                    </a>
                )
                break;
            case 'ok':
                return (
                    <a href={link}>
                        <svg
                            width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="25" />
                            <path d="M24.9804 37.2692C21.5116 37.2692 18.6997 34.4427 18.6997 30.9563C18.6997 27.4697 21.5116 24.6431 24.9804 24.6431C28.4492 24.6431 31.2611 27.4697 31.2611 30.9563C31.2611 34.4427 28.4492 37.2692 24.9804 37.2692ZM24.9804 28.3465C23.5465 28.3465 22.3841 29.5149 22.3841 30.9562C22.3841 32.3974 23.5465 33.5658 24.9804 33.5658C26.4143 33.5658 27.5767 32.3974 27.5767 30.9562C27.5767 29.5149 26.4143 28.3465 24.9804 28.3465Z" fill="white" />
                            <path d="M27.1979 19.6198C29.7123 20.1346 31.2191 21.3315 31.2988 21.3957C32.0346 21.9888 32.1528 23.0691 31.5627 23.8088C30.9727 24.5483 29.898 24.6671 29.1621 24.0741C29.1465 24.0614 27.5394 22.8223 24.8952 22.8205C22.2511 22.8223 20.6101 24.0614 20.5945 24.0741C19.8586 24.6671 18.7839 24.5483 18.1939 23.8088C17.6038 23.0691 17.722 21.9888 18.4578 21.3957C18.5386 21.3306 20.1075 20.1026 22.6924 19.5998L19.0899 15.8156C18.4352 15.1331 18.4549 14.0465 19.1339 13.3884C19.4653 13.0673 19.8924 12.9076 20.3191 12.9076C20.7666 12.9076 21.2135 13.0834 21.5486 13.4327L24.8953 17.0161L28.5801 13.4095C29.2477 12.7395 30.3288 12.7406 30.9952 13.4114C31.6616 14.0823 31.6608 15.1691 30.9933 15.8389L27.1979 19.6198Z" fill="white" />
                        </svg>

                    </a>
                )
                break;
            case 'rt':
                return (
                    <a href={link}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="25" />
                            <path d="M26.1396 27.2095H17.249V23.7924H26.1396C26.6589 23.7924 27.02 23.8803 27.2012 24.0339C27.3824 24.1874 27.4947 24.4722 27.4947 24.8882V26.1151C27.4947 26.5534 27.3824 26.8381 27.2012 26.9917C27.02 27.1452 26.6589 27.2095 26.1396 27.2095ZM26.7495 20.5709H13.4785V35.184H17.249V30.4298H24.1975L27.4947 35.184H31.7168L28.0816 30.4075C29.4219 30.2145 30.0235 29.8157 30.52 29.1582C31.0163 28.5007 31.2651 27.4496 31.2651 26.0469V24.9511C31.2651 24.1192 31.1744 23.4617 31.0163 22.9578C30.858 22.454 30.5876 22.0157 30.2036 21.622C29.7978 21.2493 29.346 20.9869 28.8037 20.811C28.2615 20.6575 27.584 20.5709 26.7495 20.5709Z" fill="white" />
                            <path d="M34.6147 20.5695C36.2145 20.5695 37.5113 19.3254 37.5113 17.7908C37.5113 16.2561 36.2145 15.012 34.6147 15.012C33.0148 15.012 31.718 16.2561 31.718 17.7908C31.718 19.3254 33.0148 20.5695 34.6147 20.5695Z" fill="white" />
                        </svg>
                    </a>
                )
                break;
            case 'yt':
                return (
                    <a href={link}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="25" />
                            <g clip-path="url(#clip0_2114_15847)">
                                <path d="M38.7915 17.8553C38.4586 16.6036 37.4829 15.6168 36.2455 15.2798C33.9851 14.6542 24.943 14.6542 24.943 14.6542C24.943 14.6542 15.9013 14.6542 13.6408 15.2561C12.4272 15.5928 11.4278 16.6038 11.0949 17.8553C10.5 20.1416 10.5 24.8831 10.5 24.8831C10.5 24.8831 10.5 29.6485 11.0949 31.9108C11.4281 33.1624 12.4035 34.1491 13.641 34.4862C15.9251 35.1119 24.9434 35.1119 24.9434 35.1119C24.9434 35.1119 33.9851 35.1119 36.2455 34.51C37.4831 34.1732 38.4586 33.1864 38.7918 31.9349C39.3865 29.6484 39.3865 24.9071 39.3865 24.9071C39.3865 24.9071 39.4103 20.1415 38.7915 17.8553ZM22.0642 29.2634V20.5027L29.5831 24.883L22.0642 29.2634Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2114_15847">
                                    <rect width="29" height="22" fill="white" transform="translate(10.5 14)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                )
                break;
            case 'mx':
                return (
                    <a href={link}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="50" height="50" rx="25" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.2463 36.3498C22.9961 36.3498 21.9504 36.0213 20.1327 34.7073C18.983 36.1856 15.3421 37.3408 15.1834 35.3643C15.1834 33.8806 14.8549 32.6268 14.4826 31.2581C14.0391 29.5718 13.5354 27.6939 13.5354 24.9729C13.5354 18.4741 18.868 13.585 25.1861 13.585C31.5097 13.585 36.4645 18.715 36.4645 25.0331C36.4857 31.2535 31.4667 36.3166 25.2463 36.3498ZM25.3394 19.2023C22.2625 19.0435 19.8644 21.1732 19.3334 24.513C18.8954 27.2778 19.6728 30.6449 20.3353 30.8201C20.6528 30.8968 21.4522 30.2507 21.9504 29.7525C22.7742 30.3216 23.7336 30.6634 24.7317 30.7435C27.9199 30.8968 30.6441 28.4696 30.8581 25.2849C30.9828 22.0935 28.528 19.3904 25.3394 19.2077L25.3394 19.2023Z" fill="white" />
                        </svg>
                    </a>
                )
                break;
        }
    })

    const questionText = lang === 'ru' ? 'Задать вопрос' : 'Ask a question';
    const contactsText = lang === 'ru' ? 'Контакты' : 'Contacts';
    const addressText = lang === 'ru' ? 'г. Владивосток, ул. Гоголя, 41' : 'Vladivostok, Gogol Street, 41';
    const addressLinkText = lang === 'ru' ? 'Посмореть на карте' : 'View on the map';
    const policyText = lang === 'ru' ? 'Политика конфиденциальности' : 'Privacy policy';
    const nameText = lang === 'ru' ? 'Дальневосточный центр непрерывного образования' : 'Far Eastern Center for Continuing Education';

    return (
        <footer className={styles.footer}>
            <div className={`${styles.footer_content} container`}>
                <div className={styles.top}>
                    <Image
                        src="/logo.svg"
                        alt="логотип"
                        width={150}
                        height={150}
                    />

                    <div className={styles.footer_social_wrapper}>
                        <ul className={styles.footer_social_list}>
                            {linksRender}
                        </ul>
                        <button className={styles.modal_button}
                            onClick={() => setPopupActive(true)}
                        >
                            {questionText}
                        </button>

                        <Popup active={popupActive} setActive={setPopupActive} />

                    </div>
                </div>

                <div className={styles.middle}>
                    <ul className={styles.footer_list}>
                        {menu?.map((item, key) => (
                            <li key={key}>
                                <Link href={item.link}>
                                    {item?.title?.[lang]}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.footer_contacts}>
                        <div>
                            <p className={styles.info_title}>{contactsText}</p>
                        </div>
                        <div>
                            <a className={styles.info} href="tel:+74232150005">8 423 215-00-05 </a>
                        </div>
                        <div>
                            <a className={styles.info} href="mailto:dvcno-vl@dvcno.ru">dvcno-vl@dvcno.ru</a>
                        </div>
                        <div>
                            <p>{addressText}</p>
                        </div>
                        <div>
                            <a href="https://yandex.ru/maps/-/CHtVMW9f" target="_blank" style={{ color: '#FFB236', textDecoration: 'underline' }}>{addressLinkText}</a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>
                        {nameText} 2012 — {new Date().getFullYear()}
                    </p>

                    <div className={styles.bottom_content}>
                        <Link href="/processing-of-personal-data">
                            {policyText}
                        </Link>

                        {/* <Link href="/">
                            Пользовательское соглашения
                        </Link> */}
                    </div>
                </div>
            </div>

            <Cookies />
        </footer>
    )
}

export default Footer;
