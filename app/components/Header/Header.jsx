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


export default function Header() {
    const [panel, setPanel] = useState(false);
    const [panelBtn, setPanelBtn] = useState(true);
    const [opened, setOpened] = useState(false);

    const currentLanguage = localStorage.getItem('language') || 'ru';

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
                    <Language />

                    <div className="flex gap-10">
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
                </div>
            </div>

            <div className={styles.row}>
                <div className="relative">
                    <CatalogButton
                        onClick={() => { setOpened(!opened) }}
                        opened={opened}
                    />

                    <PopupMenu />

                </div>
            </div>
        </div>
    )
}
