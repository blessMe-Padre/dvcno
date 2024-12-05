import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";

import getPopupMenu from '../../hooks/getPopupMenu';
import Link from "next/link";

export default function PopupMenu({ opened }) {

    const [menuPopupData, setMenuPopupData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const popupMenu = await getPopupMenu();
            setMenuPopupData(popupMenu);
        };

        fetchData();
    }, []);

    return (
        <div className={`${styles.popup} ${opened ? styles.active : ''}`}>
            <ul className={styles.list}>
                {menuPopupData.map((item, index) => (
                    <li key={index} className={styles.item}>
                        <Link href={item.link}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
