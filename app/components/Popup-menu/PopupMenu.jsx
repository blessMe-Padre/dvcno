'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./style.module.css";

import getPopupMenu from '../../utils/getPopupMenu';
import Link from "next/link";

export default function PopupMenu({ opened, setOpened }) {
    const [menuPopupData, setMenuPopupData] = useState([]);
    const [openSubmenus, setOpenSubmenus] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const popupMenu = await getPopupMenu();
            setMenuPopupData(popupMenu);
        };
        fetchData();
    }, []);

    const toggleSubmenu = (index) => {
        setOpenSubmenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

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

    return (
        <div className={`${styles.popup} ${opened ? styles.active : ''}`}>
            <ul className={styles.list}>
                {menuPopupData?.map((item, index) => {
                    const hasSubmenu = item.submenu && item.submenu.length > 0;
                    const isOpen = openSubmenus[index];

                    return (
                        <li key={index} className={styles.item}>
                            {hasSubmenu ? (
                                <a
                                    href="#"
                                    className={styles.linkWithSubmenu}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleSubmenu(index);
                                    }}
                                >
                                    {item.title}
                                    <svg
                                        className={`${styles.svg} ${isOpen ? styles.up : ''} `}
                                        width="12"
                                        height="6"
                                        viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 1L5.85897 5L11.5 1" stroke="black" strokeLinecap="round"></path></svg>
                                </a>
                            ) : (
                                <Link
                                    href={item.link}
                                    onClick={() => setOpened(false)}
                                    className={styles.link}
                                >
                                    {item.title}
                                </Link>
                            )}

                            {hasSubmenu && isOpen && (
                                <motion.ul
                                    layout
                                    variants={variants}
                                    initial={"hidden"}
                                    animate={isOpen ? "visible" : "hidden"}
                                    className={styles.sublist}
                                >


                                    {item.submenu.map((subItem, subIndex) => (
                                        <li key={subIndex} className={styles.sublist_item}>
                                            <Link
                                                href={subItem.link}
                                                className={styles.sub_link}
                                                onClick={() => setOpened(false)}
                                            >
                                                {subItem.title}
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
