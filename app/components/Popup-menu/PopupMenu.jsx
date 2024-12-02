import Image from "next/image";
import styles from "./style.module.css";

import { popupMenuData } from "@/mock-data/menu-data";
import Link from "next/link";

export default function PopupMenu({ opened }) {
    return (
        <div className={`${styles.popup} ${opened ? styles.active : ''}`}>
            <ul className={styles.list}>
                {popupMenuData.map((item, index) => (
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
