import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./style.module.css";
import getMenu from '../../utils/getMenu';
import getPopupMenu from '../../utils/getPopupMenu';

export default function Menu() {
    const [menuData, setMenuData] = useState([]);
    // const [menuPopupData, setMenuPopupData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const menu = await getMenu();
            // const popupMenu = await getPopupMenu();
            setMenuData(menu);
            // setMenuPopupData(popupMenu);
        };

        fetchData();
    }, []);

    return (
        <ul className={styles.list}>
            {menuData.map((item, index) => (
                <li key={index} className={styles.menuTitle}>
                    <a
                        className={styles.link}
                        href="#">
                        <span>
                            {item.title}
                        </span>

                        {item.submenu && item.submenu.length > 0 && (
                            <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 1L5.85897 5L11.5 1" strokeLinecap="round" />
                            </svg>
                        )}
                    </a>

                    {item.submenu && item.submenu.length > 0 && (
                        <ul className={styles.sublist}>
                            {item.submenu.map((subItem, index) => (
                                <li className={styles.sublist_item} key={index}>
                                    <Link
                                        className={styles.sub_link}
                                        href={subItem.link}>
                                        {subItem.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    )
}
