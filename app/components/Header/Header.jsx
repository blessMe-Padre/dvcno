"use client";
import { useState, useRef, useEffect } from "react";

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
import { motion } from "framer-motion";

import useLangStore from '@/app/store/languageStore';

export default function Header() {
  const [panel, setPanel] = useState(false);
  const [panelBtn, setPanelBtn] = useState(true);
  const [opened, setOpened] = useState(false);
  const [searchOpened, setSearchOpened] = useState(false);
  const [popupActive, setPopupActive] = useState(false);
  const menuRef = useRef(null);

  const { fetchDictionary, dictionary, lang } = useLangStore();

  useEffect(() => {
    fetchDictionary();
  }, [lang]);

  // закрываем меню при клике вне попапа
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpened(false);
      }
    };

    // обработчик кастомного события (клик по слайдеру)
    const handleSliderClick = () => {
      setOpened(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("sliderClick", handleSliderClick);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("sliderClick", handleSliderClick);
    };
  }, []);

  const variants = {
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const languages = {
    ru: 'Дальневосточный центр непрерывного образования',
    en: 'Far Eastern Center for Continuous Education',
    ch: '遠東繼續教育中心'
  };

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
              priority={true}
            />
          </Link>
          <p className={styles.p}>{languages[lang]}</p>
        </div>

        <div className={styles.item_row}>
          <City />
          {panelBtn && (
            <VdsButton setPanel={setPanel} setPanelBtn={setPanelBtn} />
          )}

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
        <div ref={menuRef} className="relative flex gap-20">
          <CatalogButton
            onClick={() => {
              setOpened(!opened);
            }}
            opened={opened}
            text={dictionary?.menu?.[lang]}
          />
          <div>
            <PopupMenu opened={opened} setOpened={setOpened} />
          </div>
          <Menu />
        </div>

        <div className="relative flex gap-15 flex-0">
          <button
            className={styles.modal_button}
            onClick={() => setPopupActive(true)}
          >
            {dictionary?.ask_question?.[lang]}
          </button>

          <button
            className={styles.search_button}
            title="В разработке"
            onClick={() => setSearchOpened(!searchOpened)}
          >
            {!searchOpened ? (
              <Image
                src="/icons/search.svg"
                alt="Поиск"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/icons/close.svg"
                alt="Поиск"
                width={20}
                height={20}
              />
            )}
          </button>
          <button className={`${styles.account_button} disabled`} title="В разработке">
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

      <motion.div
        layout
        variants={variants}
        initial={"hidden"}
        animate={searchOpened ? "visible" : "hidden"}
        className="relative"
      >
        <Search />
      </motion.div>
    </div>
  );
}
