'use client'
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

import City from "../Location/Location";
import VdsButton from "../Vds/VdsButton";
import Language from "../Language/Language";
import VdsPanel from "../VdsPanel/VdsPanel";
import SocialIcon from "../Socilal-icon/SocialIcon";
import CatalogButton from "../Catalog-button/CatalogButton";
import PopupMenu from "../Popup-menu/PopupMenu";
import Menu from "../Menu/Menu";
import Popup from "../Popup/Popup";
import PopupBtn from "../Popup-btn/PopupBtn";
import Search from "../Search/Search";

export default function Header() {
    const [panel, setPanel] = useState(false);
    const [panelBtn, setPanelBtn] = useState(true);
    const [opened, setOpened] = useState(false);
    const [searchOpened, setSearchOpened] = useState(false);

    // const currentLanguage = localStorage.getItem('language') || 'ru';



    const [popupActive, setPopupActive] = useState(false);



    return (
        <div className={styles.header}>

            {panel && <VdsPanel setPanel={setPanel} setPanelBtn={setPanelBtn} />}

            <div className={styles.row}>
                <div className={styles.item_row}>
                    <Link href="/" aria-label="Главная">
                        <Image
                            aria-hidden
                            src="/logo.svg"
                            alt="Логотип"
                            width={86}
                            height={86}
                            className={styles.header_logo}
                        />
                    </Link>
                    <p className={styles.p}>Дальневосточный центр непрерывного образования</p>
                </div>

                <div className={styles.item_row}>
                    <City />
                    {panelBtn && <VdsButton
                        setPanel={setPanel}
                        setPanelBtn={setPanelBtn}
                    />}

                    <div className={styles.header_social_wrapper}>
                        <SocialIcon
                            color="gray"
                            href="https://t.me/dvcno_ru"
                            icon="/icons/telegram.svg"
                            width="19"
                            height="17"
                            alt="Телеграм"
                        />
                        <SocialIcon
                            color="purple"
                            href="#"
                            icon="/icons/vk.svg"
                            width="23"
                            height="14"
                            alt="Вконтакте"
                        />
                    </div>

                    <Language />
                </div>
            </div>

            <div className={styles.row}>
                <div className="relative flex gap-20">
                    <CatalogButton
                        onClick={() => { setOpened(!opened) }}
                        opened={opened}
                    />
                    <PopupMenu opened={opened} />
                    <Menu />
                </div>

                <div className="relative flex gap-15 flex-0">
                    <button className={styles.modal_button}
                        onClick={() => setPopupActive(true)}
                    >
                        Задать вопрос
                    </button>

                    <button
                        className={styles.search_button}
                        onClick={() => setSearchOpened(!searchOpened)}
                    >
                        {!searchOpened ?
                            < Image
                                src="/icons/search.svg"
                                alt="Поиск"
                                width={20}
                                height={20}
                            />
                            :
                            < Image
                                src="/icons/close.svg"
                                alt="Поиск"
                                width={20}
                                height={20}
                            />
                        }
                    </button>
                    <button
                        className={`${styles.account_button} disabled`}
                    >
                        <Image
                            src="/icons/account.svg"
                            alt="Поиск"
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
                <Popup active={popupActive} setActive={setPopupActive} />
            </div>

            {searchOpened && <Search />}
        </div>
    )
}
